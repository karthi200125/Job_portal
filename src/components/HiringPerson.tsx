import React from 'react'
import { Button } from './ui/button'

const HiringPerson = () => {
    return (
        <div className='w-full border-[1px] border-solid border-neutral-200 rounded-[10px] p-5 capitalize'>
            <h1 className='mb-3 font-bold text-md'>meet the hiring team</h1>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-5'>
                    <img src="" alt="" className='w-[60px] h-[60px] rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <h2 className='text-sm font-bold'>karthkeyan</h2>
                        <h3 className='text-sm'>hr @ zoho corporation</h3>
                        <p className='text-[12px] text-neutral-400'>job poster</p>
                    </div>
                </div>
                <Button>Message</Button>                
            </div>
        </div>
    )
}

export default HiringPerson