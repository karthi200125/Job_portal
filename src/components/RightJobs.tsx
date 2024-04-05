import React from 'react'
import { FaSuitcase } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";
import { LuListChecks } from "react-icons/lu";
import { IoPeopleSharp } from "react-icons/io5";
import HiringPerson from './HiringPerson';
import { Button } from './ui/button';
import { IoIosMore } from "react-icons/io";
import Link from 'next/link';
import Icon from './Icon';

interface RightobsProps {
    job?: any
}

const RightJobs = ({ job }: RightobsProps) => {

    const applyUrl = true
    const applied = false
    const saved = false

    return (
        <div className='h-full w-full overflow-y-auto capitalize p-5 relative'>
            {!job ?
                <div>
                    no Job                    
                </div>
                :
                <>
                    <div className='flex items-center justify-center hover:bg-neutral-100 cursor-pointer absolute right-5 top-5 rounded-full w-[40px] h-[40px]'>
                        <Icon icon={<IoIosMore size={30} />} />
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
                        <span>100 applicants</span>
                    </div>

                    {/* buttons */}
                    <div className='mt-5 mb-5 flex flex-row gap-5'>
                        {applyUrl ?
                            <Button asChild variant='custom_blue' className='px-6'>
                                <div >
                                    {applied ? "Applied" : "apply"}
                                </div>
                            </Button>
                            :
                            <Button variant='custom_blue' className={`px-6 ${applied ? "bg-green-400 text-white cursor-not-allowed " : ""}`}>{applied ? "Applied" : "Easy Apply"}</Button>
                        }
                        <Button variant='custom_border' className={`px-6 ${saved ? "bg-blue-500 text-white" : ""}`}>{saved ? "Saved" : "Save"}</Button>
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