function lightMaker(position) {
  //add 100 lights into screen
  for(i=0; i<100; i++){
    var lightx = position[i]['x'];
    var lighty = position[i]['y'];
    var lightz = position[i]['z'];
    var pointLight = new THREE.PointLight(0xFFFFFF);

    pointLight.position = (lightx, lighty, lightz);
    pointLight.intensity = 0.5;
    pointLight.distance = 6;

    // add to the scene
    scene.add(pointLight);
  };
};