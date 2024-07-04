import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import ContactUs from "@/components/ContactUs/ContactUs";
import Education from "@/components/Education/Education";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";



export default function Home() {
  return (
    <main>
      <Head>
        <title>Code Crux</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Project></Project>
      <ContactUs></ContactUs>
    </main>
  );
}
