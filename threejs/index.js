const scene = new THREE.Scene();
// const geometry = new THREE.DodecahedronGeometry( 1, 2);
// const material = new THREE.MeshBasicMaterial({ color:"red", wireframe: true });
// const box = new THREE.Mesh(geometry, material);

//object
// const geometry = new THREE.BoxGeometry( 1, 1, 1,6,5,7 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// const box = new THREE.Mesh( geometry, material );

// box.position.x = 1;
// box.position.y = 3;
// box.position.z = 3;
// box.scale.set(2,2,1); //decide height and width
// scene.add(box);

// // box.position.normalize();
// // box.position.set(0.7, 0.7, 0.7);
// console.log(box.position.length());

//multiple objects
const group = new THREE.Group();
const textureLoader = new THREE.TextureLoader();

// Mars
const box1 = new THREE.Mesh( 
    new THREE.SphereGeometry(0.5, 64, 64),
   new THREE.MeshStandardMaterial({ 
      color: 0xcd5c5c,
      roughness: 0.9
   }),
)

// Earth
const box2 = new THREE.Mesh( 
   new THREE.SphereGeometry(2, 64, 64),
   new THREE.MeshStandardMaterial({ 
      map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
   }),
)

// Moon
const box3 = new THREE.Mesh( 
    new THREE.SphereGeometry(1, 64, 64),
   new THREE.MeshStandardMaterial({ 
      map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg'),
   }),
)
group.add(box1);
group.add(box2);
group.add(box3);
box1.position.x = -5;
box3.position.x = 5;
scene.add(group);

// Add lighting for the Earth
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

const height = window.innerHeight;
const width = window.innerWidth;
const ratio = width / height;

const camera = new THREE.PerspectiveCamera(75, ratio);

camera.position.z = 9;
camera.position.x = 0;
camera.position.y = 1;
camera.lookAt(box2.position);
scene.add(camera);

// console.log(box.position.distanceTo(camera.position));

// const axisHelper = new THREE.AxesHelper();
// scene.add(axisHelper);

// Create canvas element for Three.js
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

//director
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(width, height);
renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    box1.rotation.x += -0.01;
    box3.rotation.x += 0.01;
    group.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
