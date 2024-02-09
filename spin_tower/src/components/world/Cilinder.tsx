import React from "react";



const Cilinder = () => {

    console.log('hey');
    const meshRef = React.useRef<THREE.Mesh>(null!);


    return (
        <mesh ref={meshRef}>
             <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshStandardMaterial attach="material" color="grey" />
        </mesh>
    )
}

export default Cilinder;