import Image from 'next/image';
import React from 'react';

const Project = () => {
    return (
        <section id='projects' className='bg-[#0d0d0d] min-h-screen lg:px-32'>
            <div className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='flex flex-col lg:flex-row justify-center lg:space-x-5 space-y-5 lg:space-y-0'>
                    <div className='border-4 border-[#07dde1] lg:w-[40%]'>
                        <Image width={500} height={300} className='w-full' src="/project/project1.png" alt="" />
                    </div>
                    <div className='border-4 border-[#07dde1] lg:w-[40%]'>
                        <Image width={500} height={300} className='w-full' src="/project/project2.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center lg:space-x-5 space-y-5 lg:space-y-0'>
                    <div className='border-4 border-[#07dde1] lg:w-[40%]'>
                        <Image width={600} height={300} className='' src="/project/project3.png" alt="" />
                    </div>
                    <div className='border-4 border-[#07dde1] lg:w-[40%]'>
                        <Image width={600} height={200} className='' src="/project/project4.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;