/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three-stdlib";
import { useFrame } from '@react-three/fiber';
import { useState } from "react";
import { Drawer } from '@mui/material';

import "./App.css";

const donatorArray = [
  { name: "first", arrivaldate: 20230523 },
  { name: "second", arrivaldate: 20230601 }
]


const initialCameraPosition = [600, 300, 600];
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const cupPositions = [
  { x: 90, y: 60, z: 155 },
  { x: 89, y: 31, z: 140 }
];


const ObjectModelings = ({ setClickedCupIndex, setDrawerOpen }) => {
  const obj = useLoader(OBJLoader, "/structure2.obj");
  const smallcup = useLoader(OBJLoader, "/koffie2.obj");

  const cupArray = [
    smallcup,
    smallcup.clone()
  ];

  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color('rgb(255, 255, 0)') });


  const setObjectMaterial = (parentObject) => {
    parentObject.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
  };

  // Set material to your objects
  setObjectMaterial(obj);
  cupArray.forEach(cup => setObjectMaterial(cup));

  obj.position.set(0, -90, 0);

  for (let i = 0; i < cupArray.length; i++) {
    cupArray[i].position.set(cupPositions[i].x, cupPositions[i].y, cupPositions[i].z);
  }

  /**
 * @param {number} index - The index of the clicked cup.
 */
  const clickedfucnction = (index) => {
    setClickedCupIndex(index);
    setDrawerOpen(true);
  };

  return (
    <>
      <primitive object={obj} />

      {cupArray.map((cup, index) => {
        return <primitive key={index} object={cup} scale={0.3} onClick={() => { clickedfucnction(index) }} />
      })}

    </>
  );
};


function Hook({ clickedCupIndex }) {
  const { camera } = useThree();

  useFrame(() => {
    if (clickedCupIndex !== -1) {
      // When a cup is clicked, move the camera towards the cup
      let cupX = cupPositions[clickedCupIndex].x;
      let cupZ = cupPositions[clickedCupIndex].z;
      let targetPosition;

      if (cupX < 0) {
        cupX = cupX - 5;
      } else {
        cupX = cupX + 150;
      }

      if (cupZ < 0) {
        cupZ = cupZ - 90;
      } else {
        cupZ = cupZ + 150;
      }

      targetPosition = new THREE.Vector3(cupX, cupPositions[clickedCupIndex].y + 20, cupZ);

      camera.position.lerp(targetPosition, 0.05);
      camera.zoom = 5;
    }
  });

  return null;
}

export default function App() {
  const [clickedCupIndex, setClickedCupIndex] = useState(-1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };


  const resetCamera = () => {
    if (clickedCupIndex !== -1) {
      setClickedCupIndex(-1);
    }
  };


  return (
    <div className="App">
      <div className="canvas-container-app">
        <Canvas
          camera={{
            position: [600, 300, 600],
            fov: 60,
            near: 1,
            far: 100000,
            zoom: 2,
          }}
        >
          <color attach="background" args={['blue']} />
          <ambientLight intensity={0.9} />
          <directionalLight
            color="yellow"
            position={[0, 90, 5]}
          />

          <Hook
            clickedCupIndex={clickedCupIndex}
            resetCamera={resetCamera}
            initialCameraPosition={initialCameraPosition}
          />
          <ObjectModelings
            setClickedCupIndex={setClickedCupIndex}
            setDrawerOpen={setDrawerOpen} />

          <OrbitControls
            minPolarAngle={(Math.PI / 4)}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>

        <Drawer
          variant="persistent"
          anchor="right"
          open={drawerOpen}
        >
          <div className="drawer-contents">
            <button
              onClick={handleCloseDrawer}
              className="close-button">
            </button>

            <div style={{
              width: '150px',
              height: '200px',
              backgroundColor: 'red'
            }}></div>

            {clickedCupIndex !== -1 && clickedCupIndex < donatorArray.length ? (
              <>
                <p>Donator: {donatorArray[clickedCupIndex].name}</p>
                <p>Arrival Date: {donatorArray[clickedCupIndex].arrivaldate}</p>
              </>
            ) : (
              <p>No donator selected</p>
            )}
            <div style={{
              width: '450px',
              height: '350px',
              backgroundColor: 'red'
            }}></div>
          </div>
        </Drawer>
      </div>




    </div>
  );


}



export { App };