import * as THREE from 'three';

export function createSeahorse(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: 0xffaa33 });

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mat);
  head.position.set(0.1, 0.75, 0);
  g.add(head);

  const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.15, 6), mat);
  snout.rotation.z = -Math.PI / 2;
  snout.position.set(0.22, 0.75, 0);
  g.add(snout);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.06, 0.5, 8), mat);
  body.position.y = 0.45;
  g.add(body);

  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.02, 0.3, 6), mat);
  tail.position.set(-0.05, 0.12, 0);
  tail.rotation.z = 0.5;
  g.add(tail);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.08), mat);
  fin.position.set(-0.1, 0.5, 0);
  g.add(fin);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.15, 0.78, 0.08);
  g.add(eye);

  g.scale.setScalar(0.55);
  return g;
}
