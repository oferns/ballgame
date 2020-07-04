import {
  Scene,
  PerspectiveCamera,
  AxesHelper,
  WebGLRenderer,
  DirectionalLight,
  MeshBasicMaterial,
  Mesh,
  BoxGeometry
} from 'three';




window.addEventListener('load', (): void => {

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  // add canvas to dom
  document.body.appendChild(renderer.domElement);



  const light = new DirectionalLight(0xffffff, 1.0);
  const light2 = new DirectionalLight(0xffffff, 1.0);

  light.position.set(100, 100, 100);
  light2.position.set(-100, 100, -100);

  scene.add(light);
  scene.add(light2);

  const material = new MeshBasicMaterial({
    color: 0xaaaaaa,
    wireframe: true,
  });

  // create a box and add it to the scene
  const box = new Mesh(new BoxGeometry(1, 1, 1), material);

  scene.add(box);

  box.position.x = 0.5;
  box.rotation.y = 0.5;

  camera.position.x = 5;
  camera.position.y = 5;
  camera.position.z = 5;

  camera.lookAt(scene.position);

  function animate(): void {
    requestAnimationFrame(animate);
    render();
  }

  function render(): void {
    const timer = 0.002 * Date.now();
    box.position.y = 0.5 + 0.5 * Math.sin(timer);
    //box.rotation.x += 0.1;
    renderer.render(scene, camera);
  }

  animate();

});

