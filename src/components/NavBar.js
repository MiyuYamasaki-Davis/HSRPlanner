import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {GithubIcon, LinkArrow} from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=''}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/inventory" title="Inventory" className='mx-4'/>
                <CustomLink href="/datasheet" title="Datasheet" className='mx-4'/>
                <CustomLink href="/planner" title="Planner" className='ml-4'/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://github.com/MiyuYamasaki-Davis/HSRPlanner" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className='w-6 mr-3'
                >
                    <GithubIcon/>
                </motion.a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar