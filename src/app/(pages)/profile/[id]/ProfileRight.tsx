import Img from '@/components/Img'
import { Button } from '@/components/ui/button'
import React from 'react'
import batch from '../../../../../public/batch.png';

const ProfileRight = () => {
    return (
        <div className="w-[30%] rounded-xl overflow-hidden p-2 flex flex-col gap-3">

            {/* premoium card */}
            <div className="border-[1px] border-solid border-neutral-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 bg-white">
                <Img src="" cls='w-[60px] h-[60px] rounded-full object-cover' />
                <span className="text-center tex-sm text-neutral-400">Enjoy 50% offer 1 months of premium</span>
                <Button variant='custom_border'>get 50% offer today</Button>
            </div>

            {/* you folloers usesr */}
            <div className="flex flex-col gap-1 border-[1px] border-solid border-neutral-200 rounded-xl p-3 bg-white">
                <h1 className="font-bold">Your followers</h1>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-3 border-b-[1px] border-solid border-neutral-200 py-4">
                        <div className="w-[50px] h-[50px] relative">
                            <Img src="" cls='w-full h-full object-cover rounded-full' />
                            <img src={batch.src} alt="" className="w-[20px] h-[20px] object-contain absolute bottom-[-5px] right-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold">karthkeyan</span>
                            <p className="text-sm">ract s | redux | html</p>
                            <Button variant='custom_border'>View proile</Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* you may nknow usesr */}
            <div className="flex flex-col gap-2 border-[1px] border-solid border-neutral-200 rounded-xl p-3 bg-white">
                <h1 className="font-bold">You may know</h1>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-3 border-b-[1px] border-solid border-neutral-200 py-4">
                        <div className="w-[50px] h-[50px] relative">
                            <Img src="" cls='w-full h-full object-cover rounded-full' />
                            <img src={batch.src} alt="" className="w-[20px] h-[20px] object-contain absolute bottom-[-5px] right-0" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold">karthkeyan</span>
                            <p className="text-sm">ract s | redux | html</p>
                            <Button variant='custom_border'>View proile</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileRight