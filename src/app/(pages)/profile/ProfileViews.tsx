import React from 'react'
import { IoPeopleSharp } from 'react-icons/io5'

const ProfileViews = ({ user }: any) => {
    return (
        <div className="border-[1px] border-solid border-neutral-200 rounded-xl p-5 flex flex-col gap-2 bg-white">
            <h1 className="text-lg font-bold">Analytics</h1>
            <div className="flex flex-row gap-10">
                <div className="flex flex-row gap-5">
                    <IoPeopleSharp className="text-[25px]" />
                    <div>
                        <span className="font-bold text-sm">{user?.ProfileViews} peoples views</span>
                        <p className="text-sm">discover who views your profile</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <IoPeopleSharp className="text-[25px]" />
                    <div>
                        <span className="font-bold text-sm">{user?.appliedJobs?.length} Applied Jobs</span>
                        <p className="text-sm">discover job status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileViews