import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as dat from 'dat.gui';

/**
 * create instance of dat.gui
 */
const gui = new dat.GUI();



/**
 * get canvas 
 */

const canvas = document.getElementById('canvas');

/**
 * create three.js scene 
 */
const scene = new THREE.Scene();

/**
 * define  canvas size
 */

const dimension ={
    width:window.innerWidth,
    height:window.innerHeight
}



/**
 * create A Box 
 */


const boxGeometry= new THREE.BoxGeometry(1,1,1);
const boxMaterial= new THREE.MeshBasicMaterial({
    color:'0xffffff'
})
const BOX = new THREE.Mesh(boxGeometry,boxMaterial)
/**
 * add box to scene
 */
scene.add(BOX)

/**
 * add camera to scene
 */
const camera = new THREE.PerspectiveCamera(45,dimension.width/dimension.height,1,1000);
camera.position.z=3
scene.add(camera)
/**
 * add orbit control
 */
const controls = new OrbitControls( camera, canvas);
controls.update();
//smooth scroll
controls.enableDamping=true;

/**
 * configure rendree
 */
const renderer= new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(dimension.width,dimension.height)
renderer.render(scene,camera);

/**
 * update the canvas on screen resize 
 */
window.addEventListener('resize',() => {
    dimension.width= window.innerWidth;
    dimension.height= window.innerHeight;
    renderer.setSize(dimension.width,dimension.height);
    camera.aspect= dimension.width/dimension.height;
    /**
     * update poition matrix
     */
    camera.updateProjectionMatrix()
})


/**
 * geometry property config
 */
const cubeFolder = gui.addFolder('Cube')
cubeFolder.add(BOX.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(BOX.rotation, 'y', 0, Math.PI * 2)
cubeFolder.add(BOX.rotation, 'z', 0, Math.PI * 2)

/**
 * update color to material
 */
/**
 * here we just extraxt the current color of box
 */
const data = {
    color: boxMaterial.color.getHex(),
}
cubeFolder.addColor(data, 'color').onChange(() => {
    boxMaterial.color.setHex(Number(data.color.toString().replace('#', '0x')))
})
cubeFolder.open()


/**
 * 
 * update the camera poition 
 */

const cameraFolder = gui.addFolder('camera')
      cameraFolder.add(camera.position,'x',1).min(1).max(6).setValue(camera.position.x)
      cameraFolder.add(camera.position,'y',1).min(1).max(6).setValue(camera.position.x)
      cameraFolder.add(camera.position,'z',1).min(1).max(6).setValue(camera.position.x)
const tick = ()=> {
    
    requestAnimationFrame(tick)
    /**
     * update frame on touch event
     */
    controls.update();
    renderer.render( scene, camera ); 
}
tick()