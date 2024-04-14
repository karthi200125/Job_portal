'use client'
import { AuthContext } from '@/Context/AuthContext';
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Axiosrequest } from '@/lib/AxiosRequest';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'sonner';

const Login = () => {
    const { state, dispatch } = useContext(AuthContext);

    const router = useRouter()
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            if (!role) return toast('Select role');
            if (!inputs.email || !inputs.password) return toast('All fields are mandatory');
            setIsLoading(true);
            const res = await Axiosrequest.post('/login', { ...inputs, role });
            dispatch({ type: 'LOGIN', payload: res?.data });
            console.log(res.data)
            toast('login successful');
            router.push(`/profile/${res?.data?.user?.id}`)
        } catch (err: any) {
            toast("");
            console.log(err?.message)
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="container mx-auto flex flex-col gap-2 w-full h-screen bg-white">
            <div className="w-full flex flex-row items-center justify-between h-[80px] border-b-[1px] border-solid border-neutral-200">
                <Logo />
                <div className="flex flex-row gap-3">
                    <Button variant="custom_noborder">
                        <Link href="/register">Join Now</Link>
                    </Button>
                    <Button variant="custom_border">Sign In</Button>
                </div>
            </div>
            <div className="flex flex-row gap-5 h-full">
                <div className="flex-1 flex items-center justify-center flex-col gap-5">
                    <h1 className="w-[70%] text-start text-4xl">Welcome to your professional community</h1>
                    <div className="flex flex-row items-center justify-center gap-5 ">
                        <div className="flex flex-row items-center gap-2">
                            <input type="checkbox" onChange={() => setRole('jobseeker')} />
                            <label htmlFor="">Jobseeker</label>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <input type="checkbox" onChange={() => setRole('recruiter')} />
                            <label htmlFor="">Recruiter</label>
                        </div>
                    </div>
                    <Input type="email" title="Enter Your Email Address" cls="w-[70%]" name="email" value={inputs.email} onChange={handleChange} />
                    <Input type="password" title="Enter Your Password" cls="w-[70%]" name="password" value={inputs.password} onChange={handleChange} />
                    <Button className="w-[70%] p-6" variant="custom_blue" onClick={handleLogin}>
                        {isLoading ? 'Loading..' : 'Sign In'}
                    </Button>
                    <div className="my-3 w-[70%] h-[1px] bg-neutral-200 relative">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">or</span>
                    </div>
                    <Button variant="custom_border" className="w-[70%] p-6">
                        <Link href="/register">New Here ? Join Now</Link>
                    </Button>
                </div>
                <div className="flex-1">right</div>
            </div>
        </div>
    );
};

export default Login;
