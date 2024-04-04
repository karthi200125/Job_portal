'use client'
import Input from '@/components/Input';
import Model from '@/components/Model/Model';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';

const ProfileEducation = () => {
    const [editModelOpen, setEditModelOpen] = useState(false);

    const EditEducationBody = (
        <div className='w-full h-full flex flex-col gap-1 items-center justify-center'>
            <Input cls='w-full' title='Organization Name' />
            <Input cls='w-full' title='Department' />
            <div className='flex flex-row items-center justify-between'>
                <Input cls='w-1/2' type='date' title='startting date' />
                <Input cls='w-1/2' type='date' title='Ending date ' />
            </div>
            <Button variant='custom_blue' className='w-full'>Submit</Button>
        </div>
    );

    return (
        <div className='_border bg-white p-5'>
            <Model headTitle="Edit Education" body={EditEducationBody} isOpen={editModelOpen} isClose={() => setEditModelOpen(false)} />
            <div className='flex flex-row items-center justify-between py-3'>
                <h1 className='text-lg font-bold'>Education</h1>
                <div className='w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-neutral-100 flex items-center justify-center'>
                    <MdEdit className='text-[25px]' onClick={() => setEditModelOpen(true)} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2 items-start'>
                    <img src="" alt="" className='w-[80px] h-[80px] object-cover ' />
                    <div className='flex flex-col gap-1 capitalize'>
                        <h2 className='text-md font-semibold'>avs college of technology</h2>
                        <h3 className='text-sm'>degree in department</h3>
                        <p className='text-sm text-[var(--light)]'>aug 2018 - aug-2000</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-start'>
                    <img src="" alt="" className='w-[80px] h-[80px] object-cover ' />
                    <div className='flex flex-col gap-1 capitalize'>
                        <h2 className='text-md font-semibold'>avs college of technology</h2>
                        <h3 className='text-sm'>degree in department</h3>
                        <p className='text-sm text-[var(--light)]'>aug 2018 - aug-2000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEducation