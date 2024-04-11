'use client'
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Axiosrequest } from '@/lib/AxiosRequest';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleRegister = async () => {
        try {
<<<<<<< HEAD
            if (!role) return toast('Select role');
            if (!inputs.username || !inputs.email || !inputs.password) return toast('All fields are mandatory');
            setIsLoading(true);
            const res = await Axiosrequest.post('/register', { ...inputs, role });
            toast(res?.data?.message);
            router.push('/')
=======
            setisLoading(true)
            const res = await axios.post('https://job-portal-7m9qmwfss-karthi200125.vercel.app/api/users', { ...inputs, role })
            toast(res.data)
>>>>>>> bb10ef2fe37540573bba3c0b1d5b752dc9b92b52
        } catch (err: any) {
            toast('Error registering user:');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className='container mx-auto flex flex-col gap-2 w-full h-full items-center justify-center bg-white'>
            <div className='w-full flex flex-row items-center justify-between h-[80px] border-b-[1px] border-solid border-neutral-200'>
                <Logo />
                <Button variant='custom_border'>Signin</Button>
            </div>
            <div className='flex flex-row gap-5 h-full w-[400px]'>
                <div className='flex-1 flex items-center justify-center flex-col gap-3'>
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
                    <Input title='Enter Your Username' cls='w-full' onChange={handleChange} name='username' value={inputs?.username} required />
                    <Input type='email' title='Enter Your Email Address' cls='w-full' onChange={handleChange} name='email' value={inputs?.email} required />
                    <Input type='password' title='Enter Your Password' cls='w-full' onChange={handleChange} name='password' value={inputs?.password} required />
                    <p className='text-sm w-full text-center'>By clicking Continue, you agree to LinkedIns User Agreement, Privacy Policy, and <span className='text-blue-300'>Cookie Policy</span>.</p>
                    <Button className='w-full p-6' variant='custom_blue' onClick={handleRegister}>{isLoading ? "Loading..." : "Join Now"}</Button>
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
    );
};

<<<<<<< HEAD
export default Register;
=======
export default Register
>>>>>>> bb10ef2fe37540573bba3c0b1d5b752dc9b92b52
