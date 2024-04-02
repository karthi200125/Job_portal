import LeftJobs from "@/components/LeftJobs";
import Navbar from "@/components/Navbar";
import RightJobs from "@/components/RightJobs";

export default function Home() {
  return (
    <section className="container mx-auto w-full h-screen flex flex-row justify-between gap-1 mt-[80px]">
      <Navbar />
      <LeftJobs />
      <RightJobs />
    </section>
  );
}
