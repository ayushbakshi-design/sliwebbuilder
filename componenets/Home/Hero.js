import React from 'react'

const Hero = () => {
  return (
    <div className='flex py-[70px]'>



      {/* Left Side Section */}
      <div className='w-[50%]'>
        <img className='' src="./illustrations/hero.svg" alt="Illustration Image" />
      </div>


      {/* Right hand Section */}

      <div className='w-[50%] flex justify-end'>

      <div className=' flex flex-col justify-end  '>

        {/* Text content */}
        <h3 className='text-[21px] lowercase opacity-60'>At Sliwebbuilder,</h3>
        <p className='uppercase text-[35px] font-bold pb-[56px] '>We do not Make Websties 
        <br />
         We Make <span className='underline text-red-500 text-[35px] font-semibold '> Online presence</span> </p>


        {/* Button Grid */}
        <div className='flex justify-start'>
          <button className='text-white bg-black px-10 py-3 rounded-full text-[21px] shadow-lg mr-[28px]'>Contact Us</button>
          <button className='text-popBlue border-[2px] border-popBlue px-10 py-3  rounded-full text-[21px]'>Case Studies </button>
        </div>


      </div>
      </div>




      
    </div>
  )
}

export default Hero