import React from 'react'


interface SearchProps {
    name: string,
    placeholder: string,
    icon: any,
}

const SearchBox = ({ name, placeholder, icon }: SearchProps) => {
    return (
        <div className='w-[250px] bg-neutral-100 px-2 rounded-[5px] flex items-center flex-row gap-1'>
            <div>{icon}</div>
            <input type="text" placeholder={placeholder} name={name} className='p-2 bg-transparent text-[13px] text-black focus:outline-none' />
        </div>
    )
}

export default SearchBox