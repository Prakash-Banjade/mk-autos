'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { TModel } from '@/types/model.type'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { ReserveNowDialog } from '../layout-components/reserve-now-dialog'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'


export default function SingleModelPageHero({ model }: { model: TModel }) {
    const carouselRef = useRef<CarouselRef>(null)

    return (
        <section className='min-h-full lg:h-[572px] md:h-[450px] h-[321px] relative'>

            <Carousel infinite={false} ref={carouselRef}>
                {
                    model.otherImages.map((imageUrl, ind) => (
                        <figure key={ind}>
                            <Image
                                src={imageUrl}
                                alt={model.name}
                                width={1000}
                                height={1200}
                                loading='eager'
                                className='object-cover lg:h-[572px] md:h-[450px] h-[321px] w-full'
                            />
                        </figure>
                    ))
                }
            </Carousel>

            {/* carousel buttons */}
            <div className='absolute w-full lg:flex hidden items-center justify-between px-16 z-[50] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Button
                    size={'icon'}
                    className='bg-white hover:bg-white text-black text-lg rounded-md h-10 w-10'
                    onClick={() => {
                        carouselRef.current?.prev()
                    }}
                >
                    <SlArrowLeft />
                </Button>

                <Button
                    size={'icon'}
                    className='bg-white hover:bg-white text-black text-lg rounded-md h-10 w-10'
                    onClick={() => {
                        carouselRef.current?.next()
                    }}
                >
                    <SlArrowRight />
                </Button>

            </div>


            <section className='overlay absolute inset-0 lg:block hidden'>

                <section className='p-16 py-11 text-white flex items-end justify-between h-full relative z-10'>
                    <section className='flex flex-col gap-4'>
                        <h1 className='text-[40px] leading-7 font-bold font-hubot'>{model.name}</h1>
                        <p className='text-lg font-semibold font-hubot'>{model.pricePerDay} for a day</p>
                        <ReserveNowDialog>
                            <Button className='w-[284px] py-6 text-lg font-bold font-hubot'>Reserve now</Button>
                        </ReserveNowDialog>
                    </section>

                    <ul className='flex gap-4'>
                        {
                            model.otherImages.map((imageUrl, ind) => (
                                <li key={ind}>
                                    <figure
                                        className='rounded-lg overflow-hidden border-2 border-white h-16 w-16 cursor-pointer'
                                        onClick={() => {
                                            carouselRef?.current?.goTo(ind)
                                        }}
                                    >
                                        <Image
                                            src={imageUrl}
                                            alt={model.name}
                                            width={100}
                                            height={100}
                                            loading='eager'
                                            className='object-cover h-16 w-auto'
                                        />
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </section>


                {/* bottom black gradient */}
                <div className='h-[250px] absolute bottom-0 w-full' style={{ background: 'linear-gradient(to top, rgb(0 0 0 / 90%), 60%, transparent)' }}></div>
            </section>
        </section>
    )
}