import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
    className?: string
}

export default function NavBar({ className }: Props) {
    return (
        <nav className='border-b'>
            <section className={cn('container h-[72px] flex items-center lg:justify-between justify-center', className)}>
                <Link href={'/'}>
                    <figure>
                        <Image
                            src={'/logo-default.svg'}
                            alt='logo-default'
                            width={200}
                            height={100}
                            className='max-h-[204px]'
                        />
                    </figure>
                </Link>

                <section className='lg:flex hidden'>
                    <Button className='py-9 px-8 w-[160px] text-base font-semibold rounded-none bg-primary' asChild>
                        <a href={'tel:+971524574831'} className='flex items-center gap-3'>
                            <span className='text-2xl'><BiPhone /></span>
                            <span>Call us</span>
                        </a>
                    </Button>
                    <Button className='py-9 px-8 w-[160px] text-base font-semibold rounded-none bg-[#121926] hover:bg-[#121926] flex items-center gap-3'>
                        <a href={'https://api.whatsapp.com/send?phone=+971524574831&text=Hi%21+I%27m+interested+in+renting+a+luxury+car+with+MKAutos'} className='flex items-center gap-3'>
                            <span className='text-2xl'><BsWhatsapp /></span>
                            <span>Chat Now</span>
                        </a>
                    </Button>
                </section>

            </section>


        </nav>
    )
}