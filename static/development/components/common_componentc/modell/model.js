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
} from "./helper";

var container;
let rotateSpeed = 0;

let views__visual_right = false;
let views__visual_left = false;
var camera, scene, renderer, hemiLightHelper, dirLightHeper, theModel;

var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: 0xf1f1f1,
  shininess: 10,
});

var object;

init();
animate();

function init() {
  container = document.createElement("div");
  document.getElementsByClassName('views__visula_3d')[0].appendChild(container);
  // document.body

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 170;
  camera.position.y = 80;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdfdfdf);
  scene.fog = new THREE.Fog(0xdfdfdf, 100, 1200);
 
  // Init the object loader
  var loader = new GLTFLoader();


  loader.load(
    "/static/source/model/Neo_v23.glb",
    // "/static/source/model/Neo_v20.glb",
    function (gltf) {
      theModel = gltf.scene;
      console.log(theModel);
      let flag = 0;
      // Set the models initial scale
      theModel.scale.set(0.05, 0.05, 0.05);
      theModel.position.y = 13;
      theModel.rotation.y = -Math.PI / 2 + 40;

      theModel.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }

        if (
          o.name.indexOf("Koleco_1") !== -1 ||
          o.name.indexOf("KolecoZ_1") !== -1
        ) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x292929"),
          });
        } else if (
          o.name.indexOf("Koleco_2") !== -1 ||
          o.name.indexOf("KolecoZ_2") !== -1
        ) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0xf44345"),
          });
        } else if (
          o.name.indexOf("Koleco_3") !== -1 ||
          o.name.indexOf("KolecoZ_3") !== -1
        ) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x292929"),
          });
        } else if (o.name.indexOf("Rama") !== -1) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x292929"),
          });
          // o.visible = false;
        } else if (o.name.indexOf("Vulka") !== -1) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x494949"),
          });
        } else if (o.name.indexOf("Amort") !== -1) {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x119911"),
          });
        } else {
          o.material = new THREE.MeshPhongMaterial({
            color: parseInt("0x438AAC"),
          });
        }

        flag++;
      });
      scene.add(theModel);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  scene.add(addCircleToBacground(64.8, 65, 120));
  scene.add(addCircleToBacground(69.8, 70, 120));

  // // Add lights
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
  hemiLight.position.set(0, 50, 0);
  // Add hemisphere light to scene
  scene.add(hemiLight);

  //Create a DirectionalLight and turn on shadows for the light
  var light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(-350, 480, 110); //default; light shining from top
  light.castShadow = true; // default false
  scene.add(light);
  light.shadow.camera.top = 50;
  light.shadow.camera.bottom = -50;
  light.shadow.camera.left = -50;
  light.shadow.camera.right = 50;

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 700; // default

  // Floor
  var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
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
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  var controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = Math.PI / 3;
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.dampingFactor = 0.1;
  controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
  controls.autoRotateSpeed = 0.2;

  // //  Щар що відкидає тінь
  // HelperSphereShadows(scene);

  // //   Площина яка невідеидає тінь
  // HelperPlaneShadows(scene,light);

  // Помічник показує камеру для того зоб бачити куди буде падати тінь
  // HelperShadowCamera(scene, light.shadow.camera);

  // // Додає до сцени вісі кординат
  HelperCordinates(scene, 40);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

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
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  
  if(views__visual_left){
    theModel.rotation.y += Math.PI / 180;
  }
  
  if(views__visual_right){
    theModel.rotation.y -= Math.PI / 180;
  }
 
  
  
  renderer.render(scene, camera);
  
}

      $('.views__visual_left')[0].addEventListener('mousedown', () => views__visual_left = true,false);
      $('.views__visual_left')[0].addEventListener('mouseup', () => views__visual_left = false,false);
      
      $('.views__visual_right')[0].addEventListener('mousedown', () => views__visual_right = true,false);
      $('.views__visual_right')[0].addEventListener('mouseup', () => views__visual_right = false,false);
    
 
