import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>2023 &copy; COGNOSPHERE PTE. LTD.</span>
                <div className='flex items-center'>
                    Built with <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp;<Link href="/" className='underline underline-offset-2'>Miyu</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer