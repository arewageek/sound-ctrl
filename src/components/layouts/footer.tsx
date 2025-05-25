import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import FooterLinkItem, { IFooterLinkItem } from '../sections/footer-link-item'

interface ISocial { icon: ReactElement, link: string, name: string }

interface links {
    title: string,
    links: IFooterLinkItem[]
}

const Footer = () => {

    const socials: ISocial[] = [
        { name: "Instagram", icon: <FaInstagram />, link: "" },
        { name: "Youtube", icon: <FaYoutube />, link: "" },
        { name: "Tiktok", icon: <FaTiktok />, link: "" },
        { name: "X", link: "", icon: <BsTwitterX /> }
    ]


    const footerLinks: links[] =

        [
            {
                title: "Reviews",
                links: [
                    { link: "", label: "Review" },
                    { label: "How it works", link: "" },
                    { label: "FAQ's", link: '' },
                    { label: "For Artists", link: "" }
                ]
            },
            {
                title: "Usefull",
                links: [
                    { label: "Press", link: "" },
                    { label: "Imprint", link: "" },
                    { label: "Privacy & Policy", link: "" }
                ]
            },
            {
                title: "Follow Us",
                links: [
                    { label: "Instagram", link: "" },
                    { label: "Tiktok", link: "" },
                    { label: "Youtube", link: "" },
                    { label: "X (Twitter)", link: "" }
                ]
            }

        ]

    return (
        <div className='w-full px-5 lg:px-48 py-24 bg-primary-200 flex flex-col justify-between gap-x-5 lg:flex-row gap-4 text-white'>
            <div className='w-full lg:w-1/3 flex flex-col gap-y-5 lg:gap-y-10 text-gray-200'>
                <div>
                    <Image src="/attachments/logo.png" width={200} height={100} alt="Logo" />
                </div>
                <div>
                    <p className='text-md lg:text-xl font-semibold'>
                        Get Rewards for Streaming. Yapping. And growing the community of your favorite artists.
                    </p>

                </div>
                <div className='flex items-center gap-5'>
                    {socials.map((s, key) => (
                        <Link href={s.link} key={key} className='text-3xl font-bold hover:text-accent-100 transition-all duration-300'>
                            {s.icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-around text-gray-200'>
                {footerLinks.map((l, key) => <div className='w-full lg:w-1/3'>
                    <h3 className='text-2xl lg:text-4xl font-bold text-white'>
                        {l.title}
                    </h3>
                    <div className='mt-6 flex flex-col gap-y-3'>
                        {l.links.map((l, key) => <FooterLinkItem link={l.link} label={l.label} key={key} />)}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Footer