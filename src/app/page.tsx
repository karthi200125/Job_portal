'use client'
import Filters from "@/components/Filters";
import LeftJobs from "@/components/LeftJobs";
import Navbar from "@/components/Navbar";
import RightJobs from "@/components/RightJobs";
import { Axiosrequest } from '@/lib/AxiosRequest';
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
  const [alljobs, setAlljobs] = useState([])
  const [isLaoding, setisLaoding] = useState(false)

  const updateFilters = (name: string, value: any) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const filteredJobs = useMemo(() => {
    let result = alljobs;

    // Filter by search query
    if (searchQuery) {
      result = result.filter((job: any) => job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by DatePosted
    if (filters.DatePosted) {
      // Implement DatePosted filtering logic here
    }

    // Filter by Exp
    if (filters.Exp) {
      result = result.filter((job: any) => job.jobExp.toLowerCase() === filters.Exp.toLowerCase());
    }

    // Filter by mode
    if (filters.mode) {
      result = result.filter((job: any) => job.jobMode.toLowerCase() === filters.mode.toLowerCase());
    }

    // Filter by easyApply
    if (filters.easyApply) {
      result = result.filter((job: any) => !job.applyLink);
    }

    return result;
  }, [searchQuery, filters]);

  const job = filteredJobs.find((job: any) => job.id === Number(selectJob));


  useEffect(() => {
    const Getjobs = async () => {
      try {
        setisLaoding(true)
        const res = await Axiosrequest.get('/jobs')
        setAlljobs(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setisLaoding(false)
      }
    }
    Getjobs()
  }, [])

  return (
    <div className="w-full h-[100vh] container mx-auto bg-white" >
      <Navbar onchange={(e: any) => setSearchQuery(e.target.value)} />
      <section className="container mx-auto w-full flex flex-col gap-2 pt-[65px] h-full">
        <Filters updateFilters={updateFilters} />
        <div className="flex flex-row justify-between gap-1 h-full overflow-hidden">
          <LeftJobs jobs={filteredJobs} onJob={(d: any) => setselectJob(d)} isloading={isLaoding} />
          <RightJobs job={job ? job : filteredJobs[0]} />
        </div>
      </section>
    </div>
  );
}
