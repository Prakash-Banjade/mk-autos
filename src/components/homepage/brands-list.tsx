'use client'

import React from 'react'
import brandData from '@/data/brands.json'
import Image from 'next/image'
import { useModelContext } from '@/context/model-data.provider'
import modelsData from '@/data/models.json'

type Props = {}

export default function BrandsList({ }: Props) {

    const { setModels, models } = useModelContext()

    const handleBrandClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModels(modelsData.filter(model => model.brandName === e.target.value))
    }

    return (
        <ul className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 mt-6'>
            {
                brandData.map((brand, ind) => (
                    <li key={brand.name}>
                        <input aria-labelledby={brand.name + ind} type="radio" name='brands' onChange={handleBrandClick} value={brand.name} id={brand.name} className='peer sr-only' />
                        <label
                            htmlFor={brand.name}
                            className='peer-checked:border-primary hover:cursor-pointer transition-all rounded-lg border-2 w-[132px] h-[126px] min-w-[132px] flex items-center justify-center'
                        >
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                width={100}
                                height={100}
                            />
                        </label>
                    </li>
                ))
            }
        </ul>
    )
}