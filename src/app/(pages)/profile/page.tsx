'use client'
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { MdEdit } from "react-icons/md";
import ProfileEducation from "./ProfileEducation";
import ProfileRight from "./ProfileRight";
import ProfileSkills from "./ProfileSkills";
import ProfileViews from "./ProfileViews";
import ProfileProjects from "./profileProjects";
import Model from "@/components/Model/Model";
import { useContext, useState } from "react";
import Input from "@/components/Input";
import { user } from '@/UserDate'
import Img from "@/components/Img";
import Icon from "@/components/Icon";
import batch from '../../../../public/batch.png'
import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/router";

const Profile = () => {

    const router = useRouter();    
    const { state, dispatch } = useContext(AuthContext)

    console.log(router.query)
    const Followed = true

    const [edituserOpen, setEdituserOpen] = useState(false);

    const profileuserBody = (
        <div className='w-full h-full flex flex-row items-center justify-between gap-5'>
            <div className='_border w-[250px] h-[200px]'>
                <input type="file" className='hidden' id='profileImage' />
                <label htmlFor="profileImage" className='text-mf font-bold w-full h-full flex items-center justify-center cursor-pointer'>
                    Select profile Image
                </label>
                {/* <img src="" alt="" className='w-full h-full object-cover rounded-xl' /> */}
            </div>
            <div className='w-[550px] flex flex-col gap-1'>
                <Input title='UserName' cls='w-full' />
                <Input title='user Porfile Name' cls='w-full' />
                <div className="flex flex-row items-center justify-between">
                    <Input title='City Name' cls='w-[30%]' />
                    <Input title='State Name' cls='w-[30%]' />
                    <Input title='Country Name' cls='w-[30%]' />
                </div>
                <Input title='profile social Link' cls='w-full' />
                <Button variant='custom_blue' className='w-full'>Edit user</Button>
            </div>
        </div>
    )

    const rec = true

    return (
        <div className="container mx-auto h-full flex flex-row gap-5 mt-[90px] w-full">
            <Navbar />
            <Model headTitle="Edit User Info" cls='w-[800px]' body={profileuserBody} isOpen={edituserOpen} isClose={() => setEdituserOpen(false)} />
            <div className="w-[70%] flex flex-col gap-3">
                <div className="border-[1px] border-solid border-neutral-200 bg-white rounded-xl pb-3">
                    <div className=" h-[250px] relative">
                        <Img src={user?.bannerPic} cls="w-full h-full absolute top-0 left-0" />
                        <div className="rounded-full w-[150px] h-[150px] absolute bottom-[-50px] left-10 p-1 bg-white">
                            <Img src={user?.profilePic} cls="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>
                    {/* user details */}
                    <div className="pt-[70px] flex flex-col gap-2 px-5 bg-white">
                        <div className='flex flex-row items-center justify-between py-3'>
                            <h1 className='text-4xl font-bold flex items-center gap-2'>
                                {user?.username}
                                <img src={batch.src} alt="" className="w-[30px] h-[30px] object-contain" />
                                <span className={`${rec ? "bg-yellow-300" : "bg-green-300"} px-2 text-[10px] leading-none py-1`} style={{ borderRadius: '5px' }}>{rec ? "Recruiter" : "JobSeeker"}</span>
                            </h1>
                            <Icon icon={<MdEdit className='text-[25px]' />} onClick={() => setEdituserOpen(true)} text="edit user info" dir="top" />
                        </div>
                        {/* <h1 className="text-2xl font-bold capitalize">Karthikeya</h1> */}
                        <h2 className="text-sm w-[50%] capitalize">{user?.jobRole}</h2>
                        <div className="text-sm tex-neutral-400 flex flex-row items-center gap-1 capitalize text-neutral-400">
                            <span>{user?.city}</span>,
                            <span>{user?.state}</span>,
                            <span>{user?.country}</span>.
                        </div>
                        <Link href={''} className="flex flex-row gap-2 items-center text-blue-500 font-bold">
                            <span>{user?.socialLink}</span>
                            <LiaExternalLinkAltSolid />
                        </Link>
                        <div className="flex flex-row gap-2">
                            <h5>{user?.followers?.length} followers</h5>
                            <h5>{user?.following?.length} following</h5>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button variant='custom_blue' className={`w-[100px]`}>{Followed ? "Following" : "Follow"}</Button>
                            <Button variant='custom_border' className={`w-[120px]`}>{'Message'}</Button>
                        </div>
                    </div>
                </div>

                <ProfileViews user={user} />
                <ProfileEducation user={user} />
                <ProfileSkills user={user} />
                <ProfileProjects user={user} />
            </div>

            <ProfileRight />
        </div>
    )
}

export default Profile