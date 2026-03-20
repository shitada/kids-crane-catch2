import * as THREE from 'three';

export function createOctopus(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: 0xcc4488 });

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat);
  head.scale.set(1.0, 1.2, 1.0);
  head.position.y = 0.6;
  g.add(head);

  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 0.4, 6), mat);
    leg.position.set(Math.cos(angle) * 0.2, 0.15, Math.sin(angle) * 0.2);
    leg.rotation.x = Math.sin(angle) * 0.3;
    leg.rotation.z = Math.cos(angle) * 0.3;
    g.add(leg);
  }

  const eyeW = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const eyeB = new THREE.MeshPhongMaterial({ color: 0x111111 });
  for (const z of [-0.15, 0.15]) {
    const w = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), eyeW);
    w.position.set(0.2, 0.7, z);
    g.add(w);
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), eyeB);
    b.position.set(0.25, 0.7, z);
    g.add(b);
  }

  g.scale.setScalar(0.55);
  return g;
}
