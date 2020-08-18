import * as THREE from "three";

export const HelperCordinates = (scene, width_helper_line) => {
  var axesHelper = new THREE.AxesHelper(width_helper_line);
  scene.add(axesHelper);
};
export const HelperShadowCamera = (scene, shadow) => {
  // Create a helper for the shadow camera (optional)
  var helper = new THREE.CameraHelper(shadow);
  scene.add(helper);
};

export const HelperSphereShadows = (scene) => {
  //Create a sphere that cast shadows (but does not receive them)

  var sphereGeometry = new THREE.SphereBufferGeometry(5, 32, 32);
  var sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true; //default is false
  sphere.receiveShadow = false; //default
  scene.add(sphere);
};
export const HelperPlaneShadows = (scene, light) => {
  //Create a plane that receives shadows (but does not cast them)
  var planeGeometry = new THREE.PlaneBufferGeometry(20, 20, 32, 32);
  var planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  scene.add(plane);
  let dirLightHeper = new THREE.DirectionalLightHelper(light, 90);
  scene.add(dirLightHeper);
};

export const addCircleToBacground = (
  inner_radius,
  outer_radius,
  number_particles
) => {
  // // create circle to begraund
  var geometry = new THREE.RingGeometry(
    inner_radius,
    outer_radius,
    number_particles
  );
  var material = new THREE.MeshBasicMaterial({
    color: 0x292929,
    side: THREE.DoubleSide,
  });
  var mesh = new THREE.Mesh(geometry, material);

  mesh.up.x = 1;
  mesh.up.y = 4;
  mesh.up.z = 5;
  mesh.rotateX(Math.PI / 2);

  return mesh;
};

export const params = (data) => {
  // convert array => url
  return Object.keys(data)
    .map((key) => `${data[key].name}=${encodeURIComponent(data[key].value)}`)
    .join("&");
};

export const colorBike = (model, config_model) => {
  let bike = model;
  bike.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }

    if (
      o.name.indexOf("Rama_1") !== -1 ||
      o.name.indexOf("Motor_2") !== -1 ||
      o.name.indexOf("Motor_2") !== -1 ||
      o.name.indexOf("KolecoZ_4") !== -1 ||
      o.name.indexOf("Bag") !== -1 ||
      o.name.indexOf("Rul_1") !== -1 ||
      o.name.indexOf("Mirror_1") !== -1 ||
      o.name.indexOf("Break_3") !== -1 ||
      o.name.indexOf("Mud") !== -1
    ) {
      // Рама і мотор
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.iframe_color}`),
        shininess: 190,
      });
    } else if (o.name.indexOf("Rama_2") !== -1) {
      // Панелі на рамі
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.side_panels_colors}`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("Seat_velo_2") !== -1 ||
      o.name.indexOf("Seat_velo_3") !== -1 ||
      o.name.indexOf("Seat_moto_2") !== -1
    ) {
      // Колір заліха сидіння
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.iframe_color}`),
        shininess: 90,
      });
    } else if (o.name.indexOf("Seat_velo_1") !== -1) {
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.seat_type_color}`),
        shininess: 90,
      });
      // Вело сеління
    } else if (o.name.indexOf("Seat_moto_1") !== -1) {
      // Мото сеління
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.seat_type_color}`),
        shininess: 90,
      });
    } else if (o.name.indexOf("Amort") !== -1) {
      // Амортизатор
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.fork_type_color}`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("KolecoZ_2") !== -1 ||
      o.name.indexOf("Koleco_2") !== -1 ||
      o.name.indexOf("KolecoZ_3") !== -1 ||
      o.name.indexOf("Koleco_3") !== -1
    ) {
      // Амортизатор
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.wheel_size_color}`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("Vulka_1") !== -1 ||
      o.name.indexOf("Vulka_3") !== -1
    ) {
      // Амортизатор
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x${config_model.fork_type_color}`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("Rul_3") !== -1 ||
      o.name.indexOf("Pedali_2") !== -1 
       
    ) {
      // Педаль
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x2626263`),
        shininess: 90,
      });
    } else if (o.name.indexOf("Rama_4") !== -1) {
      //  Заглушки
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x252525`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("Rama_4") !== -1 ||
      o.name.indexOf("Vulka_2") !== -1
    ) {
      //  Заглушки,Перемикачі болти
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x191919`),
        shininess: 90,
      });
    } else if (
      o.name.indexOf("Koleco_1") !== -1 ||
      o.name.indexOf("KolecoZ_1") !== -1 ||
      o.name.indexOf("Pedali_1") !== -1 
    ) {
      //  Елементи колеса покришка,педалі гума
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x262626`),
        shininess: 90,
      });
    } else if (
      // o.name.indexOf("Pedali_3") !== -1 ||
      o.name.indexOf("Rul_4") !== -1 ||
      o.name.indexOf("Rama_3") !== -1
    ) {
      //  Елементи колеса покришка, шпиці, все решта
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x9f9f9f`),
        shininess: 90,
      });
    } else if (
      // o.name.indexOf("Pedali_3") !== -1 ||
      o.name.indexOf("Mirror_2") !== -1 
    ) {
      //  Елементи колеса покришка, шпиці, все решта
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0xffffff`),
        shininess: 30,
      });
    } else if (
      o.name.indexOf("Cep") !== -1 
    ) {
      //  Елементи колеса покришка, шпиці, все решта
      o.material = new THREE.MeshPhongMaterial({
        color: parseInt(`0x191919`),
        shininess: 30,
      });
    } else {
      // o.material = new THREE.MeshPhongMaterial({
      //   color: parseInt("0x438AAC"),
      //   shininess: 30,
      //   specular: 0x222222,
      // });
      console.log(o.name );
    }
  });
  return bike;
};
