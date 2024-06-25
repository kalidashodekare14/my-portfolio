'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const AboutMe = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <section id='about' className=' bg-[#110f17] min-h-screen py-20'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center'>
                <h1 className='text-center text-2xl text-white'>About Me</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='mx-32 my-20 flex justify-center items-center space-x-10'>
                <div data-aos="fade-right" data-aos-delay="1000" className='w-[40%] text-white'>
                    <Image width={500} height={300} unoptimized className='w-full rounded-lg' src="/p.gif" alt="" />
                </div>
                <div className='w-[50%]  text-white space-y-5'>
                    <p data-aos="fade-left" data-aos-delay="2000" className=''>I am Kalidash Odekare. I am a web developer. And I am very passionate and dedicated to my work. As per Bayer's instructions in my 1 year experience. We develop user friendly websites.</p>
                    <button data-aos="fade-left" data-aos-delay="2200" className='btn border text-white border-[#07dde1] bg-opacity-0'>Ream More</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;