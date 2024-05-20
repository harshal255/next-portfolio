import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
    return (
        <div className="py-20" id='experiences'>
            <h1 className="heading">
                My {" "}
                <span className="text-purple">Work Experience</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
               {
                workExperience.map((card)=>{
                    return (
                       <Button key={card.id} duration={Math.floor(Math.random()*5000+5000)}
                       borderRadius='1.75rem'
                       className='flex-1 text-white border-slate-900'>
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                            <div className="lg:ms-5">
                                <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                                <p className='text-start text-sm lg:text-lg'>{card.desc}</p>
                            </div>
                        </div>
                        </Button>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Experience