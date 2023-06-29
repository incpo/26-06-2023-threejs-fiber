import * as Switch from '@radix-ui/react-switch';

export const ComponentSwitch = ({name ,isShow, onCheckedChange}: { name: string, isShow: boolean, onCheckedChange: () => void }) => {
    return (
        <div className='flex justify-between p-2 w-full items-center'>
            <label className='text-white select-none' htmlFor={name}>{name}</label>
            <Switch.Root id={name}
                        onCheckedChange={onCheckedChange}
                        defaultChecked={isShow} 
                         className='group w-24 h-8 bg-[#767680]/20 rounded-lg border-2 border-transparent relative transition-all'>
                <Switch.Thumb
                    className='w-10 h-7 bg-white rounded-lg block group-data-[state=checked]:ml-[3.25rem] transition-all duration-300'>
                </Switch.Thumb>
                <div
                    className='absolute right-2.5 group-data-[state=checked]:text-black transition-all duration-300 h-full top-0 flex items-center text-sm'>On
                </div>
                <div
                    className='absolute left-2 text-black group-data-[state=checked]:text-white transition-all duration-300 h-full top-0 flex items-center text-sm'>Off
                </div>
            </Switch.Root>
        </div>
    )
}
export default ComponentSwitch