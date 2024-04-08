import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Icon from './Icon';
import Img from './Img';

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
            <Icon icon={<IoMdClose className='text-[20px]' />} text='remove that job' dir='top' cls='' />
            <Img src="" cls='w-[100px] h-[100px] object-cover' />
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