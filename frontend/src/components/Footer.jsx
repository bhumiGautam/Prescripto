import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ----left section--- */}

        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas, expedita est esse placeat voluptatibus dicta minima facere aliquid, eaque porro optio. Nulla nobis maiores rerum eaque quis ea fugit.</p>
        </div>

           {/* ----center section--- */}

           <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li> Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
           </div>

              {/* ----right section--- */}

              <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 7759887117</li>
                    <li> gautamkumarpandey149@gmail.com</li>
                </ul>

              </div>
      </div>

      {/* ------copy right text----- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ Prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
