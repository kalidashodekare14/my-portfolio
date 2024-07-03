import Image from 'next/image';
import React from 'react';
import { FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Project.css'


const Project = () => {
    return (
        <section id='projects' className='bg-[#0d0d0d] min-h-screen lg:px-32'>
            <div className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Latest Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-5 pb-5'>
                <div className='px-2 lg:px-0 mb-10 lg:mb-0 border border-[#07dde1] rounded-2xl'>
                    <Image className='h-[40vh] w-full rounded-t-2xl' width={500} height={300} src="/project/project1.png" alt="" />
                    <div className='space-y-5 p-3'>
                        <div className='text-white space-y-3 mt-5'>
                            <h1 className='text-3xl roboto'>Painting Pros</h1>
                            <p className='roboto text-[#ffffff6a]'>This project is designed for art lovers, providing a vast collection of images and paintings available for purchase, offering a seamless platform for enthusiasts to explore and obtain stunning artwork.</p>
                        </div>
                        <div>
                            <h1 className='text-white text-xl'>Features:</h1>
                            <ul className='text-white space-y-3 ml-5 text-[14px]'>
                                <li className='list-disc text-[#ffffff6a]'>This website is for painting and drawing. I have shown some painting data on this website.</li>
                                <li className='list-disc text-[#ffffff6a]'>And there is a button called View Details specific to that data where you can see the complete information of that data if clicked.</li>
                                <li className='list-disc text-[#ffffff6a]'>On the website I am creating an ad craft right. If any user wants to add data there then he can add data.</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-white text-xl'>Technology:</h1>
                            <div className='flex justify-center items-center space-x-3'>
                                <FaReact className='text-4xl text-[#00d1f7]'></FaReact>
                                <RiTailwindCssFill className='text-4xl text-[#39abab]' />
                                <FaNode className='text-4xl text-[#70a661]'></FaNode>
                                <SiExpress className='text-4xl bg-white rounded-full p-1' />
                                <SiMongodb className='text-4xl text-[#4ca13c]'></SiMongodb>
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>Live Link</button>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>GitHub Link</button>
                        </div>
                    </div>
                </div>
                <div className='px-2 lg:px-0 border border-[#07dde1] rounded-2xl'>
                    <Image className='h-[40vh] w-full rounded-t-2xl' width={500} height={300} src="/project/project2.png" alt="" />
                    <div className='space-y-5 p-3'>
                        <div className='text-white space-y-3 mt-5'>
                            <h1 className='text-3xl roboto'>Precision medical camp</h1>
                            <p className='roboto text-[#ffffff6a]'>Our medical camp offers a variety of healthcare services from illness management to preventive care aimed at enhancing your wellness. Join us to know about and get comprehensive medical support.</p>
                        </div>
                        <div>
                            <h1 className='text-white text-xl'>Features:</h1>
                            <ul className='text-white space-y-3 ml-5 text-[14px]'>
                                <li className='list-disc roboto text-[#ffffff6a]'>This website has a dashboard. And Organizer and Participant have been implemented. Here Organizer can control it.</li>
                                <li className='list-disc roboto text-[#ffffff6a]'>Here Organizer can control everything and add camp. And can manage that camp. The camps that have been added can be seen in the Available Camps.</li>
                                <li className='list-disc roboto text-[#ffffff6a]'>Organizer can see if any Participant joins the camp. And if the Participant pays then he can confirm.</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-white text-xl'>Technology:</h1>
                            <div className='flex justify-center items-center space-x-3'>
                                <FaReact className='text-4xl text-[#00d1f7]'></FaReact>
                                <RiTailwindCssFill className='text-4xl text-[#39abab]' />
                                <FaNode className='text-4xl text-[#70a661]'></FaNode>
                                <SiExpress className='text-4xl bg-white rounded-full p-1' />
                                <SiMongodb className='text-4xl text-[#4ca13c]'></SiMongodb>
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>Live Link</button>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>GitHub Link</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:space-x-5 pb-5'>
                <div className='lg:w-[50%] px-2 lg:px-0 mb-10 lg:mb-0 border border-[#07dde1] rounded-2xl'>
                    <Image className='h-[40vh] w-full rounded-t-2xl' width={500} height={300} src="/project/project5.png" alt="" />
                    <div className='space-y-5 p-3'>
                        <div className='text-white space-y-3 mt-5'>
                            <h1 className='text-3xl roboto'>Repair Perfect</h1>
                            <p className='roboto text-[#ffffff6a]'>Our website offers a wide range of home repair services dedicated to revitalizing your home and restoring its beauty. Let us help you transform your space and bring new life around you.</p>
                        </div>
                        <div>
                            <h1 className='text-white text-xl'>Features:</h1>
                            <ul className='text-white space-y-3 ml-5 text-[14px]'>
                                <li className='list-disc text-[#ffffff6a]'>This website is made for home repair services. Any person can add his service here.</li>
                                <li className='list-disc text-[#ffffff6a]'>Here the person who added the service can see his/her added service in the Manage Services section. And can delete and update it.</li>
                                <li className='list-disc text-[#ffffff6a]'>If a person's house is in need of repair. By visiting the services section of this website.</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-white text-xl'>Technology:</h1>
                            <div className='flex justify-center items-center space-x-3'>
                                <FaReact className='text-4xl text-[#00d1f7]'></FaReact>
                                <RiTailwindCssFill className='text-4xl text-[#39abab]' />
                                <FaNode className='text-4xl text-[#70a661]'></FaNode>
                                <SiExpress className='text-4xl bg-white rounded-full p-1' />
                                <SiMongodb className='text-4xl text-[#4ca13c]'></SiMongodb>
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>Live Link</button>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>GitHub Link</button>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] px-2 lg:px-0 border border-[#07dde1] rounded-2xl'>
                    <Image className='h-[40vh] w-full rounded-t-2xl' width={500} height={300} src="/project/project6.png" alt="" />
                    <div className='space-y-5 p-3'>
                        <div className='text-white space-y-3 mt-5'>
                            <h1 className='text-3xl roboto'>Royal Respite</h1>
                            <p className='roboto text-[#ffffff6a]'>Search and book residential hotel units seamlessly on our platform. Whether renting for a short stay or buying for a long-term investment, find the perfect residence with ease.</p>
                        </div>
                        <div>
                            <h1 className='text-white text-xl'>Features:</h1>
                            <ul className='text-white space-y-3 ml-5 text-[14px]'>
                                <li className='list-disc roboto text-[#ffffff6a]'>This website is made with Residential and here are some Residential hotels shown through cards.
                                </li>
                                <li className='list-disc roboto text-[#ffffff6a]'>Clicking the view property button of that card will show the complete details of that hotel.
                                </li>
                                <li className='list-disc roboto text-[#ffffff6a]'>If the user has login then he can see the details of the card by clicking on the view property of the card.</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-white text-xl'>Technology:</h1>
                            <div className='flex justify-center items-center space-x-3'>
                                <FaReact className='text-4xl text-[#00d1f7]'></FaReact>
                                <RiTailwindCssFill className='text-4xl text-[#39abab]' />
                                <FaNode className='text-4xl text-[#70a661]'></FaNode>
                                <SiExpress className='text-4xl bg-white rounded-full p-1' />
                                <SiMongodb className='text-4xl text-[#4ca13c]'></SiMongodb>
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>Live Link</button>
                            <button className='btn bg-opacity-0 border border-[#07dde1] hover:border-[#07dde1] hover:text-black hover:bg-[#07dde1] text-white'>GitHub Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;