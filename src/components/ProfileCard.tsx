import React from 'react'
import { Button } from './ui/button'

const ProfileCard = () => {
    return (
        <div className='absolute top-[65px] w-[280px] rounded-xl p-2 bg-white h-[250px] right-0 border-[1px] border-solid border-neutral-200 shadow-lg'>
            <div className='flex flex-row gap-5 items-center '>
                <img src="" alt="" className='w-[60px] h-[60px] rounded-full object-cover' />
                <div>
                    <h1 className='text-lg font-bold'>Karthkeyan</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, culpa?</p>
                </div>
            </div>
            <Button>View Profile</Button>
            <div className='flex flex-col gap-1'>
                <h1 className='text-md font-bold'>Manage</h1>
                <div className='p-1 text-start text-neutral-400 rounded-[5px] cursor-pointer'>
                    Account
                </div>
                <div className='p-1 text-start text-neutral-400 rounded-[5px] cursor-pointer'>
                    SignOut
                </div>
            </div>
        </div>
    )
}

export default ProfileCard