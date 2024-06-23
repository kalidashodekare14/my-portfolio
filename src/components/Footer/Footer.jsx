import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#0d0d0d] px-32 p-10 border-t'>
            <div className='flex justify-between items-center'>
                <div className='text-white'>
                    <h4>Portfolio- &copy;2023 All Rights Reserved</h4>
                </div>
                <div className='text-white space-x-3'>
                    <span>Home</span>
                    <span>About Me</span>
                    <span>Skill</span>
                    <span>Portfolio</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;