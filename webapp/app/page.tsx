import Hero from "@/components/sections/Hero";
import  About  from "@/components/sections/About";
import  Problems  from "@/components/sections/Problems";
import  Approach  from "@/components/sections/Approach";
import  Cases  from "@/components/sections/Cases";
import  Why  from "@/components/sections/Why";
import  Contacts  from "@/components/sections/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Problems />
      <Approach />
      <Cases />
      <Why />
      <Contacts />
    </main>
  );
}
