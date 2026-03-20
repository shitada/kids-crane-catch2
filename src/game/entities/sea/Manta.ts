import * as THREE from 'three';

export function createManta(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: 0x334466 });
  const belly = new THREE.MeshPhongMaterial({ color: 0xcccccc });

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.3), mat);
  body.position.y = 0.3;
  g.add(body);

  const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.4), mat);
  wingL.position.set(0, 0.3, 0.35);
  wingL.rotation.x = -0.15;
  g.add(wingL);

  const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.4), mat);
  wingR.position.set(0, 0.3, -0.35);
  wingR.rotation.x = 0.15;
  g.add(wingR);

  const bellyM = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 0.25), belly);
  bellyM.position.set(0, 0.26, 0);
  g.add(bellyM);

  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.01, 0.5, 4), mat);
  tail.rotation.z = Math.PI / 2;
  tail.position.set(-0.45, 0.3, 0);
  g.add(tail);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.18, 0.34, 0.12);
  g.add(eye);

  g.scale.setScalar(0.55);
  return g;
}
