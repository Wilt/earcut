var renderer, scene = new THREE.Scene(), camera;

window.onload = init;

function init() {
    // info
    var info = document.createElement('div');
    info.style.position = 'absolute';
    info.style.top = '30px';
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.style.color = '#fff';
    info.style.fontWeight = 'bold';
    info.style.backgroundColor = 'transparent';
    info.style.zIndex = '1';
    info.style.fontFamily = 'Monospace';
    info.innerHTML = "three.js - earclip algorithm testing examples";
    document.body.appendChild(info);

    // renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // ambient light
    var ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // directional light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-1, 0.5, 1);
    scene.add(directionalLight);

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    scene.add(camera);

    test( 0 );
    animate();
}

// render
function render() {
    renderer.render(scene, camera);
}

// animate
function animate() {
    requestAnimationFrame(animate);
    render();
}