'use client'
import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAddCall, MdAddLocationAlt, MdMarkEmailRead } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {


    return (
        <section id='contact' className='bg-[#0d0d0d] min-h-screen lg:px-32 pt-20 pb-20'>
            <div data-aos="fade-up" data-aos-duration="1000"  className='text-center'>
                <h1 className='text-center text-2xl text-white'>Contact Us</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='mt-20 flex flex-col lg:flex-row justify-center lg:space-x-40'>
                <div className='text-white mx-6 mb-20'>
                    <div data-aos="fade-right" data-aos-delay="1000">
                        <p>Contact Info</p>
                        <h1 className='text-4xl'>Get in touch</h1>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2000"  className='mt-10 flex space-x-3'>
                        <MdMarkEmailRead className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Talk us:</p>
                            <h4 className='font-bold'>kalidashodekare14@gmail.com</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2200" className='mt-10 flex space-x-3'>
                        <MdAddCall className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Call us:</p>
                            <h4 className='font-bold'>+8801728659562</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2300" className='mt-10 flex space-x-3'>
                        <MdAddLocationAlt className='text-xl text-[#07dde1]' />
                        <div>
                            <p>Address:</p>
                            <h4 className='font-bold'>Bairbari, Palashbari-5100, <br /> Birganj, Dinajpur</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2400" className='space-y-3'>
                        <h4 className='mt-10 uppercase'>Follow Us:</h4>
                        <div className='flex items-center space-x-5'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className='space-y-8 mx-5'>
                    <div data-aos="fade-right" data-aos-delay="2500" className='flex flex-col lg:flex-row lg:space-x-3 space-y-6 lg:space-y-0'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">First Name*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1]' placeholder='Your First Name' type="text" name=""  />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Last Name*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1]' placeholder='Your Last Name' type="text" name="" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2600" className='flex flex-col lg:flex-row lg:space-x-3  space-y-6 lg:space-y-0'>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Email*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1]' placeholder='Your Email' type="text" name=""  />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-white' htmlFor="">Phone*</label>
                            <input className='input bg-opacity-0 border border-[#07dde1]' placeholder='Your Phone Number' type="text" name="" />
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="2800">
                        <label className='text-white' htmlFor="">Message*</label>
                        <textarea className='textarea h-[20vh] w-full bg-opacity-0 border border-[#07dde1]' placeholder='Your Message' name="" ></textarea>
                    </div>
                    <button data-aos="fade-right" data-aos-delay="2900" className='btn w-60 bg-[#07dde1] border-0 '>Send Message</button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;