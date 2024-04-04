import React from 'react'
import JobCard from './JobCard'

interface LeftJobsProps {
    jobs?: any
}

const LeftJobs = ({ jobs }: LeftJobsProps) => {

    console.log(jobs)

    return (
        <div className='h-full w-full'>
            <div className='p-2 bg-black text-white'>
                <h1 className='font-bold text-md'>Top Job Picks For You</h1>
                <span className='text-sm'>100 jobs</span>
            </div>
            <div className='h-[90vh] overflow-y-scroll flex flex-col'>
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default LeftJobs