'use client'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode
}

export default function ModelDescriptionTemplate({ children }: Props) {
    return (
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
            className='px-6'
        >
            {children}
        </motion.div>
    )
}