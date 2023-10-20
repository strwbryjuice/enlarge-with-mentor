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

const Scene = () => {
  const obj = useLoader(OBJLoader, "/structure2.obj");
  const cup = useLoader(OBJLoader, "/koffie2.obj");

  cup.position.set(0, 0, 0);
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
          position: [900, 900, 2000],
          fov: 60,
          near: 1,
          far: 10000,
          zoom: 5,
        }}
        style={{ height: "100vh", width: "100vw" }}
      >
        

        <Scene />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
