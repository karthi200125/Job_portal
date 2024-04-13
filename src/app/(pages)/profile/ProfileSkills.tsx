'use client'
import { AuthContext } from '@/Context/AuthContext'
import AddSkills from '@/components/AddSkills'
import Model from '@/components/Model/Model'
import { Button } from '@/components/ui/button'
import { Axiosrequest } from '@/lib/AxiosRequest'
import React, { useContext, useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'

const ProfileSkills = ({ user }: any) => {

    const { state, dispatch } = useContext(AuthContext)
    const [editSkillsOpen, setEditSkillsOpen] = useState(false);
    const [editskills, seteditSkills] = useState([]);
    const [skills, setSkills] = useState(user?.skills || []);
    const [isLoading, setisLoading] = useState(false);

    const HandleSubmit = async () => {
        try {
            setisLoading(true)
            const all = { ...user?.skills, ...editskills }
            const allskills = Object.values(all);
            const res = await Axiosrequest.put(`/users/${user?.id}`, { skills: allskills, test: "skills" })
            setSkills(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setisLoading(false)
        }
    }

    useEffect(() => {
        const getUserSkills = async () => {
            try {
                const res = await Axiosrequest.get(`/skills`)
                console.log(res.data)
                setSkills(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUserSkills()
    }, [user?.id])

    const EditSkills = (
        <div className='w-full h-full flex items-center justify-center flex-col gap-2'>
            <AddSkills onSkillsChange={(d: any) => seteditSkills(d)} cls='w-full' />
            <Button variant='custom_blue' className='w-full' onClick={HandleSubmit} >{isLoading ? "please Wait...." : 'Submit'}</Button>
        </div>
    )




    return (
        <div className='_border bg-white p-5'>
            <Model headTitle="Edit Skills" body={EditSkills} isOpen={editSkillsOpen} isClose={() => setEditSkillsOpen(false)} />
            <div className='flex flex-row items-center justify-between py-3'>
                <h1 className='text-lg font-bold'>Skills</h1>
                <div className='w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-neutral-100 flex items-center justify-center' onClick={() => setEditSkillsOpen(true)} >
                    <MdEdit className='text-[25px]' />
                </div>
            </div>
            <div className='flex flex-wrap flex-row gap-2'>
                {skills?.map((skill: any) => (
                    <div key={skill?.id} className='_border px-4 py-2 capitalize hover:bg-neutral-100 cursor-pointer' style={{ borderRadius: '30px' }}>
                        {skill?.skill_name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileSkills