'use client'
import { JobData } from '@/Dummydata';
import Filters from "@/components/Filters";
import LeftJobs from "@/components/LeftJobs";
import Navbar from "@/components/Navbar";
import RightJobs from "@/components/RightJobs";
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectJob, setselectJob] = useState('');
  const [filters, setFilters] = useState({
    DatePosted: '',
    Exp: '',
    mode: '',
    easyApply: false
  });

  const updateFilters = (name: string, value: any) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const filteredJobs = useMemo(() => {
    let result = JobData;

    // Filter by search query
    if (searchQuery) {
      result = result.filter(job => job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by DatePosted
    if (filters.DatePosted) {
      // Implement DatePosted filtering logic here
    }

    // Filter by Exp
    if (filters.Exp) {
      result = result.filter(job => job.jobExp.toLowerCase() === filters.Exp.toLowerCase());
    }

    // Filter by mode
    if (filters.mode) {
      result = result.filter(job => job.jobMode.toLowerCase() === filters.mode.toLowerCase());
    }

    // Filter by easyApply
    if (filters.easyApply) {
      result = result.filter(job => !job.applyLink);
    }

    return result;
  }, [searchQuery, filters]);

  const job = filteredJobs.find(job => job.id === Number(selectJob));

  const [allusers, setAllUsers] = useState([])

  useEffect(() => {
    const Getusers = async () => {
      try {
        // const res = await axios.get('http://localhost:3000/api/users')
        // setAllUsers(res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    Getusers()
  }, [])


  return (
    <>
      <Navbar onchange={(e: any) => setSearchQuery(e.target.value)} />
      <section className="container mx-auto w-full h-[100vh] pt-[80px] bg-white flex flex-col gap-2">
        <Filters updateFilters={updateFilters} />
        <div className="flex flex-row justify-between gap-1">
          <LeftJobs jobs={filteredJobs} onJob={(d: any) => setselectJob(d)} />
          <RightJobs job={job ? job : filteredJobs[0]} />
        </div>
      </section>
    </>
  );
}
