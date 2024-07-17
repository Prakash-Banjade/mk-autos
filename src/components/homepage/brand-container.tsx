import React from 'react'
import BrandsList from './brands-list'

type Props = {}

export default function BrandsContainer({ }: Props) {
    return (
        <section className='mt-5'>
            <h2 className='text-2xl font-semibold text-center w-full'>Explore Brands</h2>
            <BrandsList />
        </section>
    )
}