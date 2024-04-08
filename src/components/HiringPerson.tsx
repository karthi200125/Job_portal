import React from 'react'
import { Button } from './ui/button'
import { Tooltip } from '@/app/(pages)/premium/Tooltip'
import Img from './Img'

const HiringPerson = () => {
    return (
        <div className='w-full border-[1px] border-solid border-neutral-200 rounded-[10px] p-5 capitalize'>
            <h1 className='mb-3 font-bold text-md'>Meet the hiring team</h1>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-5'>
                    <Img src="" cls='w-[60px] h-[60px] rounded-full object-cover'/>
                    <div className='flex flex-col'>
                        <h2 className='text-sm font-bold'>karthkeyan</h2>
                        <h3 className='text-sm'>hr @ zoho corporation</h3>
                        <p className='text-[12px] text-neutral-400'>job poster</p>
                    </div>
                </div>
                <Tooltip text='message with hiring person' direction='top'>
                    <Button variant='custom_border' className='px-6'>Message</Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default HiringPerson