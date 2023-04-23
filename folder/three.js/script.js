const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
const sizes = {
  width: 800,
  height: 600,
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;
camera.position.y = 1;

scene.add(camera);

// renderer
const canvas1 = document.querySelector(".cg");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas1,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
