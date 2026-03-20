import * as THREE from 'three';

function createFlagBase(colors: { bg: number; elements: { geo: THREE.BufferGeometry; color: number; pos: [number, number, number]; rot?: [number, number, number] }[] }): THREE.Group {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshPhongMaterial({ color: 0x888888 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 6), poleMat);
  pole.position.set(-0.4, 0.5, 0);
  g.add(pole);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), new THREE.MeshPhongMaterial({ color: 0xdddddd }));
  ball.position.set(-0.4, 1.02, 0);
  g.add(ball);
  const flag = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.02), new THREE.MeshPhongMaterial({ color: colors.bg }));
  flag.position.set(0, 0.77, 0);
  g.add(flag);
  for (const el of colors.elements) {
    const mesh = new THREE.Mesh(el.geo, new THREE.MeshPhongMaterial({ color: el.color }));
    mesh.position.set(el.pos[0], el.pos[1] + 0.77, el.pos[2]);
    if (el.rot) mesh.rotation.set(el.rot[0], el.rot[1], el.rot[2]);
    g.add(mesh);
  }
  g.scale.setScalar(0.5);
  return g;
}

export function createFlagJapan(): THREE.Group {
  return createFlagBase({ bg: 0xffffff, elements: [
    { geo: new THREE.CircleGeometry(0.12, 16), color: 0xcc0000, pos: [0, 0, 0.011] },
  ]});
}
export function createFlagUSA(): THREE.Group {
  return createFlagBase({ bg: 0xffffff, elements: [
    { geo: new THREE.BoxGeometry(0.7, 0.07, 0.021), color: 0xcc0033, pos: [0, 0.18, 0] },
    { geo: new THREE.BoxGeometry(0.7, 0.07, 0.021), color: 0xcc0033, pos: [0, 0.04, 0] },
    { geo: new THREE.BoxGeometry(0.7, 0.07, 0.021), color: 0xcc0033, pos: [0, -0.1, 0] },
    { geo: new THREE.BoxGeometry(0.25, 0.22, 0.022), color: 0x003399, pos: [-0.22, 0.11, 0] },
  ]});
}
export function createFlagBrazil(): THREE.Group {
  return createFlagBase({ bg: 0x009933, elements: [
    { geo: new THREE.BoxGeometry(0.4, 0.25, 0.021), color: 0xffcc00, pos: [0, 0, 0], rot: [0, 0, Math.PI / 4] },
    { geo: new THREE.CircleGeometry(0.08, 16), color: 0x003399, pos: [0, 0, 0.022] },
  ]});
}
export function createFlagFrance(): THREE.Group {
  return createFlagBase({ bg: 0xffffff, elements: [
    { geo: new THREE.BoxGeometry(0.233, 0.45, 0.021), color: 0x003399, pos: [-0.233, 0, 0] },
    { geo: new THREE.BoxGeometry(0.233, 0.45, 0.021), color: 0xcc0000, pos: [0.233, 0, 0] },
  ]});
}
export function createFlagChina(): THREE.Group {
  return createFlagBase({ bg: 0xcc0000, elements: [
    { geo: new THREE.CircleGeometry(0.08, 5), color: 0xffcc00, pos: [-0.18, 0.1, 0.011] },
  ]});
}
export function createFlagAustralia(): THREE.Group {
  return createFlagBase({ bg: 0x003399, elements: [
    { geo: new THREE.BoxGeometry(0.25, 0.15, 0.021), color: 0xcc0033, pos: [-0.22, 0.15, 0] },
    { geo: new THREE.BoxGeometry(0.35, 0.04, 0.021), color: 0xffffff, pos: [-0.22, 0.15, 0] },
    { geo: new THREE.BoxGeometry(0.04, 0.15, 0.021), color: 0xffffff, pos: [-0.22, 0.15, 0] },
    { geo: new THREE.CircleGeometry(0.03, 5), color: 0xffffff, pos: [0.15, -0.05, 0.011] },
  ]});
}
export function createFlagIndia(): THREE.Group {
  return createFlagBase({ bg: 0xffffff, elements: [
    { geo: new THREE.BoxGeometry(0.7, 0.15, 0.021), color: 0xff9933, pos: [0, 0.15, 0] },
    { geo: new THREE.BoxGeometry(0.7, 0.15, 0.021), color: 0x009933, pos: [0, -0.15, 0] },
    { geo: new THREE.CircleGeometry(0.06, 16), color: 0x000088, pos: [0, 0, 0.011] },
  ]});
}
export function createFlagKorea(): THREE.Group {
  return createFlagBase({ bg: 0xffffff, elements: [
    { geo: new THREE.CircleGeometry(0.1, 16), color: 0xcc0033, pos: [0, 0.03, 0.011] },
    { geo: new THREE.CircleGeometry(0.05, 16), color: 0x003399, pos: [0, 0.03, 0.012] },
  ]});
}
