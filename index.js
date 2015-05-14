var express = require('express');
var app = express.createServer();

console.log('hello')

app.get('/', function(req, res){
  res.sendfile("../index.html");
})

app.listen();







  //     var scene = new THREE.Scene();
  //     var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

  //     var renderer = new THREE.WebGLRenderer();
  //     renderer.setSize( window.innerWidth, window.innerHeight );
  //     document.body.appendChild( renderer.domElement );

  //         // create a point light
  //     var pointLight = new THREE.PointLight(0xFFFFFF);

  //     // set its position
  //     pointLight.position.x = 60;
  //     pointLight.position.y = 50;
  //     pointLight.position.z = 130;

  //     // add to the scene
  //     scene.add(pointLight);

  // camera.position.z = 15;

  // function sphereMaker(position) {
  //   var position = [{'x': 1, 'y': 3, 'z': 0}, {'x': -1, 'y': 2, 'z': 0}, {'x': 6, 'y': 0, 'z': 0} , {'x': 2, 'y': 7, 'z': 0}, {'x': -6, 'y': 4, 'z': 0}, {'x': -3, 'y': 2, 'z': 6}, {'x': 4, 'y': -3, 'z': -2}, {'x': -3, 'y': -3, 'z': 0}, {'x': -4, 'y': 4, 'z': -6}, {'x': 3, 'y': -5, 'z': 5}, {'x': 8, 'y': -5, 'z': 5}, {'x': -9, 'y': -3, 'z': 3}];
  //   for(i=0; i<position.length; i++){
  //     var x = position[i]['x']
  //     var y = position[i]['y']
  //     var z = position[i]['z']

  //     var geometry = new THREE.SphereGeometry( .5, 20, 20 );
  //     var material = new THREE.MeshPhongMaterial( );
  //     THREE.ImageUtils.crossOrigin = '';
  //     material.map  = THREE.ImageUtils.loadTexture('http://i.imgur.com/X2umI9r.jpg');

  //     var sphere = new THREE.Mesh( geometry, material );
  //     sphere.position.set(x, y, z);

  //     scene.add( sphere );
  //   }
  //   render();
  // }
  // sphereMaker();
  


  // function render() {
  // requestAnimationFrame( render );

  // pointLight.position.x += -.4;
  // pointLight.position.y += -.4;
  // // pointLight.position.z += ;


  // renderer.render( scene, camera );
  // }
