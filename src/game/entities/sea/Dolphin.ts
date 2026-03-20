import * as THREE from 'three';

export function createDolphin(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: 0x6699cc });
  const belly = new THREE.MeshPhongMaterial({ color: 0xccddee });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 1.2, 8), mat);
  body.rotation.z = Math.PI / 2;
  body.position.y = 0.35;
  g.add(body);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5, 6), mat);
  nose.rotation.z = -Math.PI / 2;
  nose.position.set(0.85, 0.35, 0);
  g.add(nose);

  const bellyM = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.9, 8), belly);
  bellyM.rotation.z = Math.PI / 2;
  bellyM.position.set(0, 0.28, 0);
  g.add(bellyM);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.15), mat);
  fin.position.set(0, 0.55, 0);
  fin.rotation.z = -0.3;
  g.add(fin);

  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.35), mat);
  tail.position.set(-0.7, 0.35, 0);
  g.add(tail);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.5, 0.42, 0.18);
  g.add(eye);

  g.scale.setScalar(0.5);
  return g;
}
