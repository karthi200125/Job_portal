'use client'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const Register = () => {

    const [inputs, setInputs] = useState({
        username: '',
        email: "",
        password: '',
    })

    const [role, setRole] = useState('')

    const handleRegister = async () => {
        try {
            console.log({ ...inputs, role })
            // const res = await axios.post('http://localhost:3000/api/register', { ...inputs, role })
            // console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const HandleChange = (e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className='container mx-auto flex flex-col gap-2 w-full h-full items-center justify-center bg-white'>
            <div className='w-full flex flex-row items-center justify-between h-[80px] border-b-[1px] border-solid border-neutral-200'>
                <Logo />
                <Button variant='custom_border'>Signin</Button>
            </div>
            <div className='flex flex-row gap-5 h-full w-[400px]'>
                <div className='flex-1 flex items-center justify-center flex-col gap-3'>
                    {/* <h1 className='text-4xl text-center'>Make the most of your professional life</h1> */}
                    <label className='text-2xl text-center'>Register as Recruiter/JobSeeker</label>
                    <div className='flex flex-row items-center justify-center gap-5 '>
                        <div className='flex flex-row items-center gap-2'>
                            <input type="checkbox" onChange={() => setRole("jobseeker")} />
                            <label htmlFor="">Jobseeker</label>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <input type="checkbox" onChange={() => setRole("recruiter")} />
                            <label htmlFor="">Recruiter</label>
                        </div>
                    </div>
                    <Input title='Enter Your Username' cls='w-full' onChange={HandleChange} name='username' value={inputs?.username} required />
                    <Input type='email' title='Enter Your Email Address' cls='w-full' onChange={HandleChange} name='email' value={inputs?.email} required />
                    <Input type='password' title='Enter Your Password' cls='w-full' onChange={HandleChange} name='password' value={inputs?.password} required />
                    <p className='text-sm w-full text-center'>By clicking Continue, you agree to LinkedIns User Agreement, Privacy Policy, and <span className='text-blue-300'>Cookie Policy</span>.</p>
                    <Button className='w-full p-6' variant='custom_blue' onClick={handleRegister}>Join Now</Button>
                    <div className='my-3 w-full h-[1px] bg-neutral-200 relative'>
                        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4'>or</span>
                    </div>
                    <Button asChild variant='custom_border' className='w-full p-6'>
                        <Link href='/login'>
                            Already have one? Login Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register