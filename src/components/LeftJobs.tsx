import React from 'react'
import JobCard from './JobCard'

interface LeftJobsProps {
    jobs?: any,
    onJob?: any
}

const LeftJobs = ({ jobs, onJob }: LeftJobsProps) => {

    const isLoading = false

    return (
        <div className='h-full w-full'>
            <div className='p-2 bg-black text-white'>
                <h1 className='font-bold text-md'>Top Job Picks For You</h1>
                <span className='text-sm'>{jobs?.length} jobs</span>
            </div>
            <div className='h-[90vh] overflow-y-scroll flex flex-col'>
                {isLoading ?
                    <div className='flex flex-col gap-1'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <div
                                key={index}
                                className='w-full flex flex-row gap-5 p-2'
                            >
                                <div className='w-[100px] h-[100px] skeleton'></div>
                                <div className='w-full flex flex-col gap-2'>
                                    <div className='w-[70%] h-[15px] skeleton rounded-sm'></div>
                                    <div className='w-[40%] h-[15px] skeleton rounded-sm'></div>
                                    <div className='w-[60%] h-[15px] skeleton rounded-sm'></div>
                                    <div className='w-[30%] h-[15px] skeleton rounded-sm'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    jobs?.length > 0 ?
                        jobs?.map((job: any) => (
                            <JobCard key={job?.id} job={job} onJob={onJob} />
                        ))
                        :
                        <div>
                            no result
                        </div>
                }
            </div>
        </div>
    )
}

export default LeftJobs