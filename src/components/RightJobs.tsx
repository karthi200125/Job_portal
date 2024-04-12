'use client'
import React, { useState } from 'react'
import { FaSuitcase } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";
import { LuListChecks } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";
import HiringPerson from './HiringPerson';
import { Button } from './ui/button';
import { IoIosMore } from "react-icons/io";
import Link from 'next/link';
import Icon from './Icon';
import { Tooltip } from '@/app/(pages)/premium/Tooltip';
import Model from './Model/Model';
import Apply from './Apply';

interface RightobsProps {
    job?: any
}

const RightJobs = ({ job }: RightobsProps) => {

    const applyUrl = true
    const applied = false
    const saved = false

    const [ApplyOpen, setApplyOpen] = useState(false);

    const ApplyStatusbody = (
        <Apply onClose={() => setApplyOpen(false)} />
    )

    console.log(job?.companyEmpCount)

    return (
        <div className='h-full w-full overflow-y-auto capitalize p-5 relative'>
            <Model headTitle={`Apply to ${job?.companyName}`} cls='w-[800px]' body={ApplyStatusbody} isOpen={ApplyOpen} isClose={() => setApplyOpen(false)} />
            {!job ?
                <div className='w-full h-full flex items-start justify-center'>
                    <h1 className='font-bold text-2xl mt-10'>OOPS!</h1>
                </div>
                :
                <>
                    <div className='flex items-center justify-center hover:bg-neutral-100 cursor-pointer absolute right-5 top-5 rounded-full w-[40px] h-[40px]'>
                        <Icon icon={<IoIosMore size={30} />} text='More' dir='top' />
                    </div>
                    <h1 className='text-2xl font-bold'>{job?.jobTitle}</h1>
                    <div className='text-sm'>
                        <span className='font-semibold'>{job?.companyName}</span> ,
                        <span>{job?.jobCity}</span> ,
                        <span>{job?.jobState}</span> ,
                        <span>{job?.jobCountry}</span> ,
                        <span className='text-neutral-400'>10 days ago</span> ,
                    </div>

                    {/* icons */}
                    <div className="flex flex-row items-center gap-2 mt-6 text-sm">
                        <FaSuitcase className='mr-2' size={25} />
                        <span>{job?.jobMode}</span>.
                        <span>{job?.jobType}</span>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-3 text-sm'>
                        <RiFileListLine className='mr-2' size={25} />
                        <span>{job?.companyEmpCount} employees</span>
                        <span>Company ({job?.companyType})</span>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-3 text-sm'>
                        <LuListChecks className='mr-2' size={25} />
                        <span>3 out of 5 skills match your profile</span>
                        <span>You may good fit</span>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-3 text-sm'>
                        <IoPeopleSharp className='mr-2' size={25} />
                        <span>{job?.companyEmpCount} applicants</span>
                    </div>

                    {/* buttons */}
                    <div className='mt-5 mb-5 flex flex-row gap-5'>
                        {applyUrl ?
                            <Tooltip text='apply that job' direction='top'>
                                <Button asChild variant='custom_blue' className='px-6' onClick={() => setApplyOpen(true)}>
                                    <div >
                                        {applied ? "Applied" : "apply"}
                                    </div>
                                </Button>
                            </Tooltip>
                            :
                            <Tooltip text='apply that Job' direction='top'>
                                <Button variant='custom_blue' onClick={() => setApplyOpen(true)} className={`px-6 ${applied ? "bg-green-400 text-white cursor-not-allowed " : ""}`}>{applied ? "Applied" : "Easy Apply"}</Button>
                            </Tooltip>
                        }
                        <Tooltip text='save that job' direction='top'>
                            <Button variant='custom_border' className={`px-6 ${saved ? "bg-blue-500 text-white" : ""}`}>{saved ? "Saved" : "Save"}</Button>
                        </Tooltip>
                    </div>

                    {/* hiring person */}
                    <HiringPerson />

                    {/* job description */}
                    <div className='w-full p-2 mt-5 text-sm'>
                        <h1 className='text-lg font-bold mb-3'>About the job</h1>
                        {job?.jobDesc}
                    </div>
                </>
            }
        </div>
    )
}

export default RightJobs