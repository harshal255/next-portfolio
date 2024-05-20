import { SVGMaskEffectDemo } from '@/components/MaskEffectDemo';
import { SparklesPreview } from '@/components/SparklesHero';
import { VortexDemo } from '@/components/VortexHero';
import React from 'react';

const Page = () => {
    return (
        <main className='relative bg-purple-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
            <div className="max-w-7xl w-full">
                <SparklesPreview />
                <SVGMaskEffectDemo/>
                <VortexDemo/>
            </div>
        </main>
    )
}

export default Page