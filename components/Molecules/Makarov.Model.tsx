'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '@/components/Atoms/Loader';
import MakarovPm, { MakarovProps } from '@/components/Atoms/MakarovPm';

type MarakovModelProps = MakarovProps;

const MakarovModel = ({
	grip,
	bullet,
	trigger,
	magazine,
	scope,
	receiverFrame,
	suppressor,
	hammer,
	magazineY,
}: MarakovModelProps) => {
	function Controls() {
		return (
			<>
				<MakarovPm
					grip={grip}
					bullet={bullet}
					trigger={trigger}
					magazine={magazine}
					scope={scope}
					receiverFrame={receiverFrame}
					suppressor={suppressor}
					hammer={hammer}
					magazineY={magazineY}
				/>
				<OrbitControls />
				<Environment preset="sunset" background />
			</>
		//     <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>
		//     <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>
		//
		//     <color attach='background' args={[255, 255, 255]}/>
		//     <spotLight
		//         color={[1, 0.25, 0.7]}
		//         intensity={1.5} angle={0.6}
		//         penumbra={0.5}
		//         position={[5, 5, 0]}
		//         castShadow={true}
		//         shadow-bias={-0.0001}
		//     />
		//     <spotLight
		//         color={[0.14, 0.5, 1]}
		//         intensity={2} angle={0.6}
		//         penumbra={0.5}
		//         position={[-5, 5, 0]}
		//         castShadow={true}
		//         shadow-bias={-0.0001}
		//     />
		);
	}

	return (
		<Canvas shadows>
			<Suspense fallback={<Loader />}>
				<Controls />
			</Suspense>
		</Canvas>
	);
};

export default MakarovModel;
