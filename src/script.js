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

const canvas = document.getElementById('canvas');
const fog = new THREE.Fog('#262837',1,15)
const SCENE = new THREE.Scene();
SCENE.fog=fog;

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
rendrer.setClearColor('#262837')
const controls = new OrbitControls( CAMERA, canvas);
controls.update();
controls.enableDamping=true;
//add orbit controll

const axisHelper = new THREE.AxesHelper();
SCENE.add(axisHelper)

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

/**
 * load all texture
 */
const textureLoader= new THREE.TextureLoader()
/**
 * load door related texture loader
 */
const doorImageTexture = textureLoader.load('doorassets/color.jpg');
const doorAlphaImageTexture = textureLoader.load('doorassets/alpha.jpg')
const doorAomapImageTexture = textureLoader.load('doorassets/ambientOcclusion.jpg');
const doordisplacementImageTexture = textureLoader.load('doorassets/height.jpg')
const doorNormalImageTexture = textureLoader.load('doorassets/normal.jpg');
const doorMetalnessImageTexture = textureLoader.load('doorassets/metalness.jpg');
const doorRoughnessImageTexture = textureLoader.load('doorassets/roughness.jpg');
const roofTexture= textureLoader.load('doorassets/roof.jpg');
const wallTexture = textureLoader.load('bricks/color.jpg')
const wallTextureAmbientOcclusion = textureLoader.load('bricks/ambientOcclusion.jpg')
const wallNormalImageTexture = textureLoader.load('bricks/normal.jpg');
const wallRoughnessImageTexture = textureLoader.load('bricks/roughness.jpg');



const grassTexture = textureLoader.load('grass/color.jpg')
const grassTextureAmbientOcclusion = textureLoader.load('grass/ambientOcclusion.jpg')
const grassNormalImageTexture = textureLoader.load('grass/normal.jpg');
const grassRoughnessImageTexture = textureLoader.load('grass/roughness.jpg');

grassTexture.repeat.set(8,8);
grassTextureAmbientOcclusion.repeat.set(8,8);
grassNormalImageTexture.repeat.set(8,8);
grassRoughnessImageTexture.repeat.set(8,8);

grassTexture.wrapS= THREE.RepeatWrapping;
grassTextureAmbientOcclusion.wrapS= THREE.RepeatWrapping;
grassNormalImageTexture.wrapS= THREE.RepeatWrapping;
grassRoughnessImageTexture.wrapS= THREE.RepeatWrapping;


grassTexture.wrapT= THREE.RepeatWrapping;
grassTextureAmbientOcclusion.wrapT= THREE.RepeatWrapping;
grassNormalImageTexture.wrapT= THREE.RepeatWrapping;
grassRoughnessImageTexture.wrapT= THREE.RepeatWrapping;

/**
 * applay ambient light
 */
const sunLightColor={
    color:'#b9d5ff'
}
const sunLight= new THREE.AmbientLight(sunLightColor.color,0.12);
SCENE.add(sunLight)


const moonLight = new THREE.DirectionalLight(sunLightColor.color,0.12);
moonLight.castShadow=true;

moonLight.position.set(4,5,-2)
SCENE.add(moonLight)


/**
 * door light
 */
const doorLight = new THREE.PointLight('#ff7d46',1,5)
doorLight.position.set(0,1.2,1)
doorLight.castShadow=true;


/**
 * add gost
 */
const gost1= new THREE.PointLight('#ff00ff',2,3);
gost1.castShadow=true
const gost2= new THREE.PointLight('#00ffff',2,3);
gost2.castShadow=true
const gost3= new THREE.PointLight('#ffff00',2,3);
gost3.castShadow=true

SCENE.add(gost1,gost2,gost3)




/**
 * create ground 
 */

const groundMaterial = new THREE.MeshStandardMaterial({map:grassTexture,side:THREE.DoubleSide,aoMap:grassTextureAmbientOcclusion,normalMap:grassNormalImageTexture,roughnessMap:grassRoughnessImageTexture});
const groundGeometries= new THREE.PlaneBufferGeometry(6,6);


const ground = new THREE.Mesh(groundGeometries,groundMaterial)
ground.rotation.x= -Math.PI*0.5;
ground.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(ground.geometry.attributes.uv.array,2))
/**
 * add ground scene to  scene
 */

ground.receiveShadow=true
SCENE.add(ground)

rendrer.setSize(canvasScreen.width,canvasScreen.height);
rendrer.render(SCENE,CAMERA);
rendrer.shadowMap.enabled=true;


/**
 * create house 
 */
const house = new THREE.Group();
house.castShadow=true;
house.add(doorLight)
SCENE.add(house)
const houseGeometriesProperties= {
    width:1.6,
    depth:1.6,
    height:1.2
}
const houseMaterial = new THREE.MeshStandardMaterial({
    color:'#ac8e82',
    map:wallTexture,
    aoMap:wallTextureAmbientOcclusion,
    normalMap:wallNormalImageTexture,
    roughness:wallRoughnessImageTexture
});
const houseGeometries = new THREE.BoxBufferGeometry(houseGeometriesProperties.width,houseGeometriesProperties.height,houseGeometriesProperties.depth)
const wall = new THREE.Mesh(houseGeometries,houseMaterial);
wall.castShadow=true;
wall.position.y= (houseGeometriesProperties.height*0.5)+0.01;
wall.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(wall.geometry.attributes.uv.array,2))

/**
 * add roof 
 */
const roofProperties={
    height:1,
    segment:4,
    width:houseGeometriesProperties.width
}

const geometry = new THREE.ConeGeometry( roofProperties.width, roofProperties.height, roofProperties.segment ); 
const material = new THREE.MeshStandardMaterial( {color: '#b35f45',map:roofTexture} );
const roofTop = new THREE.Mesh(geometry, material );
roofTop.position.y=(houseGeometriesProperties.height)+roofProperties.height/2;
roofTop.rotation.y=Math.PI*(1/4)

/**
 * create bush
 */
const bushGeometries= new THREE.SphereBufferGeometry(1,16,16)
const bushMaterial = new THREE.MeshStandardMaterial({color:'#89c854'})
const bush1= new THREE.Mesh(bushGeometries,bushMaterial);
bush1.castShadow=true;
bush1.scale.set(0.12,0.12,0.12)
bush1.position.set(0.5,0.12,0.9)
const bush2= new THREE.Mesh(bushGeometries,bushMaterial)
bush2.scale.set(0.08,0.08,0.08)
bush2.position.set(0.63,0.08,0.89)

const bush3= new THREE.Mesh(bushGeometries,bushMaterial)
bush3.scale.set(0.08,0.08,0.08)
bush3.position.set(-0.60,0.10,1)

const bush4= new THREE.Mesh(bushGeometries,bushMaterial)
bush4.scale.set(0.12,0.12,0.12)
bush4.position.set(-0.5,0.12,0.9)
bush2.castShadow=true;
bush3.castShadow=true;
bush4.castShadow=true;



/**
 * add door
 */

const doorGeometries = new THREE.PlaneBufferGeometry(1,1.1,100,100);
const doorMaterial = new THREE.MeshStandardMaterial({
    map:doorImageTexture,
    alphaMap:doorAlphaImageTexture,
    transparent:true,
    aoMap:doorAomapImageTexture,
    displacementMap:doordisplacementImageTexture,
    displacementScale:0.1,
    normalMap:doorNormalImageTexture,
    metalnessMap:doorMetalnessImageTexture,
    roughnessMap:doorRoughnessImageTexture

})



const door = new THREE.Mesh(doorGeometries,doorMaterial)
/**
 * for aoMap we have to provide  uv2 
 */
door.geometry.setAttribute('uv2',new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array,2))
door.position.z=0.01+houseGeometriesProperties.width/2;
door.position.y=1*0.5


house.add(wall,roofTop,bush1,bush2,bush3,bush4,door)

/**
 * add  grves
 */

const grvesGeometries =new THREE.BoxBufferGeometry(0.25,0.26,0.05);
const grvesMaterial =new THREE.MeshStandardMaterial({color:'#b2b6b1'});

const gravesGroup = new THREE.Group();
SCENE.add(gravesGroup)

for(let i=0;i<50;i++){
    let gravesFector = 1.4+Math.random()*1.5
    const angale = Math.random()*Math.PI*2;
    const x= Math.sin(angale)*gravesFector
    const z = Math.cos(angale)*gravesFector
    let graves= new THREE.Mesh(grvesGeometries,grvesMaterial);
    graves.castShadow=true;
    graves.position.set(x,(0.01+0.141),z)
    graves.rotation.y=( Math.random()-0.5)*0.5
    graves.rotation.z=( Math.random()-0.5)*0.5

    gravesGroup.add(graves)
}

/**
 * add all gui
 */
const gui =  new GUI()

const sunLightFolder = gui.addFolder('sun-light');

sunLightFolder.add(sunLight,'intensity')
              .min(0)
              .max(1)
              .setValue(0.12)
sunLightFolder.addColor(sunLightColor,'color').onChange(() => {
    sunLight.color.set(sunLightColor.color)
})

// const groundFolder = gui.addFolder('ground');
// groundFolder.add(ground.scale,'x')
//             .min(1)
//             .max(4)
//             .onChange(() => {
//                 ground.scale.y= ground.scale.x
//             })
//             .setValue(2)
//             .name('size')

//            groundFolder.addColor(sunLightColor,'color').onChange(() => {
//                 ground.material.color.set(sunLightColor.color)
//             })
// const houseFolder = gui.addFolder('house');

// houseFolder.addColor(sunLightColor,'color').onChange(() => {
//     wall.material.color.set(sunLightColor.color)
// })
// houseFolder.add(wall.scale,'y')
//            .min(0.5)
//            .max(1)
//            .step(0.1)
//            .name('size')
//            .onChange(() => {
//             wall.scale.x= wall.scale.y+0.4;
//             wall.scale.z= wall.scale.y+0.4;;
//             wall.position.y=wall.scale.y*0.6;
            
        
//            })
//            .setValue(0.6)
let clock = new THREE.Clock();
const tick = () => {
  
    requestAnimationFrame(tick );
    const elapseTime = clock.getElapsedTime()
    gost1.position.x= Math.sin(elapseTime*0.5)*2;
    gost1.position.z= Math.cos(elapseTime*0.5)*2;
    gost1.position.y=Math.sin(elapseTime*3)+Math.sin(-elapseTime*1.1)

    gost2.position.x= Math.sin(-elapseTime*0.3)*2;
    gost2.position.z= Math.cos(-elapseTime*0.3)*2;
    gost2.position.y=Math.sin(-elapseTime*4)+Math.sin(-elapseTime*2.1)
    
    gost3.position.x= -Math.sin(-elapseTime*0.6)*2+Math.sin(elapseTime*0.3);
    gost3.position.z= Math.cos(-elapseTime*0.3)*2;
    gost3.position.y=Math.sin(-elapseTime*4)+Math.sin(-elapseTime*2.1)
    controls.update();
    rendrer.render(SCENE,CAMERA) 
}


tick()
