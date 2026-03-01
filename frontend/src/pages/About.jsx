import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='flex my-10 flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto , Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime, deserunt sed beatae alias similique.</p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, optio! Consequatur vel explicabo pariatur ipsum nemo dolore enim eligendi animi voluptates, unde aliquid, quod rerum accusamus dolores ab, sit accusantium!</p>
          <b className='text-gray-800'> Our Vision</b>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos neque sequi, aspernatur aliquid labore consequuntur alias quas reiciendis, laudantium beatae, ad nulla vitae ea ipsum minima illo ipsa quia. Temporibus?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US </span></p>
      </div>

      <div className='flex flex-col  md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare proffesional in your area </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b> Personalization:</b>
          <p>Tailored recomendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
