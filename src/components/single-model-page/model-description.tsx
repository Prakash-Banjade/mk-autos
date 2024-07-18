import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { TModel } from '@/types/model.type'
import Image from 'next/image';
import { Button } from '../ui/button';
import ModelDescriptionTemplate from './model-description-wrapper';
import { ReserveNowDialog } from '../layout-components/reserve-now-dialog';

type Props = {
    model: TModel
}

export default function ModelDescription({ model }: Props) {
    return (
        <ModelDescriptionTemplate>
            <section className='grid grid-cols-1 gap-10 lg:grid-cols-6 mt-14'>
                <div className='lg:order-2 lg:col-span-2'>
                    <Card className='shadow-none lg:border-solid border-none rounded-lg'>
                        <CardHeader className='lg:px-6 lg:pt-6 pt-0 px-0 pb-4'>
                            <CardTitle className='font-hubot font-semibold text-2xl'>
                                {model.name}
                            </CardTitle>
                            <CardDescription className='font-semibold text-lg text-[#697586]'>
                                {model.pricePerDay} for a day <br /> +5% VAT (Value Added Tax)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-10 px-0 pb-0 lg:pb-6 lg:px-6'>
                            <ReserveNowDialog>
                                <Button className='w-full font-semibold py-4 text-base lg:h-10 h-12 lg:order-2'>Reserve Now</Button>
                            </ReserveNowDialog>

                            <section className='lg:order-1'>
                                <h3 className='text-lg font-medium'>Car Items</h3>
                                <section className='grid grid-cols-2 gap-8 lg:gap-6 mt-4'>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/brand.svg'}
                                                alt='Brand Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Brand</h4>
                                            <p className=''>{model.brandName}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/model.svg'}
                                                alt='Model Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Model</h4>
                                            <p className=''>{model.model}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/category.svg'}
                                                alt='Category Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Category</h4>
                                            <p className=''>{model.category}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/year.svg'}
                                                alt='Year Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Year</h4>
                                            <p className=''>{model.year}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/color.svg'}
                                                alt='Color Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Color</h4>
                                            <p className=''>{model.color}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/cc.svg'}
                                                alt='Power Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Power</h4>
                                            <p className=''>{model.power}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <figure className='h-8 w-8'>
                                            <Image
                                                src={'/icons/seats.svg'}
                                                alt='Seats Icon'
                                                height={32}
                                                width={32}
                                            />
                                        </figure>
                                        <div className='text-sm'>
                                            <h4 className='text-[#697586] font-semibold'>Seats</h4>
                                            <p className=''>{model.seats}</p>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </CardContent>
                    </Card>
                </div>

                <div className='grid grid-cols-1 gap-10 lg:order-1 lg:col-span-4'>
                    <Card className='shadow-none lg:border-solid border-none rounded-lg'>
                        <CardHeader className='lg:px-6 lg:pt-6 pt-0 px-0 pb-4'>
                            <CardTitle className='font-hubot text-lg'>
                                Why choose MKAutos for luxury car rental?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-0 pb-0 lg:pb-6 lg:px-6'>
                            <p className='font-medium text-[#697586]'>
                                MKAutos stands out as a top choice for luxury car rental thanks to our extensive fleet, personalized service, and transparent pricing. We offer a wide selection of high-end vehicles tailored to your preferences, supported by a dedicated team committed to ensuring your satisfaction at every step. Experience luxury redefined with MKAutos.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className='shadow-none lg:border-solid border-none rounded-lg'>
                        <CardHeader className='lg:px-6 lg:pt-6 pt-0 px-0 pb-4'>
                            <CardTitle className='font-hubot text-lg'>
                                How do I reserve a car with MKAutos?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-0 pb-0 lg:pb-6 lg:px-6'>
                            <p className='font-medium text-[#697586]'>
                                Reserving a luxury car with MKAutos is straightforward and convenient. Simply explore our impressive range of high-end vehicles on our platform. Once you&apos;ve selected your ideal ride, reach out to our specialists via WhatsApp for a personalized quote and assistance with your booking. Our streamlined process ensures a hassle-free experience, with the option for delivery added for your convenience.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className='shadow-none lg:border-solid border-none rounded-lg'>
                        <CardHeader className='lg:px-6 lg:pt-6 pt-0 px-0 pb-4'>
                            <CardTitle className='font-hubot text-lg'>
                                What documents do I need for the rental process?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='px-0 pb-0 lg:pb-6 lg:px-6'>
                            <p className='font-medium text-[#697586]'>
                                Renting a luxury car with MKAutos in Dubai requires specific documentation based on your residency status and origin. UAE residents will need to provide a copy of their passport, residential visa, Emirates ID, and a valid UAE driving license. For tourists, documentation includes a passport, visa with entry stamp, and a valid driving license from their home country. Our specialists are here to guide you through this process.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </ModelDescriptionTemplate>
    )
}