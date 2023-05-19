import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

//imported three.js



//get canvas where  3d object ploated 


let display = document.getElementById('canvas');

/**
 * width and height
 */

let width = window.innerWidth;
let height = window.innerHeight
let acceptRatio = width/height
//create Scene 

const  Scene= new THREE.Scene()

//create a shape                                                                                          


// //create gemo 
// const texture = new THREE.TextureLoader()
// let rectTexture= texture.load('door.jpg' ); 
// let sphereTexture= texture.load('map.jpg')


// const shapeGeo= new THREE.BoxGeometry(40,1,1,2,2,2);

// const shapeMaterial = new THREE.MeshBasicMaterial({map:rectTexture})
// const mesh = new THREE.Mesh(shapeGeo,shapeMaterial)
// mesh.position.y=5
// mesh.position.x=-10
// const spahreMaterial = new THREE.MeshBasicMaterial({map:sphereTexture})
// const sphereGeo =  new THREE.SphereGeometry( 15, 32, 16 )
// const spheremesh= new THREE.Mesh(sphereGeo,spahreMaterial) 
// Scene.add(spheremesh)
// Scene.add(mesh)
//add camera 


// camera.lookAt(spheremesh)

// const group = new THREE.Group();
// group.add(spheremesh)
// group.add(mesh)
// Scene.add(group)
// Scene.position.set(4,2,3)
/**
 * group two item in three.js
 */

// const helper = new THREE.CameraHelper( camera );
// Scene.add( helper );
//orbit control
const geometries= [new THREE.TorusGeometry( 0.5, 0.2, 10, 15),new THREE.BoxGeometry( 1, 1, 1 )];

const metcapLoader = new THREE.TextureLoader()
let image =[ metcapLoader.load('door.jpg'), metcapLoader.load('matcap1.png'),metcapLoader.load('matcap2.png'), metcapLoader.load('matcap3.png'), metcapLoader.load('matcap4.png'), metcapLoader.load('matcap5.png'), metcapLoader.load('matcap6.png'),metcapLoader.load('matcap7.png'),metcapLoader.load('matcap8.jpg')]
const fontLoader = new FontLoader();
const font = fontLoader.load('font/helvetiker/helvetiker_bold.typeface.json', ( font ) =>  {
		// do something with the font
        //create text geometry
        
    
		const textGeometry = new TextGeometry( 'SHANU SINGH', {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 4,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 3
        } );
        //create text material 
        //now compute bounding box
    textGeometry.computeBoundingBox();

    //get bounding box
    console.log(textGeometry.boundingBox)
    textGeometry.center()

    /**
     * translate text (to make it center of screen)
     */
    // textGeometry.translate(-(textGeometry.boundingBox.max.x-0.02)*0.5,-(textGeometry.boundingBox.max.y-0.02)*0.5,-(textGeometry.boundingBox.max.z-0.03)*0.5)

    /**
     * now re-compute bounding box to check max and min is same or not (max should be positive) (min should be negative) but the value same
     */

    textGeometry.computeBoundingBox()
    console.log(textGeometry.boundingBox)
        const textMaterial = new THREE.MeshMatcapMaterial();
        textMaterial.matcap=image[Math.floor(Math.random()*image.length)]
        // textMaterial.wireframe=true

        let textMesh= new THREE.Mesh(textGeometry,textMaterial)
        Scene.add(textMesh)
        

	}
);

for(let i=0;i<1000;i++){
    const material = new THREE.MeshMatcapMaterial(); 
    material.matcap=image[Math.floor(Math.random()*image.length)]
    let shape= new THREE.Mesh(geometries[Math.floor(Math.random()*geometries.length)],material)
shape.position.x=( Math.random()-0.5)*50;
shape.position.y=( Math.random()-0.5)*50;
shape.position.z=( Math.random()-0.5)*50

shape.rotation.x=Math.random()*Math.PI;
shape.rotation.y=Math.random()*Math.PI;

//scale the size;
let shapeScale =Math.random()
shape.scale.x= shapeScale;
shape.scale.y= shapeScale;
shape.scale.z= shapeScale

    Scene.add(shape)
}
// const axisHelper = new THREE.AxesHelper()
// Scene.add(axisHelper)
const camera = new THREE.PerspectiveCamera(45,acceptRatio,1,1000)
camera.position.set( 0, 1, 20 );
Scene.add(camera)

// camera.position.z=-1
// camera.position.x=1

// console.log(fontLoader)
const controls = new OrbitControls( camera, display );
controls.update();
controls.enableDamping=true;

const rendrer= new THREE.WebGLRenderer({
    canvas:display
})

//if device pixel ratio is higher then 2 then default value will be 2
//   rendrer.setPixelRatio(Math.min(...[window.devicePixelRatio,2]))

rendrer.setSize(width,height)

// let position=0.1


// //create own geo


// // create a simple square shape. We duplicate the top left and bottom right
// // vertices because each vertex needs to appear once per triangle.
// const vertices = new Float32Array( [
// 	0, 1,  0, // v0
// 	 1, 0,  0, // v1
// 	 1,  0,  1, // v2
// ] );

// // itemSize = 3 because there are 3 values (components) per vertex
// geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
// const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// const meshTriangle = new THREE.Mesh( geometry, material );
// Scene.add(meshTriangle)
// const color=['#ff0000','#00ff00','#0000ff','#00fbff']
// for(let i=0;i<200;i++){
//     let randomIndex= Math.floor(Math.random()*color.length)
//     const geometry = new THREE.BufferGeometry();
//     const vertices = new Float32Array( [
// 	(Math.random()-0.5)*4,(Math.random()-0.5)*4,(Math.random()-0.5)*4, // v0
// 	 (Math.random()-0.5)*4, (Math.random()-0.5)*4,  (Math.random()-0.5)*4, // v1
// 	 (Math.random()-0.5)*4,  (Math.random()-0.5)*4,  (Math.random()-0.5)*4, // v2
// ] );
// geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
// const material = new THREE.MeshBasicMaterial( { color: color[randomIndex] ,wireframe:true} );
// const meshTriangle = new THREE.Mesh( geometry, material );
// Scene.add(meshTriangle)
// }

/**
 * add text to 3d space 
 */

// const fontLoader 



window.addEventListener('resize',() => {
    width=window.innerWidth;
    height=window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    rendrer.setSize(width,height)
    controls.update();
    rendrer.render(Scene,camera)
})


window.addEventListener('dblclick',() => {
    // console.log(display.)
    if(!document.fullscreenElement){
        display.requestFullscreen()
    } 
    else {
        document.exitFullscreen();
      }
})

const tick = () => {
    // position=position+0.2;
    // group.rotation.x += 0.01;
	// group.rotation.y += 0.01;
    // mesh.position.y= Math.sin(position)
    // console.log('hello')
    requestAnimationFrame(tick );
    controls.update();
    rendrer.render(Scene,camera)
    // rendrer.setPixelRatio(Math.min(...[window.devicePixelRatio,2]))

}


tick()