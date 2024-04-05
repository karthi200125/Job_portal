import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

interface JobCartProps {
    job?: any,
    onJob?: any,
}

const JobCard = ({ job, onJob }: JobCartProps) => {

    const [active, setActive] = useState(false)

    const SelectJob = () => {
        onJob(job?.id)        
    }

    return (
        <div className={`p-2 relative flex flex-row gap-3 capitalize group cursor-pointer overflow-hidden border-b-[1px] border-solid border-neutral-300 hover:bg-neutral-100 ${active && "bg-neutral-100"}`} onClick={SelectJob}>
            <div className='w-[30px] h-[30px] rounded-full hover:bg-neutral-100 cursor-pointer flex items-center justify-center absolute right-2 top-2 transition duration-300'>
                <IoMdClose className='text-[20px]' />
            </div>
            <img src="https://media.licdn.com/dms/image/C560BAQGMXbVOsYXBRA/company-logo_100_100/0/1630660537235/mitsogo_inc_logo?e=1720051200&v=beta&t=MINTur9CVJ0rjYrFhAemMHtg3cAgO5XpkOOnHYS1b7U" alt="company logo" className='w-[100px] h-[100px] object-cover' />
            <div className='flex flex-col'>
                <h1 className='font-bold group-hover:underline flex flex-row gap-2 items-center'>
                    {job?.jobTitle}
                    <h2 className='text-sm font-medium'>({job?.jobExp})</h2>
                </h1>
                <h3 className='text-sm'>{job?.companyName}</h3>
                <div className='text-neutral-500 flex flex-row gap-1 text-sm'>
                    <span>{job?.jobCity}</span>,
                    <span>{job?.jobState}</span>,
                    <span>{job?.jobCountry}</span>,
                    <span>({job?.jobMode})</span>
                </div>
                <p className='text-neutral-500 text-sm'>10 days ago</p>
            </div>
        </div>
    )
}

export default JobCard