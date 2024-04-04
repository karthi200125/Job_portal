'use client'
import React, { useState } from 'react';

interface FiltersProps {
    updateFilters: (name: string, value: string | boolean) => void;
}

const Filters = ({ updateFilters }: FiltersProps) => {
    const [DatePosted, setDatePosted] = useState('');
    const [Exp, setExp] = useState('');
    const [mode, setMode] = useState('');
    const [easyApply, setEasyApply] = useState(false);

    const handleDatePostedChange = (e: any) => {
        setDatePosted(e.target.value);
        updateFilters('DatePosted', e.target.value);
    };

    const handleExpChange = (e: any) => {
        setExp(e.target.value);
        updateFilters('Exp', e.target.value);
    };

    const handleModeChange = (e: any) => {
        setMode(e.target.value);
        updateFilters('mode', e.target.value);
    };

    const handleEasyApplyChange = () => {
        setEasyApply(!easyApply);
        updateFilters('easyApply', !easyApply);
    };

    return (
        <div className='flex flex-row gap-2 items-center capitalize py-3'>
            <select
                name=""
                id=""
                onChange={handleDatePostedChange}
                className={`px-3 py-2 _border text-sm focus:outline-none ${DatePosted && "bg-green-700 text-white"}`}
                style={{ borderRadius: '30px' }}
            >
                <option value="">Date Posted</option>
                <option value="all time">All Time</option>
                <option value="past 24 hours">Past 24 Hours</option>
                <option value="3 days ago">3 days ago</option>
                <option value="1 week ago">1 week ago</option>
            </select>
            <select
                name=""
                id=""
                onChange={handleExpChange}
                className={`px-3 py-2 _border text-sm focus:outline-none ${Exp && "bg-green-700 text-white"}`}
                style={{ borderRadius: '30px' }}
            >
                <option value="">Experience Level</option>
                <option value="Intern">Intern</option>
                <option value="Fresher">Fresher</option>
                <option value="Associate">Associate</option>
                <option value="Manager">Manager</option>
            </select>
            <select
                name=""
                id=""
                onChange={handleModeChange}
                className={`px-3 py-2 _border text-sm focus:outline-none ${mode && "bg-green-700 text-white"}`}
                style={{ borderRadius: '30px' }}
            >
                <option value="">Mode</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
            </select>
            <div
                onClick={handleEasyApplyChange}
                className={`px-3 py-2 _border text-sm cursor-pointer focus:outline-none ${easyApply && "bg-green-700 text-white"}`}
                style={{ borderRadius: '30px' }}
            >
                Easy Apply
            </div>
        </div>
    );
};

export default Filters;
