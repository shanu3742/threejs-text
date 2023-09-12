import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import * as dat from 'dat.gui';
import * as CANNON from 'cannon-es'

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
 * create a physics world
 */

const world= new CANNON.World()

world.gravity.set(0,-9.82,0)
//create all different type of material 
// const concereteMaterial = new CANNON.Material('concerete');
// const plasticMaterial = new CANNON.Material('plastic');
/**
 * now assume we have to apply default behaviour to our app in such case we will create default material 
 * 
 */
const defaultMaterial = new CANNON.Material('default');
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction:0.1,
        restitution:0.7
    }
)
world.addContactMaterial(defaultContactMaterial)
/**
 * this code for if you want to add any default  contactMaterial to your app
 */
world.defaultContactMaterial= defaultContactMaterial
/**
 * set gravity of physics world
 */
/**
 * create A Box 
 */

const sphereDimension={
    radius:0.2
}
const boxGeometry= new THREE.SphereGeometry(sphereDimension.radius,32,32);
const boxMaterial= new THREE.MeshBasicMaterial({
    color:'0xffffff'
})
const SPHERE = new THREE.Mesh(boxGeometry,boxMaterial)

/**
 * add box to scene
 */
scene.add(SPHERE)



/**
 * crerate a sphere in physic world
 */
const SphereShape= new CANNON.Sphere(sphereDimension.radius)
const spherBody = new CANNON.Body({
    mass:1,
    position:new CANNON.Vec3(0,10,0),
    shape:SphereShape,
    // material:plasticMaterial
    
})

/**
 * here x is force along  x direction
 * force along y and  z is zero
 * new CANNON.Vec3(0,0,0) , cordinate  point where the force applay on body x,y,z all are zero that means force 
 * will applay on center of body
 */
spherBody.applyLocalForce(new CANNON.Vec3(50,0,0),new CANNON.Vec3(0,0,0))
world.addBody(spherBody)


/**
 * add plane to scene
 */
const planeGeometry = new THREE.PlaneGeometry(2,2);
const planeMaterial = new THREE.MeshBasicMaterial({color:'green',})
planeMaterial.side =THREE.DoubleSide
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x= - Math.PI*0.5

scene.add(plane)

/**
 * add plane of physics world
 */

const planeShape= new CANNON.Plane();
const planeBody = new CANNON.Body();
planeBody.mass=0;

planeBody.addShape(planeShape);
// planeBody.material= concereteMaterial;
planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1,0,0),Math.PI*0.5)
world.addBody(planeBody)
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
// SPHERE.position.y=10
const sphereFolder = gui.addFolder('Sphere')
// sphereFolder.add(SPHERE.position, 'x',1).min(0.5).max(10).step(0.01).setValue(100)
// sphereFolder.add(SPHERE.position, 'y',1).min(0.5).max(10).step(0.01).setValue(100)
// sphereFolder.add(SPHERE.position, 'z',1).min(0.5).max(10).step(0.01).setValue(100)

const planeFolder = gui.addFolder('Plane')
/**
 * here we just extraxt the current color of box
 */
const planeColor = {
    color: planeMaterial.color.getHex(),
}
planeFolder.addColor(planeColor, 'color').onChange(() => {
    planeMaterial.color.setHex(Number(planeColor.color.toString().replace('#', '0x')))
})
planeFolder.add(plane.scale, 'x',1).min(0.5).max(10).step(0.01).setValue(2).name('width')
planeFolder.add(plane.scale, 'y',1).min(0.5).max(10).step(0.01).setValue(2).name('height')

/**
 * update color to material
 */
/**
 * here we just extraxt the current color of box
 */
const data = {
    color: boxMaterial.color.getHex(),
}
sphereFolder.addColor(data, 'color').onChange(() => {
    boxMaterial.color.setHex(Number(data.color.toString().replace('#', '0x')))
})
// sphereFolder.open()


/**
 * 
 * update the camera poition 
 */

const cameraFolder = gui.addFolder('camera')
      cameraFolder.add(camera.position,'x',1).min(1).max(6).setValue(0)
      cameraFolder.add(camera.position,'y',1).min(0).max(6).setValue(1)
      cameraFolder.add(camera.position,'z',1).min(1).max(10).setValue(8)

      /**
       * get the instance of clock
       */
      const clock = new THREE.Clock();
      let oldElapsedTime=0;

const tick = ()=> {
    /**
     * update frame on touch event
     */
    
    const elapsedTime= clock.getElapsedTime();
    const deltaTime= elapsedTime-oldElapsedTime;
    oldElapsedTime= elapsedTime;
    /**
     * applay wind on sphere 
     * wind force
     */
    spherBody.applyForce(new CANNON.Vec3(-0.1,0,0),spherBody.position)
     world.step(1/60,deltaTime,3)
     SPHERE.position.copy(spherBody.position)
    //  SPHERE.position.x=spherBody.position.x;
    //  SPHERE.position.y=spherBody.position.y;
    //  SPHERE.position.z=spherBody.position.z;

    //  console.log(spherBody.position.y)
    controls.update();
    renderer.render( scene, camera ); 

     
    requestAnimationFrame(tick)
}
tick()