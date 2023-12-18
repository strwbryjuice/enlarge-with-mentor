/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DDSLoader } from "three-stdlib";


import "./App.css";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());


const ObjectModelings = () => {
  const obj = useLoader(OBJLoader, "/structure2.obj");

  const cupArray = [
    useLoader(OBJLoader, "/koffie2.obj"),
    useLoader(OBJLoader, "/koffie2.obj")
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

  for (let i = 0; i < cupArray.length; i++) {
    setObjectMaterial(cupArray[i]);
  }
  obj.position.set(0, -90, 0);


  const cupPositions = [
    {
      x: 80,
      y: 160,
      z: 180
    },

    {
      x: 80,
      y: 60,
      z: 80
    }
  ];

  for (let i = 0; i < cupArray.length; i++) {
    cupArray[i].position.set(cupPositions[i].x, cupPositions[i].y, cupPositions[i].z);
  }


  return (
    <>
      <primitive object={obj} />

      {cupArray.map((cup,index) => {
        return <primitive key={index} object={cup} scale={0.3} />;
      })}

    </>
  );
};

function Hook() {
  useThree(({ camera }) => {
    camera.rotation.set(THREE.MathUtils.degToRad(0), 0, 0);
    console.log(camera.position);
  });

  // const [zoom, setOpen] = useState(false);

  // function ZoominHandel() {

  // }

  return (<></>)
}


export default function App() {

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

        <Hook />

        <ObjectModelings />

        <OrbitControls
          minPolarAngle={(Math.PI / 4)}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );


}



export { App };