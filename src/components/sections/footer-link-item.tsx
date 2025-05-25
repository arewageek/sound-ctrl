import Link from 'next/link'
import React from 'react'

export interface IFooterLinkItem { link: string, label: string }

const FooterLinkItem = ({ link, label }: IFooterLinkItem) => {
    return (
        <Link href={link ? link : "#"} className='text-lg lg:text-2xl'>
            {label}
        </Link>
    )
}

export default FooterLinkItem