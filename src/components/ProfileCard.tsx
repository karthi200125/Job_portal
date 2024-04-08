import Link from "next/link"
import Img from "./Img"

const ProfileCard = () => {
    return (
        <div className='absolute top-[65px] w-[280px] rounded-xl p-2 bg-white h-[300px] right-0 border-[1px] border-solid border-neutral-200 shadow-lg'>
            <div className='flex flex-row gap-5 items-center '>
                <Img src="" cls="w-[60px] h-[60px] rounded-full object-cover" />                
                <div className='mb-3'>
                    <h1 className='text-lg font-bold'>Karthkeyan</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, culpa?</p>
                </div>
            </div>
            <Link href={'/profile'} className='w-full _border rounded-full px-6 py-2' style={{ borderRadius: '30px' }} >View Profile</Link>
            <div className='flex flex-col gap-1 mt-3 border-t-[1px] border-solid border-neutral-200'>
                <h1 className='text-md font-bold mt-2'>Manage</h1>
                <div className='p-3 text-sm text-start hover:bg-neutral-100 rounded-[5px] cursor-pointer'>
                    Account
                </div>
                <div className='p-3 text-sm text-start  hover:bg-neutral-100 rounded-[5px] cursor-pointer'>
                    SignOut
                </div>
            </div>
        </div>
    )
}

export default ProfileCard