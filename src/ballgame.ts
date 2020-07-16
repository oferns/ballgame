import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight } from 'three';

import Splash from './splash';

export default class BallGame {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    private window: Window;
    private sun: DirectionalLight;

    constructor(window: Window) {
        this.window = window;
        this.window.addEventListener('load', () => this.init());
        this.window.addEventListener('resize', this.onresize);

        this.scene = new Scene();
        this.renderer = new WebGLRenderer();
        this.camera = new PerspectiveCamera(75, this.window.innerWidth / this.window.innerHeight, 0.1, 1000);
        this.sun = new DirectionalLight(0xffffff, 1.0);
    }

    public onresize = (ev: UIEvent): void => {
        this.camera.aspect = ev.view.innerWidth / ev.view.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(ev.view.innerWidth, ev.view.innerHeight);
    };

    private init = (): void => {
        this.sun.position.set(2, 2, 2);
        this.scene.add(this.sun);
        this.window.document.body.prepend(this.renderer.domElement);
        this.renderer.setSize(this.window.innerWidth, this.window.innerHeight);
        const splash = new Splash();
        splash.render();
    };

    public animate = (): void => {
        requestAnimationFrame(this.animate);
        this.render();
    };

    public render = (): void => {
        this.renderer.render(this.scene, this.camera);
    };
}

// const scene = new Scene();
// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new WebGLRenderer();

// window.addEventListener('resize', (ev: UIEvent): void => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// window.addEventListener('load', (ev: Event): void => {

//   renderer.setSize(window.innerWidth, window.innerHeight);

//   // add canvas to dom
//   document.body.appendChild(renderer.domElement);

//   const light = new DirectionalLight(0xffffff, 1.0);
//   //const light2 = new DirectionalLight(0xffffff, 1.0);

//   light.position.set(2, 2, 2);
//   // light2.position.set(-100, 100, -100);

//   scene.add(light);
//   // scene.add(light2);

//   const boxmaterial = new MeshBasicMaterial({
//     color: 0xaabbcc,
//     wireframe: true,
//   });

//   // create a box and add it to the scene
//   const box = new Mesh(new BoxGeometry(1, 1, 1), boxmaterial);

//   var material = new MeshBasicMaterial({
//     color: 0xeeeeee, side: DoubleSide, wireframe: true,
//   });
//   const plane = new Mesh(new PlaneGeometry(5, 1), material);

//   scene.add(plane);

//   scene.add(box);

//   box.position.x = 0;
//   box.rotation.y = 0;

//   camera.position.x = 2.5;
//   camera.position.y = 0;
//   camera.position.z = 5;

//   camera.lookAt(scene.position);

//   function animate(): void {
//     requestAnimationFrame(animate);
//     render();
//   }

//   function render(): void {
//     const timer = 0.002 * Date.now();
//     box.position.y = 0.5 + 0.5 * Math.sin(timer);
//     box.rotation.x += 0.1;
//     box.rotation.y += 0.1;

//     renderer.render(scene, camera);
//   }

//   animate();

// });
