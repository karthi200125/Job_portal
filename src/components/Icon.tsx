import { Tooltip } from '@/app/(pages)/premium/Tooltip'
import React from 'react'

interface IconProps {
    icon?: any,
    cls?: string,
    onClick?: () => void,
    text?: string,
    dir?: "top" | "bottom" | "left" | "right"
}

const Icon = ({ icon, cls, onClick, text, dir }: IconProps) => {
    return (
        <Tooltip text={text} direction={dir}>
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-100 ${cls}`} onClick={onClick}>
                <div className='text-[25px]'>{icon}
                </div>
            </div>
        </Tooltip>
    )
}

export default Icon