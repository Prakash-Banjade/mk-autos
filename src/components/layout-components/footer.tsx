import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className='bg-[#121926] lg:mb-0 mt-20'>
            <div className='container mx-auto px-4 py-14 lg:mt-20 lg:px-6'>
                <div className='flex items-center justify-center gap-4 flex-col text-white'>
                    <Link
                        href={'/'}
                    >
                        <figure className='max-w-[138px]'>
                            <Image
                                src={'/logo-gray.svg'}
                                alt='mk-auto-logo-gray'
                                width={200}
                                height={100}
                            />
                        </figure>
                    </Link>
                    <p className='text-xs text-neutral-300'>Â© 2024 MKAutos - All Rights Reserved</p>
                    <p className='text-sm mt-5'><a href="#">Terms</a> &nbsp; &nbsp;<a href='#'>Privacy</a></p>
                </div>
            </div>
        </footer>
    )
}