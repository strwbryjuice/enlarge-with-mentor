/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three-stdlib";

import Navbar from "./Navbar.jsx";

import "./App.css";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const ObjectModelings = () => {
  const obj = useLoader(OBJLoader, "/structure2.obj");
  const cup = useLoader(OBJLoader, "/koffie2.obj");

  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color('rgb(255, 204, 0)') });

  const setObjectMaterial = (parentObject) => {
    parentObject.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
  };

  // Set material to your objects
  setObjectMaterial(obj);
  setObjectMaterial(cup);

  obj.position.set(0, -90, 0);
  cup.position.set(0, -90, 0);

  return (
    <>
      <primitive object={obj} />
      <primitive object={cup} scale={0.3} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">

      <Navbar />

      <Canvas

        camera={{
          position: [900, 900, 4000],
          fov: 60,
          near: 1,
          far: 10000,
          zoom: 13,
        }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <color attach="background" args={['blue']} /> 
        <ambientLight intensity={0.9} />
        <directionalLight
          color="yellow"
          position={[0, 90, 5]}
        />

        <ObjectModelings />

        <OrbitControls
          minPolarAngle={(Math.PI / 4)}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export {App};