import React, { useRef } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom';

const Home = () => {
  
  const cards = 
  [
    {
      img: <img src='./ziya/super.png' className='w-full'/>,
      title: 'Livspace',
      domain: 'https://www.livspace.com'
    },
    {
      img: <img src='./ziya/fish.png' className='w-full'/>,
      title: 'Sri Chaitanya SCORE 2025',
      domain: 'https://srichaitanyascore.com'
    },
    {
      img: <img src='./ziya/winni.png' className='w-full'/>,
      title: 'HomeLane',
      domain: 'https://www.homelane.com'
    },
    {
      img: <img src='./ziya/abscount.png' className='w-full'/>,
      title: 'Vaishnavi Interiors',
      domain: 'https://www.vaishnaviinteriors.in'
    },
    {
      img: <img src='./ziya/diffrentiators.png' className='w-full'/>,
      title: 'Ugaoo',
      domain: 'https://www.ugaoo.com'
    },
    {
      img: <img src='./ziya/clovedental.png' className='w-full'/>,
      title: 'Livspace',
      domain: 'https://www.livspace.com'
    },
  ];

  const logos = 
  [
    './images/client-logo-1.png',
    './images/client-logo-2.png',
    './images/client-logo-3.png',
    './images/client-logo-4.png',
    './images/client-logo-1.png',
    './images/client-logo-1.png',
  ]
  
  const scrollRefs = useRef([]);
  const intervalRefs = useRef([]); // yahan har card ka interval store karenge

  const startScroll = (index, direction = "up") => {
    const container = scrollRefs.current[index];
    if (!container) return;

    // Pehle se chal raha interval clear karo
    clearInterval(intervalRefs.current[index]);

    const maxScroll = container.scrollHeight - container.clientHeight;

    const interval = setInterval(() => {
      if (direction === "down") {
        if (container.scrollTop < maxScroll) {
          container.scrollTop += 1;
        } else {
          clearInterval(interval);
        }
      } else {
        if (container.scrollTop > 0) {
          container.scrollTop -= 1;
        } else {
          clearInterval(interval);
        }
      }
    }, -50);

    // Naya interval store karo
    intervalRefs.current[index] = interval;
  };

    
  return (
    <Layout>
          <div className='flex-1 p-12 h-[800px] main-container'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-6'>
                  <h1 className='text-4xl font-bold font-serif'>Portfolio</h1>
                  <hr className='w-48 border border-b-3 border-blue-600 rounded-full mt-3'/>
              </div>
              <div className='text-justify text-lg flex flex-col gap-3 text-gray-500'>
                  <p>
                    MERN Stack Developer focused on delivering high-quality, scalable web applications that enhance user engagement. 
                    Proficient in React, Node.js, Express.js, and MongoDB with a growth mindset and dedication to continuous learning. 
                    Seeking to contribute to impactful titles in a fast-paced development team
                  </p>
              </div>
            </div>

            <div className='flex flex-col mt-6 gap-6 p-2'>
                <h1 className='text-3xl font-serif font-bold'>what I Do !</h1>
                <div className='md:grid md:grid-cols-2 gap-8 space-y-4'>
                  {
                    cards.map((items, index)=>(
                      <div>
                        <div
                            ref={(el) => (scrollRefs.current[index] = el)}
                            onMouseEnter={() => startScroll(index, "up")}
                            onMouseLeave={() => startScroll(index, "down")}
                            className="h-80 w-72 overflow-y-scroll border border-gray-200 relative rounded-t-xl shadow-2xl mx-auto"
                            style={{overflow: 'hidden'}}
                        >
                          {items.img}
                        </div>
                        <div className='h-20 w-72 bg-[#FFF4F4] rounded-b-xl mx-auto border border-gray-200 px-6 py-4 space-y-2'>
                          <p className='text-sm text-gray-500 '>Travel Landing , UX/UI</p>
                          <Link 
                            to={items.domain}
                            className='font-semibold font-serif text-stone-600'
                          >
                            {items.title}
                          </Link>
                        </div>
                      </div>
                    ))
                  }
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
          </div>
    </Layout>
  )
}

export default Home
