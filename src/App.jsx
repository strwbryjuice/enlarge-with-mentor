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

const initialCameraPosition = [600, 300, 600];
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const cupPositions = [
  { x: 60, y: 60, z: 80 },
  { x: 60, y: 20, z: -90 }
];


const ObjectModelings = ({ setClickedCupIndex }) => {
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

function Hook({ clickedCupIndex, cupPosition, initialCameraPosition }) {
  const { camera } = useThree();

  useFrame(() => {
    if (clickedCupIndex !== -1) {
      // When a cup is clicked, move the camera towards the cup
      const targetPosition = new THREE.Vector3(cupPosition.x, cupPosition.y, cupPosition.z + 200);
      camera.position.lerp(targetPosition, 0.05);
    }
  });

  return null;
}

export default function App() {
  const [clickedCupIndex, setClickedCupIndex] = useState(-1);
  const [cupPosition, setCupPosition] = useState({ x: 600, y: 300, z: 600 });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onCupClick = (index) => {
    setClickedCupIndex(index);
    setDrawerOpen(true);
  };

  const resetCamera = () => {
    if (clickedCupIndex !== -1) {
      setClickedCupIndex(-1);
    }
  };


  return (
    <div className="App">
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
          cupPosition={cupPosition}
          resetCamera={resetCamera}
          initialCameraPosition={initialCameraPosition}
        />
        <ObjectModelings
          setClickedCupIndex={setClickedCupIndex}
          setCupPosition={setCupPosition} />

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
        <div style={{ width: 250, padding: '16px' }}>
          <p>Donator: MinSook Kim</p>
          <p>Arrival Date: 2023/04/11</p>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'yellow'
          }}></div>
        </div>
      </Drawer>

    </div>
  );


}



export { App };