import * as THREE from 'three';
import type { VehicleId } from '../types';
import { ALL_ENCYCLOPEDIA, getAllEntries } from '../game/config/VehicleEncyclopedia';
import { MACHINES } from '../game/config/MachineConfig';
import { createVehicleModel } from '../game/entities/vehicles/VehicleFactory';
import type { SFXGenerator } from '../game/audio/SFXGenerator';
import type { EncyclopediaEntry } from '../types';

/**
 * 図鑑オーバーレイ（カテゴリタブ + グリッド + 詳細モーダル）
 */
export class EncyclopediaOverlay {
  private overlay: HTMLDivElement;
  private sfx: SFXGenerator;
  private collectedIds: VehicleId[] = [];
  private selectedCategory = '';

  // 3D preview for detail modal
  private previewRenderer: THREE.WebGLRenderer | null = null;
  private previewScene: THREE.Scene | null = null;
  private previewCamera: THREE.PerspectiveCamera | null = null;
  private previewModel: THREE.Group | null = null;
  private previewAnimId = 0;
  private previewAnimating = false;

  private _onClose: (() => void) | null = null;

  constructor(sfx: SFXGenerator) {
    this.sfx = sfx;
    this.overlay = document.createElement('div');
    this.setupOverlay();
  }

  private setupOverlay(): void {
    this.overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(26, 10, 46, 0.95);
      z-index: 50;
      display: none;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;
      padding: 1rem;
      font-family: 'Zen Maru Gothic', sans-serif;
    `;
  }

  set onClose(cb: (() => void) | null) {
    this._onClose = cb;
  }

  show(collectedIds: VehicleId[]): void {
    this.collectedIds = collectedIds;
    this.selectedCategory = MACHINES[0]?.id ?? '';
    this.overlay.style.display = 'flex';
    this.buildContent();
  }

  hide(): void {
    this.overlay.style.display = 'none';
    this.stopPreview();
    this.overlay.innerHTML = '';
  }

  private buildContent(): void {
    this.overlay.innerHTML = '';

    // Title
    const title = document.createElement('h1');
    title.textContent = '� ずかん';
    title.style.cssText = `
      color: #FFD700;
      font-size: 2rem;
      font-weight: 900;
      text-shadow: 0 3px 6px rgba(0,0,0,0.5);
      margin-bottom: 0.8rem;
    `;
    this.overlay.appendChild(title);

    // Total progress
    const allEntries = getAllEntries();
    const totalCollected = allEntries.filter(e => this.collectedIds.includes(e.id)).length;
    const progress = document.createElement('p');
    progress.textContent = `ぜんぶ: ${totalCollected} / ${allEntries.length}`;
    progress.style.cssText = 'color: #fff; font-size: 1rem; margin-bottom: 0.8rem;';
    this.overlay.appendChild(progress);

    // Category tabs
    const tabBar = document.createElement('div');
    tabBar.style.cssText = `
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 1rem;
      max-width: 600px;
      width: 100%;
    `;

    for (const machine of MACHINES) {
      const tab = document.createElement('button');
      const colorHex = '#' + machine.themeColor.toString(16).padStart(6, '0');
      const isActive = machine.id === this.selectedCategory;
      const catEntries = ALL_ENCYCLOPEDIA[machine.id] ?? [];
      const catCollected = catEntries.filter(e => this.collectedIds.includes(e.id)).length;

      tab.textContent = `${machine.emoji} ${machine.name} ${catCollected}/${catEntries.length}`;
      tab.style.cssText = `
        background: ${isActive ? colorHex : 'rgba(255,255,255,0.1)'};
        border: 2px solid ${colorHex};
        border-radius: 1.5rem;
        padding: 0.4rem 0.8rem;
        color: #fff;
        font-family: 'Zen Maru Gothic', sans-serif;
        font-size: clamp(0.7rem, 2vw, 0.9rem);
        font-weight: 700;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.2s;
      `;
      tab.addEventListener('click', () => {
        this.selectedCategory = machine.id;
        this.buildContent();
      });
      tabBar.appendChild(tab);
    }
    this.overlay.appendChild(tabBar);

    // Current category entries
    const entries = ALL_ENCYCLOPEDIA[this.selectedCategory] ?? [];
    const currentMachine = MACHINES.find(m => m.id === this.selectedCategory);

    // Grid
    const grid = document.createElement('div');
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.8rem;
      max-width: 600px;
      width: 100%;
      margin-bottom: 1.5rem;
    `;

    for (const entry of entries) {
      const isUnlocked = this.collectedIds.includes(entry.id);
      const card = document.createElement('div');

      const colorHex = '#' + entry.themeColor.toString(16).padStart(6, '0');

      if (isUnlocked) {
        card.style.cssText = `
          background: linear-gradient(135deg, ${colorHex}88, ${colorHex}44);
          border-radius: 16px;
          padding: 0.8rem 0.5rem;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        `;
        card.innerHTML = `
          <div style="font-size: 2.2rem;">${entry.emoji}</div>
          <div style="color: #fff; font-size: 0.85rem; font-weight: 700; margin-top: 0.3rem;">${entry.name}</div>
        `;
        card.addEventListener('click', () => this.showDetail(entry.id));
        card.addEventListener('pointerenter', () => { card.style.transform = 'scale(1.05)'; });
        card.addEventListener('pointerleave', () => { card.style.transform = 'scale(1)'; });
      } else {
        card.style.cssText = `
          background: #444;
          border-radius: 16px;
          padding: 0.8rem 0.5rem;
          text-align: center;
          opacity: 0.6;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        card.innerHTML = `
          <div style="font-size: 2.2rem;">❓</div>
          <div style="color: #999; font-size: 0.85rem; font-weight: 700; margin-top: 0.3rem;">？？？</div>
        `;
      }

      grid.appendChild(card);
    }

    this.overlay.appendChild(grid);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'もどる';
    closeBtn.style.cssText = `
      background: linear-gradient(135deg, #FF6B6B, #FFE66D);
      border: none;
      border-radius: 2rem;
      padding: 0.8rem 2rem;
      color: #333;
      font-family: 'Zen Maru Gothic', sans-serif;
      font-size: 1.2rem;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      touch-action: manipulation;
    `;
    closeBtn.addEventListener('click', () => {
      this.hide();
      this._onClose?.();
    });
    this.overlay.appendChild(closeBtn);
  }

  private showDetail(id: VehicleId): void {
    const allEntries = getAllEntries();
    const entry = allEntries.find((e: EncyclopediaEntry) => e.id === id);
    if (!entry) return;

    // Detail modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 60;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const card = document.createElement('div');
    const colorHex = '#' + entry.themeColor.toString(16).padStart(6, '0');
    card.style.cssText = `
      background: linear-gradient(135deg, #2a1a4e, #1a0a2e);
      border: 2px solid ${colorHex};
      border-radius: 20px;
      padding: 1.5rem;
      max-width: 340px;
      width: 90%;
      text-align: center;
      font-family: 'Zen Maru Gothic', sans-serif;
    `;

    // 3D preview canvas（タップで音＋アニメーション）
    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 200;
    canvas.style.cssText = 'border-radius: 12px; background: #110822; margin-bottom: 0.4rem; cursor: pointer;';
    card.appendChild(canvas);

    // タップヒント
    const hint = document.createElement('p');
    hint.textContent = '👆 タップしてね！';
    hint.style.cssText = 'color: #aaa; font-size: 0.8rem; margin-top: 0; margin-bottom: 0.5rem;';
    card.appendChild(hint);

    // キャンバスタップで音＋アニメーション
    canvas.addEventListener('click', () => {
      this.sfx.play(entry.soundType);
      this.previewAnimating = true;
      setTimeout(() => { this.previewAnimating = false; }, 2000);
    });

    // Name
    const name = document.createElement('h2');
    name.textContent = `${entry.emoji} ${entry.name}`;
    name.style.cssText = `
      color: #FFD700;
      font-size: 1.6rem;
      font-weight: 900;
      margin-bottom: 0.5rem;
    `;
    card.appendChild(name);

    // Trivia
    const trivia = document.createElement('p');
    trivia.textContent = entry.trivia;
    trivia.style.cssText = `
      color: #fff;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    `;
    card.appendChild(trivia);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'とじる';
    closeBtn.style.cssText = `
      display: block;
      margin: 0 auto;
      background: rgba(255,255,255,0.15);
      border: none;
      border-radius: 2rem;
      padding: 0.5rem 1.5rem;
      color: #fff;
      font-family: 'Zen Maru Gothic', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      touch-action: manipulation;
    `;
    closeBtn.addEventListener('click', () => {
      this.stopPreview();
      modal.remove();
    });
    card.appendChild(closeBtn);

    modal.appendChild(card);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.stopPreview();
        modal.remove();
      }
    });
    document.body.appendChild(modal);

    // Start 3D preview
    this.startPreview(canvas, id);
  }

  private startPreview(canvas: HTMLCanvasElement, id: VehicleId): void {
    this.stopPreview();

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor(0x110822);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, canvas.width / canvas.height, 0.1, 100);
    camera.position.set(0, 1.0, 2.5);
    camera.lookAt(0, 0.3, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(3, 5, 3);
    scene.add(dirLight);

    const model = createVehicleModel(id);
    model.scale.setScalar(1.5);
    scene.add(model);

    this.previewRenderer = renderer;
    this.previewScene = scene;
    this.previewCamera = camera;
    this.previewModel = model;

    const animate = () => {
      this.previewAnimId = requestAnimationFrame(animate);
      model.rotation.y += 0.02;

      // タップ時の乗り物アニメーション
      if (this.previewAnimating) {
        const t = performance.now();
        switch (id) {
          case 'helicopter': {
            const b1 = model.children[5];
            const b2 = model.children[6];
            if (b1) b1.rotation.y += 0.3;
            if (b2) b2.rotation.y += 0.3;
            break;
          }
          case 'rocket':
            model.position.y = Math.sin(t * 0.004) * 0.2;
            break;
          case 'shinkansen':
          case 'bus':
          case 'policeCar':
            model.position.x = Math.sin(t * 0.003) * 0.4;
            break;
          case 'airplane':
            model.rotation.z = Math.sin(t * 0.003) * 0.2;
            model.position.y = Math.sin(t * 0.002) * 0.15;
            break;
          case 'ship':
            model.rotation.z = Math.sin(t * 0.002) * 0.1;
            model.position.y = Math.sin(t * 0.003) * 0.06;
            break;
          case 'excavator':
            model.position.y = Math.abs(Math.sin(t * 0.004)) * 0.1;
            break;
        }
      } else {
        // アニメーション停止時はゆっくり元に戻る
        model.position.x *= 0.9;
        model.position.y *= 0.9;
        model.rotation.z *= 0.9;
      }

      renderer.render(scene, camera);
    };
    animate();
  }

  private stopPreview(): void {
    if (this.previewAnimId) {
      cancelAnimationFrame(this.previewAnimId);
      this.previewAnimId = 0;
    }
    this.previewRenderer?.dispose();
    this.previewRenderer = null;
    this.previewModel = null;
  }

  mount(parent: HTMLElement): void {
    parent.appendChild(this.overlay);
  }

  unmount(): void {
    this.stopPreview();
    this.overlay.remove();
  }
}
