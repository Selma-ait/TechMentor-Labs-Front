import React, { useState } from 'react'
import TechMentorLabs from '../TechMentorLabs.jpg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
 const Navbar=()=> {
    const [nav, setNav]= useState(true);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className="flex justify-between items-center h-[120px] max-w-[1240px] mx-auto px-4 rounded-b-2xl ">
         <img src={TechMentorLabs}  className="w-[150px] h-[90px] rounded-3xl  overflow-hidden"alt="Logo" />
      <ul className='flex hidden'>
        <li className='p-4 text-blue-500'>Home</li>
        <li className='p-4 text-blue-500'>Cours</li>
        <li className='p-4 text-blue-500 '>Ressource</li>
        <li className='p-4 text-blue-500'>About</li>
        <li className='p-4 text-blue-500'>Contact</li>
    </ul>
    <div onClick={handleNav}>
        {
            !nav ? <AiOutlineClose color ='#4299e1' size={20}/>:<AiOutlineMenu color ='#4299e1' size={20}/>
        }
        
    </div>
    <div className={!nav ? 'fixed  left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500': 'fixed left-[-100%]'}> 
    <img src={TechMentorLabs}  className="w-[300px] h-[220px] rounded-3xl  overflow-hidden"alt="Logo" />
    <ul className='uppercase p-4'>
        <li className=' pt-10 p-4 text-blue-500 border-b border-[#bcbcbc]'>Home</li>
  
        <li className='p-4  text-blue-500 border-b border-[#bcbcbc]'>Cours</li>
        <li className='p-4  text-blue-500 border-b border-[#bcbcbc]'>Ressource</li>
        <li className='p-4  text-blue-500 border-b border-[#bcbcbc]'>About</li>
        <li className='p-4  text-blue-500 border-b border-[#bcbcbc]'>Contact</li>
    </ul>
    </div>
    </div>
  )
}
export default Navbar