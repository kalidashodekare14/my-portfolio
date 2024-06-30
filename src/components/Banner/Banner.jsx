'use client'
import { useEffect, useState } from 'react';
import { FaCss3, FaFacebook, FaHtml5, FaInstagram, FaLinkedin, FaNode, FaReact, FaTwitter } from "react-icons/fa";
import Cursor from '../Cursor/Cursor';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";


const Banner = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        AOS.init({});
        setIsClient(true)

    }, [])

    return (
        <div id='home' className=' bg-[#0d0d0d] flex flex-col-reverse lg:flex-row justify-center items-center space-y-10 min-h-screen'>
            {
                isClient && !isMobile && <Cursor />
            }
            <div className='space-y-4 text-white'>
                <h6 data-aos="fade-right" data-aos-duration="1000" className='text-center lg:text-left'>🖐 Hi, I am <span className='text-[#02dde8]'>Kalidash Odekare</span></h6>
                <h1 data-aos="fade-right" data-aos-delay="1000" className='lg:text-5xl text-3xl text-center lg:text-left'>
                    <Typewriter
                        words={['Web Developer', 'Front End Developer']}
                        loop
                        cursor
                        cursorStyle='...'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={500}

                    />
                </h1>
                <p data-aos="fade-right" data-aos-delay="2000" className='lg:w-[60%] text-center lg:text-left'>I am a front end developer. I develop customer and user friendly websites on demand</p>
                <div className='flex lg:justify-start justify-center items-center space-x-5 text-2xl'>
                    <FaFacebook data-aos="fade-up" data-aos-delay="2200" />
                    <FaInstagram data-aos="fade-up" data-aos-delay="2300" />
                    <FaTwitter data-aos="fade-up" data-aos-delay="2400" />
                    <FaLinkedin data-aos="fade-up" data-aos-delay="2500" />
                </div>
            </div>
            <div className='relative p-9'>
                <div className='w-60 rounded-full border'>
                    <img className='rounded-full ' src="/man.png" alt="" />
                </div>
                <div className='absolute top-11'>
                    <FaHtml5 className='text-2xl text-[#d94123] flashMove' />
                </div>
                <div className='absolute top-0 left-[140px]'>
                    <FaCss3 className='text-2xl text-[#1d95df] flashMove1' />
                </div>
                <div className='absolute top-[58px] left-[260px]'>
                    <RiJavascriptFill className='text-2xl text-[#efd81d] flashMove2' />
                </div>
                <div className='absolute top-[150px] left-[278px]'>
                    <RiTailwindCssFill className='text-2xl text-[#06b0cd] flashMove3' />
                </div>
                <div className='absolute top-[280px] left-[250px]'>
                    <FaReact className='text-2xl text-[#06b0cd] flashMove4' />
                </div>
                <div className='absolute top-[320px] left-[140px]'>
                    <RiNextjsFill className='text-2xl bg-white rounded-full text-[#000000] flashMove4' />
                </div>
                <div className='absolute top-[270px] left-[25px]'>
                    <FaNode className='text-2xl bg-white rounded-full text-[#3a8338] flashMove4' />
                </div>
                <div className='absolute top-[125px] left-[3px]'>
                    <SiExpress className='text-2xl bg-white rounded-full text-[#3a8338] flashMove4' />
                </div>
            </div>

        </div>
    );
};

export default Banner;