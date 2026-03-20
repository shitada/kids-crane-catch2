import * as THREE from 'three';

export function createSeaTurtle(): THREE.Group {
  const g = new THREE.Group();
  const shell = new THREE.MeshPhongMaterial({ color: 0x558844 });
  const skin = new THREE.MeshPhongMaterial({ color: 0x77aa66 });

  const shellM = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), shell);
  shellM.position.y = 0.25;
  g.add(shellM);

  const belly = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 10), skin);
  belly.position.y = 0.22;
  g.add(belly);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), skin);
  head.position.set(0.35, 0.28, 0);
  g.add(head);

  for (const [x, z] of [[0.25, 0.25], [0.25, -0.25], [-0.2, 0.25], [-0.2, -0.25]] as [number, number][]) {
    const flipper = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.1), skin);
    flipper.position.set(x, 0.2, z);
    flipper.rotation.y = z > 0 ? 0.3 : -0.3;
    g.add(flipper);
  }

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.42, 0.32, 0.08);
  g.add(eye);

  g.scale.setScalar(0.6);
  return g;
}
