import Icon from '@/components/Icon'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Notification = () => {

    const isRead = true

    return (
        <div className='w-full h-screen container mx-auto pt-[80px] flex flex-row items-start justify-between gap-5'>
            <Navbar />
            <div className='bg-white _border p-3 h-[120px] w-[20%] sticky top-[80px]'>
                <h1 className='font-bold text-lg'>Manage Your Notification</h1>
                <span className='text-blue-400 text-sm'>view Setting</span>
            </div>

            <div className=' bg-white _border p-3 w-[60%]'>
                <h1 className='w-full font-bold text-2xl my-3'>Your Notofication</h1>
                <div className='flex flex-col gap-1'>
                    {/* notiction item */}
                    <div className={`flex flex-row gap-5 p-3 _borderb cursor-pointer relative ${isRead ? "bg-transparent" : "bg-blue-50 hover:bg-blue-200"}`}>
                        <div className='absolute top-2 right-3 flex flex-col gap-1 items-center'>
                            <Icon icon={<IoCloseSharp size={20} />} />
                            <span>1d</span>
                        </div>
                        <div className='flex items-center justify-center flex-row gap-2 w-[150px]'>
                            {!isRead &&
                                <span className='w-[10px] h-[10px] rounded-full bg-blue-400'></span>
                            }
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[60px] h-[60px] object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-md font-bold capitalize'>testuser</h1>
                            <p className='text-sm text-[var(--light)] w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt ullam reprehenderit, sint repudiandae officiis possimus voluptatibus dolor tenetur natus!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* premoium card */}
            <div className="_border p-3 flex flex-col items-center justify-center gap-2 bg-white sticky top-[80px]">
                <img src="" alt="" className="w-[60px] h-[60px] rounded-full object-cover" />
                <span className="text-center tex-sm text-neutral-400">Enjoy 50% offer 1 months of premium</span>
                <Button variant='custom_border'>get 50% offer today</Button>
            </div>
        </div>
    )
}

export default Notification