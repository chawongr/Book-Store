import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='flex justify-between mx-auto'>
            <div className=' w-1/2 my-auto'>
                <div className='text-[64px] font-bold'>Hi admin</div>
                <br />
                <div className='text-[24px] font-light'>
                    Rushing to the bookstore, excitement builds, craving the stories waiting on shelves. Each book holds promise, beckoning with adventures, knowledge, and escape into worlds unknown</div>
                <br />
                <button className='bg-black text-white px-12 py-2 text-[24px] rounded-full'><Link to="/login">Get start!</Link></button>
            </div>
            <div className='0 w-1/3'>
                <img src="https://i.pinimg.com/originals/4d/98/a1/4d98a1729cd361f6421c400ba0c6ff49.png" alt="" />
            </div>
        </div>
    )
}

export default Banner

