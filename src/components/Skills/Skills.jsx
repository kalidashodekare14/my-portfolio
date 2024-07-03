'use client'
import React, { useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar"
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';
import { FaCss3, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {

    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <section id='skills' className='bg-[#0d0d0d] lg:min-h-screen pt-5 pb-10'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-white text-center text-4xl pt-10 '>My Skills</h1>
                <div className='border-2 border-[#07dde1] w-32 m-auto'></div>
            </div>
            <div className='lg:mx-40 mx-3 mt-20'>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10 pb-10'>
                    <div className='flex w-full justify-center items-center space-x-3 pb-8 lg:pb-0'>
                        <FaHtml5 className='text-4xl text-[#ff5733]' />
                        <div className='w-full'>
                            <h1 className='text-white'>HTML</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={90} />
                        </div>
                    </div>
                    <div className='flex w-full justify-center items-center space-x-3'>
                        <FaCss3 className='text-4xl text-[#2862e9]' />
                        <div className='w-full '>
                            <h1 className='text-white'>CSS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={95} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10 pb-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <IoLogoJavascript className='text-4xl text-[#efd81d]' />
                        <div className='w-full '>
                            <h1 className='text-white'>JAVASCRIPT</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={80} />
                        </div>
                    </div>
                    <div className='flex justify-center space-x-3 items-center w-full'>
                        <FaReact className='text-4xl text-[#00d1f7]' />
                        <div className='w-full '>
                            <h1 className='text-white'>REACT</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10 pb-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <RiTailwindCssFill className='text-4xl text-[#39abab]' />
                        <div className='w-full '>
                            <h1 className='text-white'>TAILWIND CSS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={85} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-5 w-full'>
                        <FaNode className='text-4xl text-[#70a661]' />
                        <div className='w-full '>
                            <h1 className='text-white'>NODE JS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={50} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <SiExpress className='text-4xl bg-white rounded-full p-1' />
                        <div className='w-full '>
                            <h1 className='text-white'>EXPRESS JS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={40} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-5 w-full'>
                        <SiMongodb className='text-4xl text-[#4ca13c]' />
                        <div className='w-full'>
                            <h1 className='text-white'>MONGODB</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={50} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;