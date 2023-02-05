import React, { useState } from 'react'
import michelle from '../images/avatar-michelle.jpg'
import drawers from '../images/drawers.jpg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import share from '../images/icon-share.svg'
const Article = () => {

  const [active, setActive] = useState('hidden')

  const HandleClick =()=>{
    setActive((prev) => prev === 'opacity-100' ? 'opacity-0' : 'opacity-100' )
  }
  const Anm = {
    transition: "all 0.5s ease-in-out",
  }


  return (
    <main>
    <div className='w-full h-screen flex flex-col items-center justify-center bg-LightGrayishBlue opa'>
      <div className='w-[20.436rem] h-auto flex flex-col bg-white rounded-xl shadow-lg lg:flex lg:flex-row lg:w-[45.75rem] lg:h-[17.5rem]'>
        <div >
          <img src={drawers} alt="" className='w-full h-[12.5rem] rounded-t-xl lg:h-full lg:w-[17.875rem] lg:object-cover lg:rounded-l-xl lg:rounded-tr-none' />
        </div>
        <div className=' px-8 lg:w-[27.875rem]'>
          <div className='flex flex-col '>
            <h1 className='font-Manrope text-lg font-bold my-6'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className=' font-Manrope text-[0.813rem] font-medium mb-9'>Ever been in a room and felt like something is missing?Perhaps it felt slightly bare and uninviting. I've fot some tips
              to make you feel any room feel complete.</p>
          </div>
          <div className=' flex flex-row w-full  justify-between items-center py-5'>
            <div className='flex space-x-3 items-center'>
              <img src={michelle} alt="michelle-avatar" className='w-10 h-10 rounded-full' />
              <p className='text-[0.813rem'>Michelle Appleton <br /> 28 June 2020</p>
            </div>
            <div className='bg-LightGrayishBlue  w-8 h-8 rounded-full flex items-center justify-center cursor-pointer duration-300 hover:bg-slate-200' onClick={HandleClick}>
              <img src={share} alt="" />
            </div>
          </div>
        </div>
        <div className={`${active} flex bg-VDGB w-[20.436rem]  h-16 items-center justify-center px-8 space-x-6 rounded-b-xl absolute bottom-0 translate-y-[-3rem] lg:left-2/3 lg:${active} lg:translate-y-[-17rem] lg:rounded-t-xl`} style={Anm}>
          <p className=' font-Manrope text-LightGrayishBlue'>SHARE</p>
          <img src={facebook} alt="" className='object-cover cursor-pointer' />
          <img src={twitter} alt="" className='object-cover cursor-pointer' />
          <img src={pinterest} alt="" className='object-cover cursor-pointer' />
          <div className='bg-LightGrayishBlue  w-8 h-8 rounded-full flex items-center justify-center cursor-pointer lg:hidden'  onClick={HandleClick}>
            <img src={share} alt="" />
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Article