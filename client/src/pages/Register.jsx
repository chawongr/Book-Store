import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/register', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/')
        } else {
          alert("Error")
        }
      })
      .then(err => console.log(err))
  }

  return (
    // <section className="bg-gray-50 dark:bg-gray-900">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
    //       Register
    //     </a>
    //     <div className="w-full bg-white rounded-[20px] shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
    //           Create an account
    //         </h1>

    // <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
    //   <div>
    //     <label htmlFor="text" className="block mb-2 text-[22px] font-medium text-gray-900">
    //       Your name
    //     </label>
    //     <input onChange={e => setValues({ ...values, name: e.target.value })} type="text" name="name" id="name" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email" className="block mb-2 text-[22px] font-medium text-gray-900">
    //       Your email
    //     </label>
    //     <input onChange={e => setValues({ ...values, email: e.target.value })} type="email" name="email" id="email" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
    //   </div>
    //   <div>
    //     <label htmlFor="password" className="block mb-2 text-[22px] font-medium text-gray-900">
    //       Password
    //     </label>
    //     <input onChange={e => setValues({ ...values, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
    //   </div>
    //   <div className="flex items-start">
    //     <div className="flex items-center h-5">
    //       <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "/>
    //     </div>
    //     <div className="ml-3 text-[22px]">
    //       <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
    //         I accept the
    //         <a className="font-medium text-black hover:underline" href="#">
    //           Terms and Conditions
    //         </a>
    //       </label>
    //     </div>
    //   </div>
    //   <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[20px] text-[22px] px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
    //     Create an account
    //   </button>
    //   <p className="text-[22px] font-light text-gray-500 dark:text-gray-400">
    //     Already have an account?
    //     <Link to="/login" className="font-medium text-black hover:underline">
    //       Login here
    //     </Link>
    //   </p>
    // </form>

    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className='flex justify-between mx-auto'>
      <div className='w-1/2 my-auto '>

        <div className="flex flex-col items-center justify-center mx-auto h-screen w-full">
          <div className="w-2/3 rounded-[40px] ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-black md:text-2xl lg:text-[40px] ">
                Create an account
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="text" className="block mb-2 text-[22px] font-medium text-gray-900">
                    Your name
                  </label>
                  <input onChange={e => setValues({ ...values, name: e.target.value })} type="text" name="name" id="name" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-[22px] font-medium text-gray-900">
                    Your email
                  </label>
                  <input onChange={e => setValues({ ...values, email: e.target.value })} type="email" name="email" id="email" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-[22px] font-medium text-gray-900">
                    Password
                  </label>
                  <input onChange={e => setValues({ ...values, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-transparent border-2 border-black text-gray-900 sm:text-[22px] rounded-[20px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="mt-3 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                  </div>
                  <div className="ml-3 text-[22px]">
                    <label htmlFor="terms" className="font-light text-gray-500 ">
                      I accept the
                      <a className="font-medium text-black hover:underline ml-2">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[20px] text-[22px] px-5 py-2.5 text-center ">
                  Create an account
                </button>
                <p className="text-[22px] font-light text-gray-500 ">
                  Already have an account?
                  <Link to="/" className="font-medium text-black hover:underline ml-2">
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
      <div className=' w-1/2'>
        <div className='h-screen flex items-center mx-auto'>
          <img className=' w-10/12' src="https://media.discordapp.net/attachments/696701068381257771/1211054021687644210/image.png?ex=65ecccf3&is=65da57f3&hm=43fa805e9a777084d456e59a060dbacc1787f765f73a5a5afef7d7742463d447&=&format=webp&quality=lossless&width=629&height=678" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
