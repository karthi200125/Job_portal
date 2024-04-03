import React from 'react';

interface SelectProps {
    options?: string[],
    title?: string,
    cls?: string,
    onChange?: () => void
}

const Select = ({ options, title, cls, onChange }: SelectProps) => {
    return (
        <select name="" id="" onChange={onChange} className={`p-3 border-[1px] border-solid border-neutral-200 rounded-[5px] ${cls} focus:outline-none`}>
            <option value="">{title}</option>
            {options?.map((opt, index) => (
                <option value={opt} key={index}>{opt}</option>
            ))}
        </select>
    );
};

export default Select;
