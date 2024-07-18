'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { ReserveNowDialog } from '../layout-components/reserve-now-dialog'
import { useModelContext } from '@/context/model-data.provider'


type Props = {}

export default function ModelsList({ }: Props) {

    const { models } = useModelContext()

    return (
        <section className='mt-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 place-items-center'>
            {
                models.map((model, ind) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            stiffness: 200,
                            damping: 25,
                            restDelta: 2,
                            duration: .7
                        }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, y: 40 }}
                        key={model.name + ind}
                    >
                        <Card className='overflow-hidden max-w-[316px]'>
                            <Link href={`/${model.slug}`}>

                                <CardHeader className='p-0'>
                                    <figure className='w-full'>
                                        <Image
                                            src={model.imageUrl}
                                            alt={model.name}
                                            width={500}
                                            height={600}
                                            loading='eager'
                                            className='object-cover h-[200px] w-full'
                                        />
                                        <figcaption className='p-4 text-lg font-medium'>{model.name}</figcaption>
                                    </figure>
                                </CardHeader>
                            </Link>

                            <CardContent className='p-4 pt-0'>
                                <Link href={`/${model.slug}`}>

                                    <section className='flex flex-col gap-2 text-sm font-medium'>
                                        <section className='flex items-center justify-between'>
                                            <p className='text-neutral-600'>Year</p>
                                            <span className='text-neutral-700'>{model.year}</span>
                                        </section>
                                        <section className='flex items-center justify-between'>
                                            <p className='text-neutral-600'>Color</p>
                                            <span className='text-neutral-700'>{model.color}</span>
                                        </section>
                                        <section className='flex items-center justify-between'>
                                            <p className='text-neutral-600'>Power</p>
                                            <span className='text-neutral-700'>{model.power}</span>
                                        </section>
                                    </section>
                                </Link>

                                <section className='mt-8 space-y-2'>
                                    <ReserveNowDialog>
                                        <Button className='w-full' variant={'default'}>
                                            Reserve Now
                                        </Button>
                                    </ReserveNowDialog>
                                    <Button className='w-full text-primary hover:text-primary hover:bg-primary/10 transition-all' variant={'ghost'} asChild>
                                        <Link href={`/${model.slug}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </section>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))
            }
        </section>
    )
}