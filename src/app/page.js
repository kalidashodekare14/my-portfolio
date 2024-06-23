import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </main>
  );
}
