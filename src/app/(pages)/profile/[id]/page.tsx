'use client'
import { AuthContext } from "@/Context/AuthContext";
import Icon from "@/components/Icon";
import Img from "@/components/Img";
import Input from "@/components/Input";
import Model from "@/components/Model/Model";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Axiosrequest } from "@/lib/AxiosRequest";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { MdEdit } from "react-icons/md";
import batch from '../../../../../public/batch.png';
import ProfileEducation from "./ProfileEducation";
import ProfileRight from "./ProfileRight";
import ProfileSkills from "./ProfileSkills";
import ProfileViews from "./ProfileViews";
import ProfileProjects from "./profileProjects";

const Profile = ({ params }: any) => {
    const id = params.id    

    const { state, dispatch } = useContext(AuthContext)
    const [profileUser, setprofileUser] = useState<any>({})
    const currentuser = id === state?.user?.id ? state?.user : profileUser
    const [isLoading, setisLoading] = useState(false)
    const [inputs, setinputs] = useState({
        username: currentuser?.username || "",
        city: currentuser?.city || "",
        country: currentuser?.country || "",
        state: currentuser?.state || "",
        socialLink: currentuser?.socialLink || "",
        socialName: currentuser?.socialName || "",
        profilePic: currentuser?.profilePic || ""
    })

    const HandleChnage = (e: any) => {
        setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUserEdit = async () => {
        try {
            setisLoading(true)
            const res = await Axiosrequest.put(`/users/${id}`, inputs)
            dispatch({ type: 'LOGIN', payload: res?.data });
        } catch (err) {
            console.log(err)
        } finally {
            setisLoading(false)
        }
    }

    const Followed = true

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await Axiosrequest.get(`/users/${id}`)
                dispatch({ type: 'LOGIN', payload: res?.data });
                setprofileUser(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [id])

    const [edituserOpen, setEdituserOpen] = useState(false);

    const profileuserBody = (
        <div className='w-full h-full flex flex-row items-center justify-between gap-5'>
            <div className='_border w-[250px] h-[200px] relative'>
                <input type="file" className='hidden' id='profileImage' />
                <label htmlFor="profileImage" className='text-m text-neutral-500 font-bold w-full h-full flex items-center justify-center cursor-pointer absolute top-0 left-0 z-1' style={{ zIndex: "1" }}>
                    Select profile Image
                </label>
                {inputs?.profilePic &&
                    <img src={inputs?.profilePic} alt="" className='w-full h-full object-cover rounded-xl filter brightness-50' />
                }
            </div>
            <div className='w-[550px] flex flex-col gap-1'>
                <Input title='UserName' cls='w-full' onChange={HandleChnage} value={inputs.username} name="username" />
                <div className="flex flex-row items-center justify-between">
                    <Input title='City Name' cls='w-[30%]' onChange={HandleChnage} value={inputs.city} name="city" />
                    <Input title='State Name' cls='w-[30%]' onChange={HandleChnage} value={inputs.state} name="state" />
                    <Input title='Country Name' cls='w-[30%]' onChange={HandleChnage} value={inputs.country} name="country" />
                </div>
                <Input title='Social Link Name' cls='w-full' onChange={HandleChnage} value={inputs.socialName} name="socialName" />
                <Input title='profile social Link' cls='w-full' onChange={HandleChnage} value={inputs.socialLink} name="socialLink" />
                <Button variant='custom_blue' className='w-full' onClick={handleUserEdit} >
                    {isLoading ? "please wait..." : "Edit user"}
                </Button>
            </div>
        </div>
    )

    const rec = profileUser?.role

    return (
        <div className="container mx-auto h-full flex flex-row gap-5 mt-[90px] w-full">
            <Navbar />
            <Model headTitle="Edit User Info" cls='w-[800px]' body={profileuserBody} isOpen={edituserOpen} isClose={() => setEdituserOpen(false)} />
            <div className="w-[70%] flex flex-col gap-3">
                <div className="border-[1px] border-solid border-neutral-200 bg-white rounded-xl pb-3">
                    <div className=" h-[250px] relative">
                        <Img src={profileUser?.bannerPic} cls="w-full h-full absolute top-0 left-0" />
                        <div className="rounded-full w-[150px] h-[150px] absolute bottom-[-50px] left-10 p-1 bg-white">
                            <Img src={profileUser?.profilePic} cls="object-cover w-full h-full rounded-full" />
                        </div>
                    </div>
                    {/* user details */}
                    <div className="pt-[70px] flex flex-col gap-2 px-5 bg-white">
                        <div className='flex flex-row items-center justify-between py-3'>
                            <h1 className='text-4xl font-bold flex items-center gap-2 capitalize'>
                                {profileUser?.username}
                                <img src={batch.src} alt="" className="w-[30px] h-[30px] object-contain" />
                                <span className={`${rec ? "bg-yellow-300" : "bg-green-300"} px-2 text-[10px] leading-none py-1`} style={{ borderRadius: '5px' }}>{rec ? "Recruiter" : "JobSeeker"}</span>
                            </h1>
                            <Icon icon={<MdEdit className='text-[25px]' />} onClick={() => setEdituserOpen(true)} text="edit user info" dir="top" />
                        </div>
                        {/* <h1 className="text-2xl font-bold capitalize">Karthikeya</h1> */}
                        <h2 className="text-sm w-[50%] capitalize">{profileUser?.jobRole}</h2>
                        <div className="text-sm tex-neutral-400 flex flex-row items-center gap-1 capitalize text-neutral-400">
                            <span>{profileUser?.city}</span>,
                            <span>{profileUser?.state}</span>,
                            <span>{profileUser?.country}</span>.
                        </div>
                        <Link href={''} className="flex flex-row gap-2 items-center text-blue-500 font-bold">
                            <span>{profileUser?.socialName}</span>
                            <Link href={profileUser?.socialLink || ""}>
                                <LiaExternalLinkAltSolid />
                            </Link>
                        </Link>
                        <div className="flex flex-row gap-2">
                            <h5>{profileUser?.followers?.length > 0 || 0} followers</h5>
                            <h5>{profileUser?.following?.length > 0 || 0} following</h5>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button variant='custom_blue' className={`w-[100px]`}>{Followed ? "Following" : "Follow"}</Button>
                            <Button variant='custom_border' className={`w-[120px]`}>{'Message'}</Button>
                        </div>
                    </div>
                </div>

                <ProfileViews user={profileUser} />
                <ProfileEducation user={profileUser} />
                <ProfileSkills user={profileUser} />
                <ProfileProjects user={profileUser} />
            </div>

            <ProfileRight />
        </div>
    )
}

export default Profile