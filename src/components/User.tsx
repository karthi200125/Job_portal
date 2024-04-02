'use client'
import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import ProfileCard from './ProfileCard';

const User = () => {

    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <div className='m-2 flex items-center justify-center flex-col relative cursor-pointer z-10'>
            <img src="" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
            <div className='flex flex-row gap-1 items-center' >
                <span className='text-[10px]'>Me</span>
                <FaCaretDown size={15} onClick={() => setProfileOpen(!profileOpen)} />
            </div>
            {
                profileOpen &&
                <ProfileCard />
            }
        </div>
    )
}

export default User