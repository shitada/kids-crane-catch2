import * as THREE from 'three';

export function createClownfish(): THREE.Group {
  const g = new THREE.Group();
  const orange = new THREE.MeshPhongMaterial({ color: 0xff6622 });
  const white = new THREE.MeshPhongMaterial({ color: 0xffffff });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), orange);
  body.scale.set(1.4, 1.0, 0.7);
  body.position.y = 0.3;
  g.add(body);

  for (const x of [-0.1, 0.15]) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.55, 0.45), white);
    stripe.position.set(x, 0.3, 0);
    g.add(stripe);
  }

  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.2, 4), orange);
  tail.rotation.z = Math.PI / 2;
  tail.position.set(-0.45, 0.3, 0);
  g.add(tail);

  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), new THREE.MeshPhongMaterial({ color: 0x111111 }));
  eye.position.set(0.25, 0.38, 0.18);
  g.add(eye);

  g.scale.setScalar(0.55);
  return g;
}
