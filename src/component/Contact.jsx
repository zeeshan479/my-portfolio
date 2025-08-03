import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Layout from './Layout'

const Contact = () => {
  const [formValue, setformValue] = useState({
    name: '',
    email: '',
    message: ''
  })
  
   const logos = 
  [
    './images/client-logo-1.png',
    './images/client-logo-2.png',
    './images/client-logo-3.png',
    './images/client-logo-4.png',
    './images/client-logo-1.png',
    './images/client-logo-1.png',
  ]

  const handleChange = (e)=>{
    e.preventDefault()
    if(formValue)
    {
      new Swal({
        icon: 'success',
        title: `Thankyou ${formValue.name} for Visiting`,
        showConfirmButton: false,
        imageUrl: "https://img.freepik.com/free-vector/colorful-welcome-lettering-banner-invite-your-guests-event_1017-43281.jpg",
        imageWidth: 500,
        imageHeight: 200,
      })
    }
  }

  const getFormValue = (e)=>{
      const input = e.target
      const key = input.name
      const value = input.value
      setformValue({
        ...formValue,
        [key]:value
      })

  } 

  return (
    <Layout>
          <div className='p-10 h-[800px] main-container '>
              <div className='flex items-center gap-6 '>
                  <h1 className='text-4xl font-bold font-serif'>Contact</h1>
                  <hr className='w-48 border border-b-3 border-blue-600 rounded-full mt-3'/>
              </div>
              <div className='min-h-screen bg-gray-50 mt-10 space-y-16 px-16 py-6'>
                <div className='flex  flex-col gap-10'>
                  <h1 class="text-4xl text-gray-600 font-sans font-bold">I am always open to discussing product</h1>
                  <p className='text-3xl font-bold font-capitalize font-mono'>design work or partnerships.</p>
                </div>
                <form className='flex flex-col w-full gap-16' onSubmit={handleChange}>
                  <div>
                    <h1 className='text-gray-950 text-lg font-medium'>Name *</h1>
                    <input 
                      onChange={getFormValue}
                      name='name' 
                      required
                      className='border-0 border-b-1 border-gray-300 outline-none w-full focus:border-b-indigo-500 '
                    />
                  </div>
                  <div>
                    <h1 className='text-gray-950 text-lg font-medium'>Email *</h1>
                    <input 
                      onChange={getFormValue}
                      type='email'
                      name='email' 
                      required
                      className='border-0 border-b-1 border-gray-300 outline-none w-full focus:border-b-teal-500  '
                    />
                  </div>
                  <div>
                    <h1 className='text-gray-950 text-lg font-medium'>Message *</h1>
                    <textarea 
                      rows={5}
                      onChange={getFormValue}
                      name='message' 
                      required
                      className='border-0 border-b-1 border-gray-300 outline-none w-full focus:border-b-lime-500  '
                    >
                    </textarea>
                  </div>
                  <button className='border border-gray-300 px-8 py-3 w-fit rounded shadow-2xl font-bold text-xl font-serif hover:bg-rose-300 '>Submit</button>
                </form>
              </div>
              <div className='h-36 slider-container  w-full bg-rose-300 py-4 overflow-hidden'>
                  <div className='flex py-4 gap-12 px-8 slider-track '>
                    {
                    logos.map((logo, index)=>
                    (
                        <img
                          key={index}
                          src={logo}
                          alt={`Client ${index}`}
                          className="h-16 mx-4 flex-shrink-0"
                        />
                    ))
                    }
                  </div>
              </div>
          </div>
    </Layout>
  )
}

export default Contact
