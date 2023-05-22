// import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// //imported three.js



// //get canvas where  3d object ploated 


// let display = document.getElementById('canvas');

// /**
//  * width and height
//  */

// let width = window.innerWidth;
// let height = window.innerHeight
// let acceptRatio = width/height
// //create Scene 

// const  Scene= new THREE.Scene()
// Scene.background = new THREE.Color( 0x000000 );
// Scene.fog = new THREE.Fog( 0x000000, 250, 1400 );
// //create a shape                                                                                          


// // //create gemo 
// // const texture = new THREE.TextureLoader()
// // let rectTexture= texture.load('door.jpg' ); 
// // let sphereTexture= texture.load('map.jpg')


// // const shapeGeo= new THREE.BoxGeometry(40,1,1,2,2,2);

// // const shapeMaterial = new THREE.MeshBasicMaterial({map:rectTexture})
// // const mesh = new THREE.Mesh(shapeGeo,shapeMaterial)
// // mesh.position.y=5
// // mesh.position.x=-10
// // const spahreMaterial = new THREE.MeshBasicMaterial({map:sphereTexture})
// // const sphereGeo =  new THREE.SphereGeometry( 15, 32, 16 )
// // const spheremesh= new THREE.Mesh(sphereGeo,spahreMaterial) 
// // Scene.add(spheremesh)
// // Scene.add(mesh)
// //add camera 


// // camera.lookAt(spheremesh)

// // const group = new THREE.Group();
// // group.add(spheremesh)
// // group.add(mesh)
// // Scene.add(group)
// // Scene.position.set(4,2,3)
// /**
//  * group two item in three.js
//  */

// // const helper = new THREE.CameraHelper( camera );
// // Scene.add( helper );
// //orbit control
// const geometries= [new THREE.TorusGeometry( 0.5, 0.2, 10, 15),new THREE.BoxGeometry( 1, 1, 1 )];

// const metcapLoader = new THREE.TextureLoader()
// let image =[ metcapLoader.load('door.jpg'), metcapLoader.load('matcap1.png'),metcapLoader.load('matcap2.png'), metcapLoader.load('matcap3.png'), metcapLoader.load('matcap4.png'), metcapLoader.load('matcap5.png'), metcapLoader.load('matcap6.png'),metcapLoader.load('matcap7.png'),metcapLoader.load('matcap8.jpg')]
// const fontLoader = new FontLoader();
// const font = fontLoader.load('font/helvetiker/helvetiker_bold.typeface.json', ( font ) =>  {
// 		// do something with the font
//         //create text geometry
        
    
// 		const textGeometry = new TextGeometry( 'SHANU SINGH', {
//             font: font,
//             size: 0.5,
//             height: 0.2,
//             curveSegments: 4,
//             bevelEnabled: true,
//             bevelThickness: 0.03,
//             bevelSize: 0.02,
//             bevelOffset: 0,
//             bevelSegments: 3
//         } );
//         //create text material 
//         //now compute bounding box
//     textGeometry.computeBoundingBox();

//     //get bounding box
//     console.log(textGeometry.boundingBox)
//     textGeometry.center()

//     /**
//      * translate text (to make it center of screen)
//      */
//     // textGeometry.translate(-(textGeometry.boundingBox.max.x-0.02)*0.5,-(textGeometry.boundingBox.max.y-0.02)*0.5,-(textGeometry.boundingBox.max.z-0.03)*0.5)

//     /**
//      * now re-compute bounding box to check max and min is same or not (max should be positive) (min should be negative) but the value same
//      */

//     textGeometry.computeBoundingBox()
//     console.log(textGeometry.boundingBox)
//         const textMaterial = new THREE.MeshMatcapMaterial();
//         textMaterial.matcap=image[Math.floor(Math.random()*image.length)]
//         // textMaterial.wireframe=true

//         let textMesh= new THREE.Mesh(textGeometry,textMaterial)
//         Scene.add(textMesh)

        

// 	}
// );

// for(let i=0;i<1000;i++){
//     const material = new THREE.MeshMatcapMaterial(); 
//     material.matcap=image[Math.floor(Math.random()*image.length)]
//     let shape= new THREE.Mesh(geometries[Math.floor(Math.random()*geometries.length)],material)
// shape.position.x=( Math.random()-0.5)*50;
// shape.position.y=( Math.random()-0.5)*50;
// shape.position.z=( Math.random()-0.5)*50

// shape.rotation.x=Math.random()*Math.PI;
// shape.rotation.y=Math.random()*Math.PI;

// //scale the size;
// let shapeScale =Math.random()
// shape.scale.x= shapeScale;
// shape.scale.y= shapeScale;
// shape.scale.z= shapeScale

//     Scene.add(shape)
// }
// // const axisHelper = new THREE.AxesHelper()
// // Scene.add(axisHelper)
// const camera = new THREE.PerspectiveCamera(45,acceptRatio,1,1000)
// camera.position.set( 0, 1, 20 );
// Scene.add(camera)

// // camera.position.z=-1
// // camera.position.x=1

// // console.log(fontLoader)
// const controls = new OrbitControls( camera, display );
// controls.update();
// controls.enableDamping=true;

// const rendrer= new THREE.WebGLRenderer({
//     canvas:display
// })

// //if device pixel ratio is higher then 2 then default value will be 2
// //   rendrer.setPixelRatio(Math.min(...[window.devicePixelRatio,2]))

// rendrer.setSize(width,height)

// // let position=0.1


// // //create own geo


// // // create a simple square shape. We duplicate the top left and bottom right
// // // vertices because each vertex needs to appear once per triangle.
// // const vertices = new Float32Array( [
// // 	0, 1,  0, // v0
// // 	 1, 0,  0, // v1
// // 	 1,  0,  1, // v2
// // ] );

// // // itemSize = 3 because there are 3 values (components) per vertex
// // geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
// // const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// // const meshTriangle = new THREE.Mesh( geometry, material );
// // Scene.add(meshTriangle)
// // const color=['#ff0000','#00ff00','#0000ff','#00fbff']
// // for(let i=0;i<200;i++){
// //     let randomIndex= Math.floor(Math.random()*color.length)
// //     const geometry = new THREE.BufferGeometry();
// //     const vertices = new Float32Array( [
// // 	(Math.random()-0.5)*4,(Math.random()-0.5)*4,(Math.random()-0.5)*4, // v0
// // 	 (Math.random()-0.5)*4, (Math.random()-0.5)*4,  (Math.random()-0.5)*4, // v1
// // 	 (Math.random()-0.5)*4,  (Math.random()-0.5)*4,  (Math.random()-0.5)*4, // v2
// // ] );
// // geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
// // const material = new THREE.MeshBasicMaterial( { color: color[randomIndex] ,wireframe:true} );
// // const meshTriangle = new THREE.Mesh( geometry, material );
// // Scene.add(meshTriangle)
// // }

// /**
//  * add text to 3d space 
//  */

// // const fontLoader 



// window.addEventListener('resize',() => {
//     width=window.innerWidth;
//     height=window.innerHeight;
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
//     rendrer.setSize(width,height)
//     controls.update();
//     rendrer.render(Scene,camera)
// })


// window.addEventListener('dblclick',() => {
//     // console.log(display.)
//     if(!document.fullscreenElement){
//         display.requestFullscreen()
//     } 
//     else {
//         document.exitFullscreen();
//       }
// })

// const tick = () => {
//     // position=position+0.2;
//     // group.rotation.x += 0.01;
// 	// group.rotation.y += 0.01;
//     // mesh.position.y= Math.sin(position)
//     // console.log('hello')
//     requestAnimationFrame(tick );
//     controls.update();
//     rendrer.render(Scene,camera)
//     // rendrer.setPixelRatio(Math.min(...[window.devicePixelRatio,2]))

// }


// tick()

import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'dat.gui'



//step-2 create   target  

const canvas = document.getElementById('canvas')

//step-1 create a scene 
// gui.add('Plane')
let materialColor={
    color:0xffffff
}

const SCENE = new THREE.Scene();

//step-3 create camera 

//set canvas size  
let canvasScreen={
width:window.innerWidth,
height:window.innerHeight
}
let aceeptRatio = canvasScreen.width/canvasScreen.height

const CAMERA = new THREE.PerspectiveCamera(45,aceeptRatio,1,1000)

/**
 * add axis helper
 */
//set camera position

CAMERA.position.z = 5;
CAMERA.position.y=1;


// create rendrer

const rendrer = new THREE.WebGLRenderer({
    canvas:canvas
})
const controls = new OrbitControls( CAMERA, canvas);
controls.update();
controls.enableDamping=true;
//add orbit controll



window.addEventListener('resize', () => {
   canvasScreen.width= window.innerWidth;
   canvasScreen.height= window.innerHeight;
   aceeptRatio= canvasScreen.width/canvasScreen.height;
   rendrer.setSize(canvasScreen.width,canvasScreen.height)
   //update accept ratio of  camera

    CAMERA.aspect = aceeptRatio;
    //if any properties  of camera get changed then updateProjectionMatrix() method has to call
    CAMERA.updateProjectionMatrix();



})

//create a simple plane 

const planeGeometries = new THREE.PlaneGeometry( 1, 1);


const planeMaterial  = new  THREE.MeshStandardMaterial({color:materialColor.color, side: THREE.DoubleSide});

const planeMesh = new THREE.Mesh(planeGeometries,planeMaterial);
planeMesh.receiveShadow=true;

// gui.add(planeMesh.scale,'x').min(5).max(1).step(0.02)

planeMesh.rotation.x=-Math.PI*0.5


SCENE.add(planeMesh)

const axisHelper =new THREE.AxesHelper();
axisHelper.visible=false;
SCENE.add(axisHelper)


rendrer.setSize(canvasScreen.width,canvasScreen.height);
rendrer.render(SCENE,CAMERA);
rendrer.shadowMap.enabled=true;
rendrer.shadowMap.type=THREE.PCFShadowMap


/**
 * add uniform light across the mesh
 */
const ambientLight = new THREE.AmbientLight()
ambientLight.color.set('rgb(211, 208, 208)');
ambientLight.intensity=0.25
SCENE.add(ambientLight)
//add a sphere geometries 

/**
 * add direction light
 */
const directionLightProperties= {
    intensity:0.25
}

const directionLight = new THREE.DirectionalLight();
directionLight.color.set('white');
directionLight.intensity=0.25;
directionLight.position.set(2,2,-1)
directionLight.castShadow=true;
directionLight.shadow.mapSize.width=1024;
directionLight.shadow.mapSize.height=1024;
directionLight.shadow.camera.near=1;
directionLight.shadow.camera.far=6;
directionLight.shadow.radius=2;
//control the camera size


directionLight.shadow.camera.top=2;
directionLight.shadow.camera.bottom=-2;
directionLight.shadow.camera.left=-2;
directionLight.shadow.camera.right=2;
SCENE.add(directionLight)
const directionLightCamerahelper = new THREE.CameraHelper(directionLight.shadow.camera);

//hide the camera helper from the scene


directionLightCamerahelper.visible=false;


SCENE.add(directionLightCamerahelper);

/**
 * spot light
 */
const spotLight = new THREE.SpotLight('red',0.35,10,Math.PI*0.3);
spotLight.castShadow=true;
spotLight.position.set(1,4,2);
spotLight.shadow.mapSize.width=1024;
spotLight.shadow.mapSize.height=1024;
spotLight.shadow.camera.near=1;
spotLight.shadow.camera.far=5;
spotLight.shadow.camera.fov=30;


const spotLightCameraHeper=new THREE.CameraHelper(spotLight.shadow.camera);
spotLightCameraHeper.visible=false;
SCENE.add(spotLightCameraHeper)
SCENE.add(spotLight)


/**
 * point light
 */

const pointLight = new THREE.PointLight('green',0.3);
pointLight.position.set(0,1,0);
pointLight.shadow.mapSize.width=1024;
pointLight.shadow.mapSize.height=1024;
pointLight.shadow.camera.near=0.1;
pointLight.shadow.camera.far=5;
pointLight.castShadow=true;

const pointLightHelper= new THREE.CameraHelper(pointLight.shadow.camera)
pointLightHelper.visible=false
SCENE.add(pointLightHelper)
SCENE.add(pointLight)
let sphereSize={
    size:0.5
}


const spherGeometries= new THREE.SphereGeometry(sphereSize.size, 32, 16 );
const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } )


const sphereMesh = new THREE.Mesh()

sphereMesh.geometry=spherGeometries;
sphereMesh.material=sphereMaterial;
sphereMesh.position.set(0,0,0)
planeMesh.position.y= - sphereSize.size;
sphereMesh.castShadow=true;
SCENE.add(sphereMesh)
/**
 * instanciatiate dat.gui
 */
let student ={
    age:5
}
let gui = new GUI();
let planeFolder = gui.addFolder('plane-surface')

planeFolder.add(planeMesh.scale,'x').min(1).max(5).step(0.2).setValue(4)
planeFolder.add(planeMesh.scale,'y').min(1).max(5).step(0.2).setValue(4)
planeFolder.addColor(materialColor,'color').onChange(() =>  {
    planeMaterial.color.set(materialColor.color);
  });
// console.log(gui)

//sphere geometries

let sphereFolder = gui.addFolder('sphere')
sphereFolder.addColor(materialColor,'color').onChange(() =>  {
    sphereMaterial.color.set(materialColor.color);
  });

//  sphereMesh.position.z=sphereSize.size
// })
let directionLightFolder = gui.addFolder('directionLight')
directionLightFolder.add(directionLight,'intensity').min(0).max(1).step(0.1).setValue(0.25);
directionLightFolder.addColor(materialColor,'color').onChange(() => {
    directionLight.color.set(materialColor.color)
})
let spotLightFolder = gui.addFolder('spotLight')
spotLightFolder.add(spotLight,'intensity').min(0).max(1).step(0.1).setValue(0.25);
spotLightFolder.addColor(materialColor,'color').onChange(() => {
    spotLight.color.set(materialColor.color)
})
let pointLightFolder = gui.addFolder('pointLight')
pointLightFolder .add(pointLight,'intensity').min(0).max(1).step(0.1).setValue(0.25);
pointLightFolder .addColor(materialColor,'color').onChange(() => {
    pointLight.color.set(materialColor.color)
})


//spotLight

const clock = new THREE.Clock()
const tick = () => {
   const elapsedTime= clock.getElapsedTime()
    requestAnimationFrame(tick );
    controls.update();
    sphereMesh.position.x= Math.cos(elapsedTime)*1.5;
    sphereMesh.position.z= Math.sin(elapsedTime)*1.5
    sphereMesh.position.y= Math.abs(Math.sin(elapsedTime*2))
    rendrer.render(SCENE,CAMERA)
  

}


tick()
