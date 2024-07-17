import React from 'react'
import modelsData from '@/data/models.json'
import SingleModelPageHero from '@/components/single-model-page/single-model-page-hero';
import { notFound } from 'next/navigation';
import NavBar from '@/components/layout-components/navbar';
import ModelDescription from '@/components/single-model-page/model-description';

type Props = {
    params: {
        slug: string;
    }
}

export default function SingleModelPage({ params: { slug } }: Props) {

    const model = modelsData.find(model => model.slug === slug)

    if (!model) notFound()

    return (
        <>
            <NavBar />
            <main className='container relative'>
                <SingleModelPageHero model={model} />
                <ModelDescription model={model} />
            </main>
        </>
    )
}