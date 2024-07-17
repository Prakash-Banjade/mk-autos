'use client'

import { useScroll, motion } from 'framer-motion';
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function RootTemplate({ children }: Props) {

    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                className="progress-bar z-[100]"
                style={{ scaleX: scrollYProgress }}
            />
            {children}
        </>
    )
}