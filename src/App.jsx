/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three-stdlib";

import "./App.css";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const obj = useLoader(OBJLoader, "/structure2.obj");
  const cup = useLoader(OBJLoader, "/koffie.obj");

  cup.position.set(0, 0, 0);
  return (
    <>
      <primitive object={obj} />
      <primitive object={cup} scale={0.5} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          position: [300, 300, 1500],
          fov: 60,
          near: 1,
          far: 10000,
          zoom: 1,
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
