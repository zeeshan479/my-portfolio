import React, { useEffect } from 'react'
import Layout from './Layout'
import { Link, useLocation } from 'react-router-dom'
const Resume = () => {
  
  const skills = [
    {
      title: <p className='text-gray-400 capitalize'>nodejs</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>mongodb</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>docker</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>redis</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>kafka</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>grpc</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>rabitmq</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>aws cloud</p>,
    },
    {
      title: <p className='text-gray-400 capitalize'>ci/cd</p>,
    },
  ]
  return (
     <Layout>
          <div className="h-[800px] main-container md:p-4">
              <div className="min-h-screen bg-[url('./images/frame.png')] bg-cover bg-center w-full">
                <div 
                  className='md:flex md:py-12 gap-4'>
                  <div 
                    className='p-4'>
                    <div 
                      className="w-[270px] h-[270px] bg-cyan-600 rounded-full mx-24"
                      style={{boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.9)'}}
                    >
                      <div className="w-[250px] h-[250px] rounded-full">
                        <img 
                          src='./images/zishu.png' 
                          className='w-[250px] h-[250px] rounded-full'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div 
                      className='mt-6 bg-rose-100 shadow-2xl'
                      style={{boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.9)'}}
                    >
                      <div className='px-6 py-6'>
                        <h1 className='text-3xl text-teal-600 font-bold font-sans capitalize'>zeeshan khan</h1>
                        <p className='text-lg font-bold font-mono capitalize'>Full Stack Developer</p>
                      </div>
                      <div className='px-6 py-5 md:flex flex-col gap-1'>
                        <h1 className='text-3xl text-teal-600 font-bold font-sans capitalize'>Contact Me</h1>
                        <p className='text-md text-gray-600'>+91 9698091405</p>
                        <p className='text-md text-gray-600'>zeeshankhantechsunset@gmail.com</p>
                        <p className='text-md text-gray-600 capitalize'>Bhopal, Madhya Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='md:flex'>
                  <div className='md:w-6/12 md:pl-8 md:py-8 md:space-y-2 sm:space-y-4'>
                    <div className='flex gap-6 items-center sm:space-y-4'>
                      <button className='bg-red-400 w-12 h-12 rounded-full'><i class="ri-image-edit-line text-3xl text-white"></i></button>
                      <h1 className='text-2xl font-bold capitalize bg-red-200 px-4 py-1 text-orange-600 rounded'>work experience</h1>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <button className='w-12 h-12'></button>
                      <div>
                        <h6 className='text-lg font-bold'>Full Stack Developer (3 + years)</h6>
                        <p className=' text-sm font-medium text-gray-600'>Techsunset [Oct 2022 - May 2026]</p>
                      </div>
                    </div>
                    <div className='border-b-2 border-rose-600 py-2'></div>

                    <div className='py-8 space-y-2'>
                      <div className='flex gap-6 items-center'>
                        <button className='bg-red-400 w-12 h-12 rounded-full'><i class="ri-user-fill text-3xl text-white"></i></button>
                        <h1 className='text-2xl font-bold capitalize bg-red-200 px-4 py-1 text-orange-600 rounded'>about</h1>
                      </div>
                      <div className='flex gap-6 items-center'>
                        <button className='w-12 h-12'></button>
                        <div className='text-justify px-6'>
                          <p className='text-gray-400'>
                            Full-Stack MERN Developer with extensive experience in JavaScript, React, Node.js, and MongoDB. Expert in designing and developing scalable web applications, enhancing user experience, and optimizing backend performance for high-traffic platforms
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-2 border-rose-600'></div>
                    
                    <div className=' py-8 space-y-2'>
                      <div className='flex gap-6 items-center'>
                        <button className='bg-red-400 w-12 h-12 rounded-full'><i class="ri-graduation-cap-fill text-3xl text-white"></i></button>
                        <h1 className='text-2xl font-bold capitalize bg-red-200 px-4 py-1 text-orange-600 rounded'>Education</h1>
                      </div>
                      <div className='flex gap-6 items-center'>
                        <button className='w-12 h-12'></button>
                        <div className='space-y-4'>
                          <div>
                            <h6 className='text-lg font-bold font-serif'>BTECH</h6>
                            <p className='text-gray-600 text-sm'>From RGPV University Bhopal - [2015-2019] </p>
                          </div>
                          <div>
                            <h6 className='text-lg font-bold font-serif'>Class XII </h6>
                            <p className='text-gray-600 text-sm'>From M.P Board - [2015]</p>
                          </div>
                          <div>
                            <h6 className='text-lg font-bold font-serif'>Class X </h6>
                            <p className='text-gray-600 text-sm'>From M.P Board - [2013]</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b-2 border-rose-600 py-2'></div>
                    
                    <div className=' py-8 space-y-2'>
                    </div>
                  </div>
                  <div className=' border border-amber-600'></div>
                  
                  <div className='md:w-6/12 md:pl-16 sm:md-8 py-8 space-y-1'>
                    <div className='flex gap-6 items-center'>
                      <button className='bg-red-400 w-12 h-12 rounded-full'><i class="ri-settings-2-line text-3xl text-white"></i></button>
                      <h1 className='text-2xl font-bold capitalize bg-red-200 px-4 py-1 text-orange-600 rounded'>skills</h1>
                    </div>
                    <div className='flex gap-6 items-center'>
                      <button className='w-12 h-12'></button>
                      <div className='space-y-3'>
                        <h1 className='text-orange-600 font-bold text-2xl'>Expertise Skills</h1>
                        {
                          skills.map((item, index)=>(
                          <div key={index} className='flex gap-3' >
                            <i class="ri-gemini-fill font-bold"></i>
                            {item.title}  
                          </div>     
                          ))
                        }  
                      </div>
                    </div>
                    <div className='border-b-2 border-rose-600 py-2'></div>

                  
                    
                    <div className=' py-8 space-y-2'>
                      <div className='flex gap-6 items-center'>
                        <button className='bg-red-400 w-12 h-12 rounded-full'><i class="ri-git-repository-fill text-3xl text-white"></i></button>
                        <h1 className='text-2xl font-bold capitalize bg-red-200 px-4 py-1 text-orange-600 rounded'>Projects</h1>
                      </div>
                      <div className='flex gap-6 items-center'>
                        <button className='w-12 h-12'></button>
                        <div className='space-y-4'>
                          <div className='flex gap-3 hover:text-cyan-600'>
                            <i class="ri-folder-open-fill font-bold"></i>
                            <Link  
                              to='https://www.livspace.com' 
                              className='text-gray-400 capitalize'
                            >project 1</Link>  
                          </div> 
                          <div className='flex gap-3 hover:text-cyan-600'>
                            <i class="ri-folder-open-fill font-bold"></i>
                            <Link 
                              to='https://srichaitanyascore.com' 
                              className='text-gray-400 capitalize'
                            >project 2</Link>  
                          </div> 
                          <div className='flex gap-3 hover:text-cyan-600'>
                            <i class="ri-folder-open-fill font-bold"></i>
                            <Link 
                              to='https://www.homelane.com' 
                              className='text-gray-400 capitalize'
                            >project 3</Link>  
                          </div> 
                          <div className='flex gap-3 hover:text-cyan-600'>
                            <i class="ri-folder-open-fill font-bold"></i>
                            <Link 
                              to='https://www.vaishnaviinteriors.in' 
                              className='text-gray-400 capitalize'
                            >project 4</Link>  
                          </div> 
                          <div className='flex gap-3 hover:text-cyan-600'>
                            <i class="ri-folder-open-fill font-bold"></i>
                            <Link 
                              to='https://www.ugaoo.com' 
                              className='text-gray-400 capitalize'
                              >project 5</Link>  
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='border-b-2 border-rose-600 md:py-2'></div>
                    
                    <div className='md:py-8 space-y-2'>
                    </div>
                  </div>
              </div>
              </div>
          </div>
    </Layout>
  )
}

export default Resume
