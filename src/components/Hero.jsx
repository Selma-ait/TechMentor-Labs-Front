import React from 'react'
import Typed from 'react-typed'
export default function Hero() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
           <p className='text-[#f4faf9] font-bold p-2 md:text-3xl sm:text-2xl '>LEARNING PLATFORM   </p>
          <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-6'> Grow with TechMentor Labs</h1>
        <div className='flex justify-content items-center'>
        <p className='md:text-4xl sm:text-4xl font-bold pl-40 '>Practice </p>
        <Typed strings={['Algorithms','Programmation' , 'DataBases']}
        className='md:text-4xl sm:text-4xl font-bold pl-2 '
        typeSpeed={60}
        backSpeed={60}/>
        </div>
        </div>
    </div>
  )
}
