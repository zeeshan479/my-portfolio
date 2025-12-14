
import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'animate.css';

const Layout = ({children}) => {
  const location = useLocation()
  const audioRef =  useRef(null)

  const menus = [
      {
        lable: 'Home',
        icon: <i class="ri-user-line text-2xl"></i>,
        link: '/'
      },
      {
        lable: 'Resume',
        icon: <i class="ri-file-3-line text-2xl"></i>,
        link: '/resume'
      },
      {
        lable: 'Contact',
        icon: <i class="ri-contacts-book-line text-2xl"></i>,
        link: '/contact'
      },
      {
        lable: 'Works',
        icon: <i class="ri-briefcase-line text-2xl"></i>,
        link: '/works'
      },
  ]

  useEffect(()=>{
    const data = sessionStorage.getItem("resume")
    if(data === null)
        {
            download()
        }
  },[])

  const hanldeChange = ()=>{
    download()
  }

  const download = ()=>{
  const a = document.createElement("a")
        a.href = "/resume.pdf"
        a.download = "donwload"
        a.click()
        a.remove()
        sessionStorage.setItem("resume",true)
  }

  const openWhatsapp = ()=>{
    window.open("https://wa.me/919893676855")

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  return (
    <div>
        <div style={{backgroundImage: 'url(./images/bg-page.jpg)'}}>
          <img src='/images/logo.png' className='py-2'/>
          <div className='w-full md:flex gap-8  md:px-12 md:mt-20 md:space-y-6'>
            <div className='md:w-[27%] bg-white rounded-3xl shadow-2xl'>
              <div className='md:absolute md:top-12 md:left-32 rounded-3xl mx-auto shadow-2xl w-56 h-56'>
                <img src='./images/zishu.png' className='rounded-3xl object-cover w-56 h-56'/>
              </div>
              <div className='md:mt-40 sm:mt-20 text-center flex  flex-col gap-3'>
                <h1 className='text-3xl font-bold font-serif capitalize'>Zeeshan Khan</h1>
                <div className='text-md font-semibold bg-gray-100 w-fit mx-auto px-4 py-1 rounded-lg capitalize'>Full Stack Developer</div>
                <div className='text-2xl flex justify-center gap-4'>
                  <Link className=' bg-gray-200 hover:bg-blue-600 w-10 h-10 rounded-xl'><i class="ri-linkedin-fill text-blue-900 hover:text-white"></i></Link>
                  <Link className=' bg-gray-200 hover:bg-blue-600 w-10 h-10 rounded-xl'><i class="ri-facebook-fill text-blue-600 hover:text-white"></i></Link>
                  <Link className=' bg-gray-200 hover:bg-blue-600 w-10 h-10 rounded-xl'><i class="ri-twitter-fill text-cyan-600 hover:text-white"></i></Link>
                  <Link className=' bg-gray-200 hover:bg-blue-600 w-10 h-10 rounded-xl'><i class="ri-instagram-line text-pink-600 hover:text-white"></i></Link>
                </div>
              </div>
              <div className='bg-gray-100 w-85 p-4 rounded-xl mx-auto mt-8 flex flex-col gap-2'>
                <div className='hover:bg-pink-100 p-2 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center gap-3'>
                    <button className='w-12 h-12 hover:bg-blue-500 bg-white rounded-xl shadow-lg'>
                      <i class="ri-smartphone-line text-2xl text-pink-600 rounded hover:text-white"></i>
                    </button>
                    <div>
                      <lable className="text-sm text-gray-600 capitalize">phone</lable>
                      <h1 className='text-md font-sans'>+91 9893676855</h1>
                    </div>
                  </div>
                  <hr className='w-[100%] text-gray-300 mt-2'/>
                </div>
                <div className='hover:bg-pink-100 p-2 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center gap-3'>
                    <button className='w-12 h-12 hover:bg-blue-500 bg-white rounded-xl shadow-lg'>
                      <i class="ri-mail-line text-2xl text-cyan-700 rounded hover:text-white"></i>
                    </button>
                    <div>
                      <lable className="text-sm text-gray-600 capitalize">Email</lable>
                      <h1 className='text-md font-sans'>zeeshantechsunset@gmail.com</h1>
                    </div>
                  </div>
                  <hr className='w-[100%] text-gray-300 mt-2'/>
                </div>
                <div className='hover:bg-pink-100 p-2 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center gap-3'>
                    <button className='w-12 h-12 hover:bg-blue-500 bg-white rounded-xl shadow-lg'>
                      <i class="ri-map-pin-line text-2xl text-red-500 rounded hover:text-white"></i>
                    </button>
                    <div>
                      <lable className="text-sm text-gray-600 capitalize">Location</lable>
                      <h1 className='text-md font-sans '>Bhopal, Madhya Pradesh</h1>
                    </div>
                  </div>
                  <hr className='w-[100%] text-gray-300 mt-2'/>
                </div>
                <div className='hover:bg-pink-100 p-2 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center gap-3'>
                    <button className='w-12 h-12 hover:bg-blue-500 bg-white rounded-xl shadow-lg'>
                      <i class="ri-calendar-2-line text-2xl text-violet-600 rounded hover:text-white"></i>
                    </button>
                    <div>
                      <lable className="text-sm text-gray-600 capitalize">birthday</lable>
                      <h1 className='text-md font-sans capitalize'>03 April 1997</h1>
                    </div>
                  </div>
                  <hr className='w-[100%] text-gray-300 mt-2'/>
                </div>
              </div>
              <div className='mt-8 py-2 w-72 mx-auto'>
                <button 
                  className='w-full px-10 py-4 bg-blue-600 flex text-white gap-4 items-center gap-3 hover:bg-white border border-blue-300 hover:text-gray-900 rounded-xl'
                  onClick={hanldeChange}
                >
                  <i class="ri-download-2-fill text-3xl"></i>
                  <h1 className='font-semibold text-lg capitalize'>Download CV</h1>
                </button>
              </div>
            </div>

              
            <div className='md:w-[60%]  bg-white overflow-auto rounded-2xl scroll-container'>
              {children}
            </div>

            <div className='h-full bg-white flex flex-col gap-6 item-center p-6 rounded-2xl shadow-2xl'>
              {
                menus.map((item, index)=>(
                  <Link 
                    key={index}
                    to={item.link}
                    className='shadow-2xl w-20 h-20 bg-gray-100 flex flex-col items-center p-4 rounded-2xl mx-auto hover:bg-blue-600 hover:text-white text-gray-950'
                    style={{
                      backgroundImage: (location.pathname === item.link) ?  'linear-gradient( 111.6deg,  rgba(114,167,232,1) 9.4%, rgba(253,129,82,1) 43.9%, rgba(253,129,82,1) 54.8%, rgba(249,202,86,1) 86.3% )': 'radial-gradient( circle farthest-corner at 6.3% 21.8%,  rgba(236,6,117,1) 0%, rgba(13,32,67,1) 90% )',
                      color: 'white'
                    }}
                  >
                    {item.icon}
                    {item.lable}
                  </Link>
                ))
              }
            </div>
          </div>

          <div className='fixed top-160 right-20'>
            <button 
              className='bg-[#25D366] block w-fit px-3 py-2 rounded'
              onClick={openWhatsapp}
            >
              <i className="ri-whatsapp-line text-5xl text-white block animate__animated animate__pulse animate__infinite"></i>
            </button>
            <audio ref={audioRef} src="/sounds/whatsapp.mp3" preload="auto" />
          </div>
        </div>
    </div>
  )
}

export default Layout
