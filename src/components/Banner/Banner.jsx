import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Cursor from '../Cursor/Cursor';


const Banner = () => {


    return (
        <div className='bg-[#0d0d0d] flex justify-center items-center min-h-screen'>
            <Cursor></Cursor>
            <div className='space-y-4 text-white'>
                <h6 className=''>🖐 Hi, I am <span className='text-[#02dde8]'>Kalidash Odekare</span></h6>
                <h1 className='text-5xl'>Front End Developer</h1>
                <p className='w-[60%]'>I am a front end developer. I develop customer and user friendly websites on demand</p>
                <div className='flex items-center space-x-5 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div className='relative'>
                <div className='relative rounded-full'>
                    <div className='w-[80%]'>
                        <img className='w-full rounded-full border' src={`/man.png`} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;