import React from 'react';

const Project = () => {
    return (
        <div className='bg-[#0d0d0d] min-h-screen px-32'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center py-20 '>
                <h1 className='text-center text-2xl text-white'>Projects</h1>
                <div className='border-2 border-[#07dde1] w-20 m-auto'></div>
            </div>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <div className='flex justify-center space-x-5'>
                    <div className='border-4 border-[#07dde1] w-[40%]'>
                        <img className='w-full' src="/project/project1.png" alt="" />
                    </div>
                    <div className='border-4 border-[#07dde1] w-[40%]'>
                        <img className='w-full' src="/project/project2.png" alt="" />
                    </div>
                </div>
                <div className='flex justify-center space-x-5'>
                    <div className='border-4 border-[#07dde1] w-[40%]'>
                        <img className='' src="/project/project3.png" alt="" />
                    </div>
                    <div className='border-4 border-[#07dde1] w-[40%]'>
                        <img className='' src="/project/project4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;