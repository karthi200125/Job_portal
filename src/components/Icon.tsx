import React from 'react'

interface IconProps {
    icon?: any,
    cls?: string,
    onClick?: () => void
}

const Icon = ({ icon, cls, onClick }: IconProps) => {
    return (
        <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-100 ${cls}`} onClick={onClick}>
            <div className='text-[25px]'>{icon}
            </div>
        </div>
    )
}

export default Icon