'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { GoPlus } from "react-icons/go";
import Model from '@/components/Model/Model';
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

const ProfileProjects = ({ user }: any) => {

    const projects = [
        { id: 1, proTitle: 'one', proDesc: 'descrioption', proimage: '', proLink: '' },
        { id: 2, proTitle: 'one', proDesc: 'descrioption', proimage: '', proLink: '' },
        { id: 3, proTitle: 'one', proDesc: 'descrioption', proimage: '', proLink: '' },
    ]

    const [editProOpen, setEditProOpen] = useState(false);

    const ProBody = (
        <div className='w-full h-full flex flex-row items-center justify-between gap-5'>
            <div className='_border w-[250px] h-[200px]'>
                <input type="file" className='hidden' id='createPrjectImage' />
                <label htmlFor="createPrjectImage" className='text-mf font-bold w-full h-full flex items-center justify-center cursor-pointer'>
                    Select Image
                </label>
                {/* <img src="" alt="" className='w-full h-full object-cover rounded-xl' /> */}
            </div>
            <div className='w-full flex flex-col gap-1'>
                <Input title='Project Name' cls='w-full' />
                <Input title='Project Description' cls='w-full' />
                <Input title='Project Link' cls='w-full' />
                <Button variant='custom_blue' className='w-full'>Create Project</Button>
            </div>
        </div>
    )

    return (
        <div className='_border bg-white p-5'>
            <Model headTitle="Add New Project" cls='w-[800px]' body={ProBody} isOpen={editProOpen} isClose={() => setEditProOpen(false)} />
            <div className='flex flex-row items-center justify-between py-3'>
                <h1 className='text-lg font-bold'>Projects</h1>
                <div className='flex flex-row gap-2 items-center'>
                    <Icon icon={<GoPlus className='text-[25px]' />} onClick={() => setEditProOpen(true)} />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {user?.projects?.map((pro: any, index: number) => (
                    <Link href={pro?.proLink} key={index} className='flex flex-row gap-10 items-start _borderb py-2 relative'>
                        <div className='absolute top-2 right-1 w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-neutral-100 flex items-center justify-center'>
                            <MdEdit className='text-[20px]' />
                        </div>
                        <img src={pro?.proImage} alt="" className='w-[100px] h-[100px] object-cover obeject-cover' />
                        <div className='capitalize'>
                            <h1 className='text-md font-bold'>{pro?.proName}</h1>
                            <h3 className='text-[12px] text-[var(--light)]'>{pro?.proDesc}</h3>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProfileProjects