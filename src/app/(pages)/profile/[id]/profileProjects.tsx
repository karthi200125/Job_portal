'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { GoPlus } from "react-icons/go";
import Model from '@/components/Model/Model';
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';
import { Axiosrequest } from '@/lib/AxiosRequest';

const ProfileProjects = ({ user }: any) => {

    const [editProOpen, setEditProOpen] = useState(false);
    const [pro, setPro] = useState<any>([])
    const [edit, setEdit] = useState(false)
    const [editpro, setEditpro] = useState<any>({})
    const [isLoading, setisLoading] = useState(false);
    const [inputs, setInputs] = useState({
        proName: '',
        proImage: '',
        proDesc: '',
        proLink: ''
    });

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await Axiosrequest.get(`/pro/${user?.id}`);
                setPro(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProjects();
    }, [user?.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleEditProject = async (project: any) => {
        try {
            setEditProOpen(true);
            setEdit(true);
            setEditpro(project);
            setInputs({
                proName: project.proName,
                proImage: project.proImage,
                proDesc: project.proDesc,
                proLink: project.proLink
            });
            setisLoading(true);
            const res = await Axiosrequest.put(`/pro/${user?.id}`, inputs);
            setPro(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setisLoading(false);
        }
    };

    const handleCreateProject = async () => {
        try {
            setEditProOpen(true);
            setEdit(false);
            setInputs({
                proName: '',
                proImage: '',
                proDesc: '',
                proLink: ''
            });
            setisLoading(true);
            const res = await Axiosrequest.post(`/pro/${user?.id}`, inputs);
            setPro(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setisLoading(false);
        }
    };

    const projectBody = (
        <div className='w-full h-full flex flex-row items-center justify-between gap-5'>
            <div className='_border w-[250px] h-[200px] relative'>
                <input type="file" className='hidden' id='createProjectImage' />
                <label htmlFor="createProjectImage" className='text-mf font-bold w-full h-full flex items-center justify-center cursor-pointer absolute z-10'>
                    Select Image
                </label>
                {inputs?.proImage &&
                    <img src={inputs?.proImage} alt="" className='w-full h-full object-cover rounded-xl filter brightness-50' />
                }
            </div>
            <div className='w-full flex flex-col gap-1'>
                <Input title='Project Name' cls='w-full' onChange={handleChange} value={inputs.proName} name="proName" />
                <Input title='Project Description' cls='w-full' onChange={handleChange} value={inputs.proDesc} name="proDesc" />
                <Input title='Project Link' cls='w-full' onChange={handleChange} value={inputs.proLink} name="proLink" />
                <Button variant='custom_blue' className='w-full'>{edit ? "Edit Project" : "Create Project"}</Button>
            </div>
        </div>
    );

    return (
        <div className='_border bg-white p-5'>
            <Model headTitle="Add New Project" cls='w-[800px]' body={projectBody} isOpen={editProOpen} isClose={() => setEditProOpen(false)} />
            <div className='flex flex-row items-center justify-between py-3'>
                <h1 className='text-lg font-bold'>Projects</h1>
                <div className='flex flex-row gap-2 items-center'>
                    <Icon icon={<GoPlus className='text-[25px]' />} onClick={handleCreateProject} />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {pro?.map((project: any, index: number) => (
                    <Link href={project?.proLink} key={index} className='flex flex-row gap-10 items-start _borderb py-2 relative'>
                        <div className='absolute top-2 right-1 w-[40px] h-[40px] cursor-pointer rounded-full hover:bg-neutral-100 flex items-center justify-center'>
                            <MdEdit className='text-[20px]' onClick={() => handleEditProject(project)} />
                        </div>
                        <img src={project?.proImage} alt="" className='w-[100px] h-[100px] object-cover obeject-cover' />
                        <div className='capitalize'>
                            <h1 className='text-md font-bold'>{project?.proName}</h1>
                            <h3 className='text-[12px] text-[var(--light)]'>{project?.proDesc}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProfileProjects;
