import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/HonkaiStarRail_Wallpaper_Himeko_March7th_DanHeng.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import {GithubIcon, LinkArrow} from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt=0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Name" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Convenient. Automated. Thorough." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium p-8'>
                This tool is an automated material and energy calculator for Honkai Star Rail.<br/>
                It allows for team composition of two teams of four characters with relics for general play, MoC, and PF.<br/>
                Currently optimized for: <strong>v2.0 / Pre v2.1</strong>
              </p>
              <div className='flex items-center self-start mt-2 p-8'>
                <Link href="https://discord.com/users/id/143979174493814784"
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                >
                  Discord 
                  <LinkArrow className='w-6 ml-1'/>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
