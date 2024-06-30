'use client'
import React, { useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar"
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image';

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
                    <div  className='flex w-full justify-center items-center space-x-3 pb-8 lg:pb-0'>
                        <div>
                            <Image width={100} height={20} className='w-10' src="/skill/html.png" alt="" />
                        </div>
                        <div className='w-full'>
                            <h1 className='text-white'>HTML</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={90} />
                        </div>
                    </div>
                    <div className='flex w-full justify-center items-center space-x-3'>
                        <div>
                            <Image width={100} height={20} className='w-10' src="/skill/css.png" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>CSS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={95} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10 pb-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <div>
                            <Image width={100} height={20} className='w-10' src="/skill/js.svg" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>JAVASCRIPT</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={80} />
                        </div>
                    </div>
                    <div className='flex justify-center space-x-3 items-center w-full'>
                        <div>
                            <Image width={100} height={20} className='w-10' src="/skill/react.png" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>REACT</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10 pb-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <div>
                            <Image width={100} height={20} className='w-[50px]' src="/skill/tailwind.svg" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>TAILWIND CSS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={85} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-5 w-full'>
                        <div>
                            <Image width={100} height={20} className='w-[50px]' src="/skill/node.svg" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>NODE JS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={50} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:space-x-10'>
                    <div className='flex justify-center items-center space-x-5 w-full pb-8 lg:pb-0'>
                        <div>
                            <Image width={100} height={20} className='w-[50px]' src="/skill/express.png" alt="" />
                        </div>
                        <div className='w-full '>
                            <h1 className='text-white'>EXPRESS JS</h1>
                            <ProgressBar bgColor="#02bfe2" animateOnRender={true} completed={40} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-5 w-full'>
                        <div>
                            <Image width={100} height={20} className='w-[50px]' src="/skill/mongodb.svg" alt="" />
                        </div>
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