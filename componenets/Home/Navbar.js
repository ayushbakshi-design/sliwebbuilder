import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-[10vh] '>

        <style jsx>{
            `
                li {
                    padding-right : 14px;
                    padding-left : 14px;
                    opacity : 60%;
                    font-weight : 500;
                    font-size : 21px;
                
                }
            `
        }</style>

        {/* Navbar */}
        <div>
            {/* <img src="" alt="" /> */}
            <p className='text-uppercase text-[40px] font-bold text-popBlue'>LOGO</p>
        </div>

        <div>
            <ul className='flex justify-evenly'>
                <li>Our Work</li>
                <li>Services</li>
                <li>About</li>
            </ul>
        </div>

        <div>
            <button className='bg-popBlue px-10 py-3 text-[21px] text-white rounded-full'>Contact Us</button>
        </div>
    </nav>


  )
}

export default Navbar