var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z =5;
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#e5e5e5"); //background color
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',() => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix(); //call every time when camera is ajusted
})
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color:0xF7F7F7});
// var mesh = new THREE.Mesh(geometry,material);
// scene.add(mesh); 



// var geometry = new THREE.BoxGeometry(1,1,1);
// var material = new THREE.MeshLambertMaterial({color:0xFFCC00});
// var mesh = new THREE.Mesh(geometry,material);
// mesh.position.y = 2;
meshX = -10;
for(var i=0; i<15;i++){
    var mesh= new THREE.Mesh(geometry,material);
    mesh.position.x = (Math.random() - 0.5)*10;
    mesh.position.y = (Math.random() - 0.5) *10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh);
    meshX+1;
}

// scene.add(mesh); 
var light =new THREE.PointLight(0xFFFFFF,1,1000)
light.position.set(0,0,0);

scene.add(light);

var light =new THREE.PointLight(0xFFFFFF,2,1000)
light.position.set(0,0,25);

scene.add(light);

var render = function(){
    requestAnimationFrame(render);

    renderer.render(scene,camera);
}

function onMouseMove(event){
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) *2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) *2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects =raycaster.intersectObjects(scene.children,true);
    for(var i=0; i< intersects.length;i++){
        // intersects[i].object.material.color.set(0xff0000)
        this.t1 = new TimelineMax();
        this.t1.to(intersects[i].object.scale,1,{ x: 2 , ease: Expo.easeOut})
        this.t1.to(intersects[i].object.scale,.5,{ x: .5 , ease: Expo.easeOut})
        this.t1.to(intersects[i].object.scale,.5,{ x: .5 , ease: Expo.easeOut})
        this.t1.to(intersects[i].object.position,.5,{ x: 2 , ease: Expo.easeOut})
        this.t1.to(intersects[i].object.rotation,.5,{ y:Math.PI*.5  , ease: Expo.easeOut}, "=-1.5")
    }
}

render();

//gsap
// this.t1 = new TimelineMax({paused: true});
// this.t1.to(this.mesh.scale,1,{ x: 2 , ease: Expo.easeOut})
// this.t1.to(this.mesh.scale,.5,{ x: .5 , ease: Expo.easeOut})
// this.t1.to(this.mesh.scale,.5,{ x: .5 , ease: Expo.easeOut})
// this.t1.to(this.mesh.position,.5,{ x: 2 , ease: Expo.easeOut})
// this.t1.to(this.mesh.rotation,.5,{ y:Math.PI*.5  , ease: Expo.easeOut}, "=-1.5")

window.addEventListener('mousemove', onMouseMove);