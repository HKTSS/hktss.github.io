const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 200);
const defaultCamera = {
    x:0,
    y:1,
    z:-13
}
const element = document.getElementById("objPreview");
const renderer = new THREE.WebGLRenderer({ canvas: element, antialias: true });
const mainMaterial = new THREE.MeshBasicMaterial( { color: 0x009900 } );
const vertexMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
let selectedVertex = 0;
let vertexSelectionShown = false;

setupCamera();

const defaultPlane = {
    pos: new Float32Array([
        -1.0, 0.0,  1.0,
        1.0, 0.0,  1.0,
        1.0,  2.0,  1.0,
        -1.0,  2.0,  1.0
    ]),
    index: [
        0, 3, 1, 2, 1, 3
    ]
}

let selectedVertexData = {
    pos1: [1.0, 0.0, 1.0],
    pos2: [-1.0, 0.0, 1.0],
    pos3: [-1.0, 2.0, 1.0],
    pos4: [1.0, 2.0, 1.0],
}

let lastPosData = {
    mainCube: {
        x: 0,
        y: 0,
        z: 0
    }
}

renderer.setSize(300, 300);
renderer.setClearColor(0xABABAB, 1)

const vertexSelectorBox = createMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), null, null, vertexMaterial);
const mainMesh = createMesh(new THREE.BufferGeometry(), new THREE.BufferAttribute(defaultPlane.pos, 3), defaultPlane.index, mainMaterial);
scene.add(mainMesh);
scene.add(vertexSelectorBox)

function setSelectedVertex(i) {
    selectedVertex = i;
}

function setVertexSelectionShown() {
    vertexSelectionShown = document.getElementById("vertexSel").checked;
}

function setupCamera() {
    camera.position.x = defaultCamera.x;
    camera.position.y = defaultCamera.y;
    camera.position.z = defaultCamera.z;
    camera.rotation.y = Math.PI;
}

function animate() {
    lastPosData.mainCube = mainMesh.geometry.attributes.position.array;

    let coords = getCoords();
    let newPosition = new Float32Array([
        coords.x1, coords.y1, coords.z1,
        coords.x2, coords.y2, coords.z2,
        coords.x3, coords.y3, coords.z3,
        coords.x4, coords.y4, coords.z4
    ]);

    if(vertexSelectionShown) {
        vertexSelectorBox.visible = true;
        if (selectedVertex <= 1) {
            vertexSelectorBox.position.x = coords.x1
            vertexSelectorBox.position.y = coords.y1
            vertexSelectorBox.position.z = coords.z1
        }
        if (selectedVertex == 2) {
            vertexSelectorBox.position.x = coords.x2
            vertexSelectorBox.position.y = coords.y2
            vertexSelectorBox.position.z = coords.z2
        }
        if (selectedVertex == 3) {
            vertexSelectorBox.position.x = coords.x3
            vertexSelectorBox.position.y = coords.y3
            vertexSelectorBox.position.z = coords.z3
        }
        if (selectedVertex == 4) {
            vertexSelectorBox.position.x = coords.x4
            vertexSelectorBox.position.y = coords.y4
            vertexSelectorBox.position.z = coords.z4
        }
    } else {
        vertexSelectorBox.visible = false;
    }

    /* Update box position */
    mainMesh.geometry.setAttribute('position', new THREE.BufferAttribute(newPosition, 3))
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

function createMesh(cube, pos, index, material) {
    const mainCube = cube;
    if(pos != null) mainCube.setAttribute("position", pos);
    if(index != null) mainCube.setIndex(defaultPlane.index);
    return new THREE.Mesh(mainCube, material);
}

function getCoords() {
    vx1 = parseFloat(document.getElementById("x1").value);
    if(isNaN(vx1)) vx1 = lastPosData.mainCube[0]
    vx2 = parseFloat(document.getElementById("x2").value);
    if(isNaN(vx2)) vx2 = lastPosData.mainCube[3] 
    vx3 = parseFloat(document.getElementById("x3").value);
    if(isNaN(vx3)) vx3 = lastPosData.mainCube[6] 
    vx4 = parseFloat(document.getElementById("x4").value);
    if(isNaN(vx4)) vx4 = lastPosData.mainCube[9] 

    vy1 = parseFloat(document.getElementById("y1").value);
    if(isNaN(vy1)) vy1 = lastPosData.mainCube[1]
    vy2 = parseFloat(document.getElementById("y2").value);
    if(isNaN(vy2)) vy2 = lastPosData.mainCube[4]
    vy3 = parseFloat(document.getElementById("y3").value);
    if(isNaN(vy3)) vy3 = lastPosData.mainCube[7]
    vy4 = parseFloat(document.getElementById("y4").value);
    if(isNaN(vy4)) vy4 = lastPosData.mainCube[10]

    vz1 = parseFloat(document.getElementById("z1").value);
    if(isNaN(vz1)) vz1 = lastPosData.mainCube[2] 
    vz2 = parseFloat(document.getElementById("z2").value);
    if(isNaN(vz2)) vz2 = lastPosData.mainCube[5]
    vz3 = parseFloat(document.getElementById("z3").value);
    if(isNaN(vz3)) vz3 = lastPosData.mainCube[8]
    vz4 = parseFloat(document.getElementById("z4").value);
    if(isNaN(vz4)) vz4 = lastPosData.mainCube[11]

    return {
        x1: vx1,
        x2: vx2,
        x3: vx3,
        x4: vx4,
        y1: vy1,
        y2: vy2,
        y3: vy3,
        y4: vy4,
        z1: vz1,
        z2: vz2,
        z3: vz3,
        z4: vz4
    }
}

animate();