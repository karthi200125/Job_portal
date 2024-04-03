'use client'
import AddSkills from "@/components/AddSkills";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import Select from "@/components/Select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CreateJob = () => {

    const JobTypeOptions = ['Remote', "Flexible", "Hybrid"]
    const Experience = ['Intern', "Fresher/Entry Level", 'Associate', 'Mid Senior', 'Senior/Lead', 'Manager']

    const [skills, setSkills] = useState<String[]>([])

    console.log(skills)

    return (
        <div className="w-full container mx-auto h-full mt-[70px] p-5 gap-2 flex flex-col">
            <Navbar />
            <div className="w-full flex -flex-row items-center justify-between">
                <h1 className="text-3xl font-bold">Create Job</h1>
                <Button>Create Job Post</Button>
            </div>
            <div className="flex flex-row flex-wrap">
                <Input title="job role name" cls="w-[48%] mx-auto" />
                <Input title="Compnay Name" cls="w-[48%] mx-auto" />
                <Input title="Salary" cls="w-[48%] mx-auto" />
                <Input title="Company Total Employee" cls="w-[48%] mx-auto" type="number"/>
                <Select title="Select Job Type" cls="w-[48%] mx-auto" options={JobTypeOptions} />
                <Select title="Select Experince" cls="w-[48%] mx-auto" options={Experience} />
            </div>
            <div className="flex flex-row items-center justify-between">
                <Input title="Country" cls="w-[33%]" />
                <Input title="State" cls="w-[33%]" />
                <Input title="City" cls="w-[33%]" />
            </div>
            <div className="flex flex-row items-start justify-between">
                <textarea name="" id="" className="w-[48%] mx-auto h-[30vh] focus:outline-none border-[1px] border-solid border-neutral-200 rounded-[5px] p-2" placeholder="Job Description" ></textarea>
                <AddSkills onSkillsChange={(d: any) => setSkills(d)} cls="w-[48%] mx-auto]" />
            </div>
        </div>
    );
};

export default CreateJob