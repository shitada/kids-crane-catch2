import * as THREE from 'three';

export function createJellyfish(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: 0xaabbff, transparent: true, opacity: 0.7 });

  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat);
  bell.position.y = 0.5;
  g.add(bell);

  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const tentacle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.01, 0.5, 4),
      new THREE.MeshPhongMaterial({ color: 0xccddff, transparent: true, opacity: 0.6 }),
    );
    tentacle.position.set(Math.cos(angle) * 0.15, 0.15, Math.sin(angle) * 0.15);
    g.add(tentacle);
  }

  g.scale.setScalar(0.6);
  return g;
}
