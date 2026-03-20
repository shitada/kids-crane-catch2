import * as THREE from 'three';

export function createWhale(): THREE.Group {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshPhongMaterial({ color: 0x3366aa });
  const bellyMat = new THREE.MeshPhongMaterial({ color: 0x99bbdd });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), bodyMat);
  body.scale.set(1.8, 0.9, 1.0);
  body.position.y = 0.35;
  g.add(body);

  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 6), bellyMat);
  belly.scale.set(1.5, 0.6, 0.9);
  belly.position.set(0, 0.2, 0);
  g.add(belly);

  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.5), bodyMat);
  tail.position.set(-0.9, 0.35, 0);
  tail.rotation.z = 0.2;
  g.add(tail);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.6, 0.45, 0.3);
  g.add(eye);

  g.scale.setScalar(0.45);
  return g;
}
