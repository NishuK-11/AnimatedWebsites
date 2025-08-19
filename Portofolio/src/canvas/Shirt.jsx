import React from 'react';
import { useSnapshot } from 'valtio';
import { useGLTF, useTexture } from '@react-three/drei';
import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/jacket_pants_and_shirt.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        materialRoughness={1}
        dispose={null}
      />
    </group>
  );
};

export default Shirt;

