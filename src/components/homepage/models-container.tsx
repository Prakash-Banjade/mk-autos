import React from 'react'
import ModelsList from './models-list'

type Props = {}

export default function ModelsContainer({ }: Props) {
    return (
        <section className='mt-5'>
            <h2 className='text-2xl font-semibold text-center w-full'>Explore Models</h2>
            <ModelsList />
        </section>
    )
}