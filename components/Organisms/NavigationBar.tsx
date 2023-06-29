import Logo from '@/components/Atoms/Logo';
import {useRouter} from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';
import * as Menubar from '@radix-ui/react-menubar';
import Link from 'next/link';
import React, {SetStateAction, useState} from 'react';
import ComponentSwitch from '../Molecules/Component.Switch';

interface NavigationBarProps {
    modelState: {
        [key: string]: boolean
    },
    setModelState: React.Dispatch<SetStateAction<any>>
}

const NavigationBar = ({modelState, setModelState}: NavigationBarProps) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	return (
		<div className={`fixed left-1/2 -translate-x-1/2 max-w-[900px] w-full h-12
        top-2 sm:top-5 rounded-t-lg bg-[#48484A]/50 z-20 flex justify-between rounded-bl-lg items-center px-2 sm:px-6 easy-in duration-150 ${!open ? 'rounded-br-lg' : ''}`}>
			<ul className="flex space-x-10 items-center w-[45%]">
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/'>Models</Link></li>
				<li><Link href='/'>Tools</Link></li>
			</ul>
			<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} initial={{scale: 1}}
				onClick={() => void router.push('/')}
				className='rounded-lg bg-white/10 flex items-center h-[40px] w-[40px] justify-center cursor-pointer'>
				<Logo/></motion.div>
			<ul className='w-[45%] flex justify-center space-x-10'>
				<Menubar.Root className='flex' onValueChange={() => void setOpen(!open)}>
					<Menubar.Menu>
						<Menubar.Trigger
							className="inline-flex relative items-center">
                            Components
							<div
								className={`-right-2.5 bg-green-500 absolute rounded-full easy-in duration-300 ${open ? 'h-1 w-1' : 'h-2 w-0.5'}`}/>
						</Menubar.Trigger>
						<AnimatePresence>
							{open && (
								<Menubar.Portal forceMount>
									<Menubar.Content
										className="min-w-[303.5px] bg-gradient-to-b from-[#48484A]/50 to-[#48484A] mt-[0.75rem] overflow-hidden rounded-b-md p-[5px] "
										asChild
									>
										<motion.div initial={{opacity: 0}} animate={{opacity: 1}}
											exit={{opacity: 0}}>
											{
												Object.keys(modelState).map(function (key, i) {
													return (
														<ComponentSwitch isShow={modelState[key]} name={key}
															onCheckedChange={() => setModelState({
																...modelState,
																[key]: !modelState[key]
															})} key={i}/>
													);
												})
											}
										</motion.div>
									</Menubar.Content>
								</Menubar.Portal>
							)}
						</AnimatePresence>
					</Menubar.Menu>
				</Menubar.Root>
				<li>
                    Stickers
				</li>

			</ul>
		</div>
	);
};

export default NavigationBar;
