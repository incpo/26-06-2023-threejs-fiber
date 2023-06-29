"use client"

import {useGLTF} from "@react-three/drei";
import {useRef} from "react";

export type MakarovComponents = {
    grip: boolean,
    bullet: boolean,
    trigger: boolean,
    magazine: boolean,
    scope: boolean,
    receiverFrame: boolean,
    suppressor: boolean,
    hammer: boolean
}

export interface MakarovProps extends MakarovComponents {
    magazineY?: number
}

const MakarovPm = ({
                       grip = true,
                       bullet = true,
                       trigger = true,
                       magazine = true,
                       scope = true,
                       receiverFrame = true,
                       suppressor = true,
                       hammer = true
                   }: MakarovProps) => {
    const modelRef = useRef(null)
    // @ts-ignore
    const {nodes, materials} = useGLTF('/makarov_pm.glb')
    return (
        <group ref={modelRef} dispose={null} rotation={[1.54, 0, 1.5]}
               scale={0.8}>
            {grip && <mesh geometry={nodes.Object_4.geometry} material={materials.makarov_material}/>}

            {bullet && <mesh geometry={nodes.Object_6.geometry} material={materials.makarov_material}
                             position={[0.015, 2.824, 0.673]}/>}
            {trigger && <mesh geometry={nodes.Object_8.geometry} material={materials.makarov_material}
                              position={[0.335, -1.911, -1.086]}/>}
            {magazine && <mesh geometry={nodes.Object_10.geometry} material={materials.makarov_material}
                               position={[0, -1.164, 0.664]}/>}
            {scope && <mesh geometry={nodes.Object_12.geometry} material={materials.makarov_attachments_material}/>}
            {receiverFrame && <mesh geometry={nodes.Object_14.geometry} material={materials.makarov_material}/>}
            {suppressor && <mesh geometry={nodes.Object_16.geometry} material={materials.makarov_attachments_material}
                                 position={[-0.003, 4.309, -1.464]}/>}
            {hammer && <mesh geometry={nodes.Object_18.geometry} material={materials.makarov_material}
                             position={[0.292, 0.238, -0.907]}/>}
        </group>
    )
};

export default MakarovPm;