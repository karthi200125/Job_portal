'use client'
import React, { useState } from 'react';

interface InputProps {
    title?: string;
    name?: string;
    onChange?: () => void;
    type?: string;
    cls?: string
}

const Input = ({ title, onChange, type, cls }: InputProps) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <div className={`${cls} relative border-[1px] border-solid ${focused ? "border-red-400" : "border-neutral-200"}  w-[300px] rounded-[5px] flex items-center justify-center m-2`}>
            <span className={`absolute capitalize bg-white px-2 left-[5px] transition-transform duration-300 ${focused && 'top-[-13px] text-sm text-red-400'}`}>{title}</span>
            <input
                type={type ? type : "text"}
                className='capitalize w-full h-full p-3 group focus:outline-none rounded-[5px] z-1'
                onFocus={handleFocus}
                onBlur={handleBlur}
                // onChange={(e: any) => onChange(name, e.target.value)}
            />
        </div>
    );
};

export default Input;
