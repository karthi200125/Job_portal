'use client'
import AddSkills from '@/components/AddSkills'
import Model from '@/components/Model/Model'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'

const ProfileSkills = () => {

    const skills = [
        'one', 'two', 'threew', 'one', 'two', 'threew'
    ]

    const [editSkillsOpen, setEditSkillsOpen] = useState(false);
    const [editskills, seteditSkills] = useState([]);

    console.log(editskills)

    const EditSkills = (
        <div className='w-full h-full flex items-center justify-center flex-col gap-2'>
            <AddSkills onSkillsChange={(d: any) => seteditSkills(d)} cls='w-full'/>
            <Button variant='custom_blue' className='w-full'>Submit</Button>
        </div>
    )



    return (
        <div className='_border bg-white p-5'>
            <Model headTitle="Edit Skills" body={EditSkills} isOpen={editSkillsOpen} isClose={() => setEditSkillsOpen(false)} />
            <div className='flex flex-row items-center justify-between py-3'>
                <h1 className='text-lg font-bold'>Skills</h1>
                <div className='w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-neutral-100 flex items-center justify-center'>
                    <MdEdit className='text-[25px]' onClick={() => setEditSkillsOpen(true)} />
                </div>
            </div>
            <div className='flex flex-wrap flex-row gap-2'>
                {skills?.map((skill, index) => (
                    <div key={index} className='_border px-4 py-2 capitalize hover:bg-neutral-100 cursor-pointer' style={{ borderRadius: '30px' }}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileSkills