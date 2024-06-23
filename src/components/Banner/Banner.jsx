
'use client'
import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Cursor from '../Cursor/Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const Banner = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <div className='bg-[#0d0d0d] flex justify-center items-center min-h-screen'>
            <Cursor></Cursor>
            <div className='space-y-4 text-white'>
                <h6 data-aos="fade-right" data-aos-duration="1000" className=''>🖐 Hi, I am <span className='text-[#02dde8]'>Kalidash Odekare</span></h6>
                <h1 data-aos="fade-right" data-aos-delay="1000" className='text-5xl'>Front End Developer</h1>
                <p data-aos="fade-right" data-aos-delay="2000" className='w-[60%]'>I am a front end developer. I develop customer and user friendly websites on demand</p>
                <div className='flex items-center space-x-5 text-2xl'>
                    <FaFacebook data-aos="fade-up" data-aos-delay="2200" />
                    <FaInstagram data-aos="fade-up" data-aos-delay="2300" />
                    <FaTwitter data-aos="fade-up" data-aos-delay="2400" />
                    <FaLinkedin data-aos="fade-up" data-aos-delay="2500" />
                </div>
            </div>
            <div className='relative'>
                <div className='relative rounded-full'>
                    <div className='w-[80%]'>
                        <Image className='w-full rounded-full border' width={300} height={400} src={`/man.png`} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;