import React from 'react'

type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <section className='rounded-2xl p-9 pb-8 px-[55px] text-white bg-center bg-cover min-h-[184px]' style={{ backgroundImage: 'url(/hero-image.png)' }}>
            <h1 className='text-3xl font-medium mb-7'>Drive the Extraordinary</h1>
            <p className='font-light text-base pt-1'>
                Luxury is not just a destination; it&apos;s the journey.
                <br />
                MKAutos invites you to elevate every drive with our exclusives.
            </p>
        </section>
    )
}