import Input from '@/components/Input'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='container mx-auto flex flex-col gap-2 w-full h-screen'>
            <div className='w-full flex flex-row items-center justify-between h-[80px] border-b-[1px] border-solid border-neutral-200'>
                <Logo />
                <div className='flex flex-row gap-3'>
                    <Button variant='custom_noborder'>
                        <Link href='/register'>
                            join Now
                        </Link>
                    </Button>
                    <Button variant='custom_border'>Signin</Button>
                </div>
            </div>
            <div className='flex flex-row gap-5 h-full'>
                <div className='flex-1 flex items-center justify-center flex-col gap-5'>
                    <h1 className='w-[70%] text-start text-4xl'>Welcome to your professional community</h1>
                    <Input type='email' title='Enter Your Email Address' cls='w-[70%]' />
                    <Input type='password' title='Enter Your Password' cls='w-[70%]' />
                    <p className='text-sm text-start w-[70%]'>By clicking Continue, you agree to LinkedIns User Agreement, Privacy Policy, and <span className='text-blue-300'>Cookie Policy</span>.</p>
                    <Button className='w-[70%] p-6' variant='custom_blue'>Signin</Button>
                    <div className='my-3 w-[70%] h-[1px] bg-neutral-200 relative'>
                        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4'>or</span>
                    </div>
                    <Button variant='custom_border' className='w-[70%] p-6'>
                        <Link href='/register'>
                            New Here ? Join Now
                        </Link>
                    </Button>
                </div>
                <div className='flex-1'>right</div>
            </div>
        </div>
    )
}

export default Login