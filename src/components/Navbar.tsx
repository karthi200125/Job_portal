'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsSuitcaseLgFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotifications } from "react-icons/io";
import { MdLocationOn } from 'react-icons/md';
import Logo from './Logo';
import SearchBox from './SearchBox';
import User from './User';
import { Button } from './ui/button';
import { Tooltip } from '@/app/(pages)/premium/Tooltip';

interface NavbarProps {
  onchange?: any
}

const Navbar = ({ onchange }: NavbarProps) => {
  const navlinks: any = [
    { count: 10, href: '/', title: 'Jobs', icon: <BsSuitcaseLgFill className='text-[20px]' />, text: "jobs", dir: "left" },
    { count: '', href: '/notification', title: 'Notifications', icon: <IoMdNotifications className='text-[25px]' />, text: "Notofications", dir: "left" },
    { count: 28, href: '/message', title: 'messages', icon: <BsSuitcaseLgFill className='text-[20px]' />, text: "Messages", dir: "left" },
  ];

  const pathname = usePathname()

  const handleChnage = (e: any) => {
    onchange(e)
  }

  return (
    <div className="navbarcon h-[60px] w-full z-10 bg-white container mx-auto flex items-center gap-2 border-b-[2px] border-solid border-neutral-300 justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Logo />
        <SearchBox onchange={handleChnage} name="" placeholder="Title, Skill or company" icon={<CiSearch />} />
        {pathname === '/' &&
          <SearchBox name="" placeholder="city state or zipcode" icon={<MdLocationOn />} />
        }
        <Button variant='custom_blue'>search</Button>
      </div>
      <div className="flex flex-row items-center h-full ">
        {navlinks?.map((nav: any, index: number) => (
          <Link href={nav.href} className={`${pathname === nav.href && 'border-black opacity-[1] '} w-[80px] h-full flex flex-col items-center justify-center opacity-[0.7] hover:opacity-[1] cursor-pointer border-b-[2px] border-solid `} key={index} >
            <div className='relative'>
              <Tooltip text={nav?.text} direction={nav?.dir}>
                {nav.icon}
              </Tooltip>
              {nav?.count > 0 &&
                <span className='absolute w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[8px] flex items-center justify-center top-[-8px] font-bold right-[-8px]'>{nav?.count}</span>
              }
            </div>
            <p className='text-[12px]'>{nav.title}</p>
          </Link>
        ))}
        <User />
        <span className='m-2 font-bold'>|</span>
        <Tooltip text='get a premium' direction='left'>
          <Link href={'/premium'} className='text-yellow-400 m-2 underline text-sm cursor-pointer'>Premium</Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
