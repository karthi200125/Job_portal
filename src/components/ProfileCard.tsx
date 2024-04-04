import React from 'react'
import { Button } from './ui/button'

const ProfileCard = () => {
    return (
        <div className='absolute top-[65px] w-[280px] rounded-xl p-2 bg-white h-[300px] right-0 border-[1px] border-solid border-neutral-200 shadow-lg'>
            <div className='flex flex-row gap-5 items-center '>
                <img src="" alt="" className='w-[60px] h-[60px] rounded-full object-cover' />
                <div className='mb-3'>
                    <h1 className='text-lg font-bold'>Karthkeyan</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, culpa?</p>
                </div>
            </div>
            <Button className='w-full' variant='custom_border'>View Profile</Button>
            <div className='flex flex-col gap-1 mt-3 border-t-[1px] border-solid border-neutral-200'>
                <h1 className='text-md font-bold mt-2'>Manage</h1>
                <div className='p-3 text-sm text-start hover:bg-neutral-100 rounded-[5px] cursor-pointer'>
                    Account
                </div>
                <div className='p-3 text-sm text-start  hover:bg-neutral-100 rounded-[5px] cursor-pointer'>
                    SignOut
                </div>
            </div>
        </div>
    )
}

export default ProfileCard