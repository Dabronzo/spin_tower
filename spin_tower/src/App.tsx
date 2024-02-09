import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="App">
      <div>Banana</div>
        <Canvas>
          
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
    </div>
  );
}

export default App;
