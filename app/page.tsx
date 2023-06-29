'use client';
import MakarovModel from '@/components/Molecules/Makarov.Model';
import { useState } from 'react';
import NavigationBar from '@/components/Organisms/NavigationBar';

export default function Home() {
	const [pistolComponents, setPistolComponents] = useState<{
    [key: string]: boolean;
  }>({
  	grip: true,
  	bullet: true,
  	trigger: true,
  	magazine: true,
  	scope: true,
  	receiverFrame: true,
  	suppressor: true,
  	hammer: true,
  });

	return (
		<main className="">
			<NavigationBar
				modelState={pistolComponents}
				setModelState={setPistolComponents}
			/>
			<div className="w-full h-screen">
				<MakarovModel
					grip={pistolComponents.grip}
					bullet={pistolComponents.bullet}
					trigger={pistolComponents.trigger}
					magazine={pistolComponents.magazine}
					scope={pistolComponents.scope}
					receiverFrame={pistolComponents.receiverFrame}
					suppressor={pistolComponents.suppressor}
					hammer={pistolComponents.hammer}
				/>
			</div>
			<div className="w-64 h-64 absolute bg-blue-500 rounded-b-full blur-[150px] left-1/3 top-1/3 opacity-40" />
			<div className="px-2 py-1 fixed right-4 bottom-4 text-sm font-light rounded-md bg-green-500/50 select-none">
				<span>Pre-Alpha</span>
			</div>
		</main>
	);
}
