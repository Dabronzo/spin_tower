import React, { useRef } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber'


const Box = (props: ThreeElements['mesh']) => {


    const ref = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => (ref.current.rotation.x += delta));

    return (
        <mesh
          {...props}
          ref={ref}
          scale={1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      )
}

export default Box;