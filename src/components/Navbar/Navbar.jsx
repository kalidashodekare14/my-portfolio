"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname()

    const links = <>
        <li>
            <Link href={'/'} className={`${pathName === '/' ? 'border-b-2 text-[#02dde8] border-[#02dde8] rounded-none outline-none' : 'text-white'}`}>
                Home
            </Link>
        </li>
        <li>
            <Link href={'/about'} className={`${pathName === '/about' ? 'border-b-2 text-[#02dde8] border-[#02dde8] rounded-none' : 'text-white'}`}>
                About Me
            </Link>
        </li>
        <li>
            <Link href={'/contact'} className={`${pathName === '/contact' ? 'border-b-2 text-[#02dde8] border-[#02dde8] rounded-none' : 'text-white'}`}>
                My Skills
            </Link>
        </li>
        <li>
            <Link href={'/contact'} className={`${pathName === '/contact' ? 'border-b-2 text-[#02dde8] border-[#02dde8] rounded-none' : 'text-white'}`}>
                Education
            </Link>
        </li>
        <li>
            <Link href={'/contact'} className={`${pathName === '/contact' ? 'border-b-2 text-[#02dde8] border-[#02dde8] rounded-none' : 'text-white'}`}>
                Contact Us
            </Link>
        </li>
    </>

    return (
        <nav className="navbar bg-[#0d0d0d] px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white text-xl">Code Crux</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn border-[#02dde8] text-white border-spacing-0 rounded-sm bg-opacity-0">Hire Me</button>
            </div>
        </nav>
    );
};

export default Navbar;