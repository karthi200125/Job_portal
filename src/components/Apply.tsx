'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';
import Input from './Input';

const Apply = ({ onClose }: any) => {

    const [cpage, setcpage] = useState(1);

    const handleSubmit = () => {
        onClose(false)        
    }

    const per = (cpage - 1) * 100 / 2;

    return (
        <div className='w-full h-full flex flex-col gap-4'>
            <div className='relative h-[10px] bg-[var(--light)]'>
                <div className='absolute rounded-full top-0 left-0 h-[10px] bg-red-400' style={{ width: `${per}%` }}></div>
                <span className='h-full absolute top-[-3px] right-0 bg-white flex items-center justify-center text-sm p-2'>{per}%</span>
            </div>

            {/* contents */}
            <div className='w-full h-full flex flex-col gap-1'>
                {/* 1st info */}
                {cpage === 1 && (
                    <div className='_borderb py-4'>
                        <h1 className='font-bold text-xl'>name of user</h1>
                        <p className='text-md'>descript or skills</p>
                        <div className='flex flex-row gap-1 items-center mt-2'>
                            <span className='text-sm text-[var(--light)]'>city</span>,
                            <span className='text-sm text-[var(--light)]'>city</span>,
                            <span className='text-sm text-[var(--light)]'>city</span>.
                        </div>
                        <div>
                            <Input title='email address' cls='w-full mt-3' />
                            <Input title='phone number' cls='w-full mt-3' />
                        </div>
                    </div>
                )}

                {/* 2nd info */}
                {cpage === 2 && (
                    <div>
                        <h1 className='font-bold'>resume</h1>
                        <p>be sure include resume*</p>
                        <input type="file" name="" id="resumeuplaod" className='hidden' />
                        <label htmlFor="resumeuplaod" className='flex items-center justify-center _border h-[100px] cursor-pointer'>Uplaod File</label>
                    </div>
                )}

                {/* 3rd info */}
                {cpage === 3 && (
                    <div>
                        <h1 className='font-bold pb-2'>Additional question</h1>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='text-sm text-neutral-500'>Have you completed the following level of education: Bachelor's Degree?Have you completed the following level of education: Bachelor's Degree? </label>
                            <select name="" id="" className='_border p-2'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='text-sm text-neutral-500'>Are you comfortable commuting to this job's location?Are you comfortable commuting to this job's location? </label>
                            <select name="" id="" className='_border p-2'>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                    </div>
                )}

            </div>

            {/* buttons */}
            <div className='flex flex-row items-center justify-end gap-2'>
                {cpage !== 1 && (
                    <Button variant='custom_border' onClick={() => setcpage(prev => prev - 1)}>Back</Button>
                )}
                {cpage !== 3 ? (
                    <Button variant='custom_blue' onClick={() => setcpage(prev => prev + 1)}>Next</Button>
                ) : (
                    <Button variant='custom_blue' onClick={handleSubmit}>Submit</Button>
                )}
            </div>

        </div>
    );
}

export default Apply;
