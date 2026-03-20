import { BGMGenerator } from './BGMGenerator';
import type { BGMMode } from './BGMGenerator';

export class AudioManager {
  private ctx: AudioContext | null = null;
  private initialized = false;
  private bgmGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private sharedBgm: BGMGenerator | null = null;

  init(): void {
    if (this.initialized) return;
    this.ctx = new AudioContext();
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.value = 0.3;
    this.bgmGain.connect(this.ctx.destination);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.5;
    this.sfxGain.connect(this.ctx.destination);
    this.sharedBgm = new BGMGenerator(this);
    this.initialized = true;
  }

  ensureResumed(): void {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /** 共有BGMを再生（単一インスタンスで重複防止） */
  startBGM(mode: BGMMode): void {
    this.sharedBgm?.start(mode);
  }

  /** 共有BGMを停止 */
  stopBGM(): void {
    this.sharedBgm?.stop();
  }

  getContext(): AudioContext | null {
    return this.ctx;
  }

  getSFXGain(): GainNode | null {
    return this.sfxGain;
  }

  getBGMGain(): GainNode | null {
    return this.bgmGain;
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}
