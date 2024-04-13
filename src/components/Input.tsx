'use client'
import React, { useState } from 'react';

interface InputProps {
    title?: string;
    name?: string;
    value?: string;
    onChange?: (value: any) => void;
    type?: string;
    cls?: string;
    required?: boolean,
    isLoading?: boolean;
}

const Input = ({ title, onChange, type, cls, name, value, required, isLoading }: InputProps) => {
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState("");

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
        if (required && !value) {
            setError("This field is required");
        } else {
            setError("");
        }
    };

    // const handleChange = (e: any) => {
    //     const { value } = e.target;
    //     onChange && onChange(value);
    //     setError("");
    // };

    return (
        <div className={`${cls} relative border-[1px] border-solid ${focused ? "border-red-400" : "border-neutral-200"}  w-[300px] rounded-[5px] flex items-center flex-col justify-center m-2`}>
            <span className={`absolute capitalize bg-white pointer-events-none px-2 left-[5px] text-[var(--light)] ${focused && 'top-[-13px] text-sm text-red-400'} ${focused || value ? 'top-[-13px] text-sm text-red-400' : 'text-base'} transition-all duration-300`}>{title}</span>
            <input
                type={type ? type : "text"}
                className='w-full h-full p-3 group focus:outline-none rounded-[5px] z-1'
                onFocus={handleFocus}
                onBlur={handleBlur}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={isLoading}
            />
            {/* {error && <p className="absolute text-red-500 text-sm font-bold leading-none bottom-[-13px] w-full">{"error"}</p>} */}
        </div>

    );
};

export default Input;
