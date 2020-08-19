import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
  addCircleToBacground,
  HelperCordinates,
  HelperShadowCamera,
  HelperPlaneShadows,
  HelperSphereShadows,
  params,
  colorBike,
} from "./helper";








let params_search = window.location.search.split("?")[1].split("&");
let config_model = {};

params_search.map((item) => {
  let param = item.split("=");

  param[1] = param[1].replace("%23", "");
  param[1] = param[1].replace("%20", "");

  config_model[param[0]] = param[1];
});
 

if (config_model.iframe_type === "Pozitiff") {
  config_model['url'] = "/static/source/model/Pozit10.gltf";
} else if (config_model.iframe_type === "Neo") {
  config_model['url'] = "/static/source/model/Pozit10.gltf";
} else if (config_model.iframe_type === "Ekross") {
  config_model['url'] = "/static/source/model/Pozit10.gltf";
}

 

$('.views__back').on('click',function(){
   

   let back_url =  Object.keys(config_model).map((key)=>{
      return `${key}=${encodeURIComponent(config_model[key])}`
    }).join("&");

  // console.log(window.location );
  // console.log(window.location.search );
  window.location.href =  `/page1/?${back_url}`
})




/////||||///////
/////||||///////
/////||||///////
/////||||///////
//||/||||/||////
///||||||||/////
////||||||//////
/////||||///////
//////||////////
////////////////
// RENDER 3D 
// RENDER 3D 
// RENDER 3D 
// RENDER 3D 
// RENDER 3D 

 

var container;
let rotateSpeed = 0;

let views__visual_right = false; 
let views__visual_left = false;
var camera, scene, renderer, hemiLightHelper, dirLightHeper, theModel;

var mouseX = 0,
  mouseY = 0;
  let views__visula_3d = document.getElementsByClassName('views__visula_3d')[0];
  
var windowHalfX = views__visula_3d.offsetWidth / 2;
var windowHalfY = window.innerHeight / 2;
const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: 0xb4b4b4,
  shininess: 10, 

});

var object;

init();
animate();

function init() {
  container = document.createElement("div");

  document.getElementsByClassName('views__visula_3d')[0].appendChild(container);
console.log(views__visula_3d.offsetWidth );

  camera = new THREE.PerspectiveCamera(
    60,
    views__visula_3d.offsetWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 170;
  camera.position.y = 80;

  scene = new THREE.Scene();
  scene.background   = new THREE.Color('0xffffff');
  scene.fog = new THREE.Fog(0xb4b4b4, 100, 1200);
 
  // Init the object loader
  var loader = new GLTFLoader();

// console.log(config_model );

  loader.load(
    config_model.url,
    // "/static/source/model/Neo_v20.glb",
    function (gltf) {
      console.log(gltf );
      
      theModel = gltf.scene;
      console.log(theModel);
      let flag = 0;
      // Set the models initial scale
      theModel.scale.set(0.05, 0.05, 0.05);
      theModel.position.y = 13;
      theModel.rotation.y = -Math.PI / 2 + 40;


      // let theModelColor = colorBike(theModel,config_model);
    
      theModel.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          // o.receiveShadow = true;
        
          if(o.material.name=='Powder_Coat_(Green)'){
            o.material.metalness=0.7;
          }else if(o.material.name=='Powder_Coat_(Green)_(1)'){
            o.material.metalness=0;
          }
          // console.log(o.material.name );
          // console.log(o.material.metalness );
          
          
        }
      })
       
      theModel.children[0].visible=false;
  
      HelperShadowCamera(scene, theModel.children[0].children[0].shadow.camera);
      scene.add(theModel);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  const cubeSize = 4;
  const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
  const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC'});
  const mesh12 = new THREE.Mesh(cubeGeo, cubeMat);
  mesh12.castShadow = true;
  // mesh12.receiveShadow = true;
  mesh12.position.set(cubeSize + 1, cubeSize / 2, 0);
  scene.add(mesh12);



  // var geometry = new THREE.RingGeometry(64.8, 65, 120);
  // var material = new THREE.MeshBasicMaterial({
  //   color: 0x292929,
  //   side: THREE.DoubleSide,
  // });
  // var mesh = new THREE.Mesh(geometry, material);

  // mesh.up.x = 2;
  // // mesh.rotateX( addCircleToBacground);  
  // scene.add(mesh);
console.log(addCircleToBacground(69.8, 70, 120) );


  scene.add(addCircleToBacground(64.8, 65, 120));
  scene.add(addCircleToBacground(69.8, 70, 120));

  // // Add lights
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
  hemiLight.position.set(0, 50, 0);
  // Add hemisphere light to scene
  scene.add(hemiLight);

  


  //Create a DirectionalLight and turn on shadows for the light
  var light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(-200, 100, 200); //default; light shining from top
  light.intensity = 600; // default false
  light.castShadow = true; // default false
  scene.add(light);
  light.shadow.camera.top = 120;
  light.shadow.camera.bottom = -50;
  light.shadow.camera.left = -70;
  light.shadow.camera.right = 70;
  light.intensity = 1;

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 1212; // default
  light.shadow.mapSize.height = 1212; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 700; // default

// console.log(light );

  // Floor
  var floorGeometry = new THREE.PlaneGeometry(9000, 9000, 1, 1);
  var floorMaterial = new THREE.MeshPhongMaterial({
    color: 0xf1f1f1,
    shininess: 0,
  });

  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  floor.position.y = -1;
  scene.add(floor);

  renderer = new THREE.WebGLRenderer({ container, antialias: true });
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(views__visula_3d.offsetWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  var controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = Math.PI / 3;
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.dampingFactor = 0.1;
  controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
  controls.autoRotateSpeed = 0.2;

console.log(scene );


  // // Щар що відкидає тінь
  HelperSphereShadows(scene);

  // //   Площина яка невідеидає тінь
  // HelperPlaneShadows(scene,light);

  // Помічник показує камеру для того зоб бачити куди буде падати тінь
  HelperShadowCamera(scene, light.shadow.camera);
  // HelperShadowCamera(scene, scene.shadow.camera);

  // // // Додає до сцени вісі кординат
  // HelperCordinates(scene, 40);

  window.addEventListener("resize", onWindowResize, false);


    
//   var geometry123 = new THREE.RingGeometry( 1, 5, 32 );
// var material123 = new THREE.MeshBasicMaterial( { color: 0x12ff00, side: THREE.DoubleSide } );
// var mesh123 = new THREE.Mesh( geometry123, mesh123 );
 

$('.views__order_go').on('click',function(){
  event.preventDefault();
  $('.views__order').addClass('views__order-hidden');
  $('.views__parameter').addClass('views__parameter-active')
  $('.views__visual').addClass('views__visual-compress');
  setTimeout(function() {
    onWindowResize();
  },300)
  // resizeRendererToDisplaySize();
})


// scene.add( mesh123 );
}

function onWindowResize() {

  console.log(views__visula_3d.offsetWidth );

 
  
  windowHalfX = views__visula_3d.offsetWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = views__visula_3d.offsetWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(views__visula_3d.offsetWidth, window.innerHeight);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = views__visula_3d.offsetWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  // canvas.css({transition:'.3s'})


  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}





function animate() {
  requestAnimationFrame(animate);
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    // console.log(canvas );

    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  
  if(views__visual_left){
    theModel.children[2].rotation.z += Math.PI / 180;
  }
  
  if(views__visual_right){
    theModel.children[2].rotation.z -= Math.PI / 180;
  }
 
  
    
  renderer.render(scene, camera);
  
}

$('.views__visual_left')[0].addEventListener('mousedown', () => views__visual_left = true,false);
$('.views__visual_left')[0].addEventListener('mouseup', () => views__visual_left = false,false);

$('.views__visual_right')[0].addEventListener('mousedown', () => views__visual_right = true,false);
$('.views__visual_right')[0].addEventListener('mouseup', () => views__visual_right = false,false);
    
 


