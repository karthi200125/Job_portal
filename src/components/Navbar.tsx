'use client'
import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import { CiSearch } from 'react-icons/ci';
import { MdLocationOn } from 'react-icons/md';
import { Button } from './ui/button';
import { BsSuitcaseLgFill } from 'react-icons/bs';
import { IoMdNotifications } from "react-icons/io";
import User from './User';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const navlinks: any = [
    { href: '/', title: 'Jobs', icon: <BsSuitcaseLgFill className='text-[20px]' /> },
    { href: '/notifications', title: 'Notifications', icon: <IoMdNotifications className='text-[25px]' /> },
    { href: '/message', title: 'messages', icon: <BsSuitcaseLgFill className='text-[20px]' /> },
  ];

  const pathname = usePathname()  

  return (
    <div className="h-[60px] w-full z-10 bg-white container mx-auto fixed top-0 flex items-center gap-2 border-b-[2px] border-solid border-neutral-300 justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Logo />
        <SearchBox name="" placeholder="Title, Skill or company" icon={<CiSearch />} />
        <SearchBox name="" placeholder="city state or zipcode" icon={<MdLocationOn />} />
        <Button>search</Button>
      </div>
      <div className="flex flex-row items-center h-full ">
        {navlinks?.map((nav: any, index: number) => (
          <Link href={nav.href} className={`${pathname === nav.href && 'border-black opacity-[1] '} w-[80px] h-full flex flex-col items-center justify-center opacity-[0.5] hover:opacity-[1] cursor-pointer border-b-[2px] border-solid `} key={index} >
            <div className=''>{nav.icon}</div>
            <p className='text-[12px]'>{nav.title}</p>
          </Link>
        ))}
        <User />
        <span className='m-2 font-bold'>|</span>
        <p className='text-yellow-400 m-2 underline text-sm cursor-pointer'>Premium</p>
      </div>
    </div>
  );
};

export default Navbar;
