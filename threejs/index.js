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


//accessing cursor
const cursor =  {
    x:0,
    y:0
}

window.addEventListener('mousemove', (event)=>{
    cursor.x = event.clientX / window.innerWidth - 0.5;
    cursor.y = -(event.clientY / window.innerHeight - 0.5);
    // console.log(cursor);
});
//multiple objects
const group = new THREE.Group();
const textureLoader = new THREE.TextureLoader();

// Saturn (using Jupiter texture as fallback)
const marsMaterial = new THREE.MeshStandardMaterial({ 
   color: 0xcd5c5c  // Fallback color
});

const marsTexture = textureLoader.load(
   'https://planetary.s3.amazonaws.com/web/assets/pictures/20161110_march2016_wholemap_equi.jpg',
   // onLoad
   function(texture) {
      console.log('Mars texture loaded successfully');
      marsMaterial.map = texture;
      marsMaterial.needsUpdate = true;
   },
   // onProgress
   undefined,
   // onError
   function(err) {
      console.error('Failed to load Mars texture:', err);
   }
);

const box1 = new THREE.Mesh( 
    new THREE.SphereGeometry(0.5, 64, 64),
    marsMaterial
)

// Earth
const box2 = new THREE.Mesh( 
   new THREE.SphereGeometry(2, 64, 64),
   new THREE.MeshStandardMaterial({ 
      map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
   }),
)
scene.add(box2);
// Moon
const box3 = new THREE.Mesh( 
    new THREE.SphereGeometry(1, 64, 64),
   new THREE.MeshStandardMaterial({ 
      map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg'),
   }),
)
group.add(box1);
// group.add(box2);
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

const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 1000);
                                               //    near  far
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


// let time = Date.now();
const clock = new THREE.Clock();
function animate() {
    const elapsedTime = clock.getElapsedTime();
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;

    requestAnimationFrame(animate);
    box2.rotation.y =  elapsedTime;
    box3.rotation.y = 0.1 * elapsedTime;
    box1.rotation.y = 1.5 * elapsedTime;
    // group.rotation.y = 0.4 * elapsedTime;
    camera.position.x =Math.sin( cursor.x * 5)*10;
    camera.position.z = Math.cos(cursor.y * 3)*3;
    camera.position.y = cursor.y * 5;
    camera.lookAt(box2.position);
    
    // camera.position.x = Math.sin( elapsedTime )*1.5 ;
    // camera.position.y = Math.cos( elapsedTime ) ;
    // camera.position.z = 8 + Math.sin( elapsedTime );
    // camera.lookAt(box2.position);
    // box1.rotation.x += -0.01 * deltaTime * 0.1;
    // box3.rotation.x += 0.01* deltaTime * 0.1;
    // group.rotation.y += 0.01 * deltaTime * 0.1;
    renderer.render(scene, camera); //capture every frame
}
animate();
