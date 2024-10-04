"use client"
import React, { useState } from 'react';

function Section2() {
    const [hovered, setHovered] = useState(false);

  return (
    <div className='mt-28 ml-5 text-sm'>
      <p className='text-5xl font-semibold'> Our Services</p>
      <div className='flex space-x-5 mt-10'>
      <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card1img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'Designing Services' : 'Designing Services'}</p>
            <p className="mt-5">{hovered ? 'We create intuitive UI/UX designs and provide strategic IT consulting to elevate your brand and refine your operations.' : 'Turning your visions into reality'}</p>
            {hovered && (<button className='mt-[11rem] ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>
        
        <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card2img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-7">{hovered ? 'Saas Development' : 'Saas Development'}</p>
            <p className="mt-5">{hovered ? 'Your business is unique, and so are your software needs. Our custom SaaS development services focus on building cloud- based platforms that are specifically designed to support your operations. From onboarding to subscription management, we ensure that your platform grows with your...' : 'Turning your visions into reality'}</p>
            {hovered && (<button className='mt-[4.5rem] ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>
        <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card3img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'Digital solutions for modern businesses ' : 'Digital solutions for modern businesses '}</p>
            <p className="mt-5">{hovered ? 'At ProCohat, we believe in driving your business forward with custom digital solutions designed for the modern landscape. From seamless software development to powerful cloud infrastructure, we deliver technology that adapts to your needs. Whether youre looking to streamline internal pr' : 'Turning your visions into reality'}</p>
            {hovered && (<button className='mt-6 ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>
        <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card4img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'It consultancy & CTO services' : 'It consultancy & CTO services'}</p>
            <p className="mt-5">{hovered ? 'Navigating the complexities of todays fast-evolving tech landscape can be challenging. At ProCohat, we provide IT consulting and CTO as a Service (CTOaaS) to help your business make informed decisions and implement the right technology strategies. Our expert consultants work as an extensio...' : 'Turning your visions into reality'}</p>
            {hovered && (<button className='mt-6 ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>


</div>

<div className='flex space-x-5 mt-9'>
      <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card5img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'Optimize business resource solutions ' : 'Optimize business resource solutions '}</p>
            <p className="mt-5">{hovered ? 'At ProCohat, we understand that running a business requires focus on core activities. Thats why we offer Business Resource Outsourcing (BRO) services that allow you to delegate non-core tasks to trusted experts. Our tailored outsourcing solutions free up your internal resources, enabling you to concentrate on...' : 'Maximizing efficiency through optimized business resource solutions.'}</p>
            {hovered && (<button className='mt-2 ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>
        
        <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card6img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-7">{hovered ? 'AI Adoption and Implementation' : 'AI Adoption and Implementation'}</p>
            <p className="mt-5">{hovered ? 'Artificial Intelligence (AI) is no longer the future its here, and its changing the way businesses operate. At ProCohat, we help organizations adopt and implement Al solutions that drive efficiency, innovation, and growth. Whether youre looking to automate routine tasks or unlock insights from vast amou...' : 'Accelerating innovation through AI adoption and seamless implementation'}</p>
            {hovered && (<button className='mt-6 ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
        </div>
        <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card7img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'Custom development & Implementation' : 'Custom development & Implementation'}</p>
            <p className="mt-5">{hovered ? 'At ProCohat, we understand that every business is unique, and so are its technology needs. Thats why we offer custom development services that allow you to create software, platforms, and applications that fit your specific requirements. Whether you need a bespoke solution for internal operations...' : 'Tailoring solutions to your needs with custom development and seamless implementation.'}</p>
            {hovered && (<button className='mt-[2rem] ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            
            </div>
</div>
       <div className={`relative h-[26rem] w-[19rem] rounded-2xl overflow-hidden transition-all duration-300`}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} >
        <div className={`absolute inset-0 bg-[url('/images/card8img.png')] bg-cover bg-center transition-all duration-300 ${hovered ? 'filter blur-[4px]' : ''}`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#03030300] opacity-70"></div>
        <div className="relative z-10 p-4 text-white">
            <p className="text-2xl font-semibold mt-5">{hovered ? 'Data analysis' : 'Data analysis'}</p>
            <p className="mt-5">{hovered ? 'At ProCohat, we understand that every business is unique, and so are its technology needs. Thats why we offer custom development services that allow you to create software, platforms, and applications that fit your specific requirements. Whether you need a bespoke solution for internal operations...' : 'Unlocking insights and driving decisions through data analysis.'}</p>
            {hovered && (<button className='mt-16 ml-32 font-semibold'>EXPAND<img src='/images/arrowvectorwhite.png' className='ml-[5rem] mt-[-22px]'></img></button>)}
            </div>
        </div>
    </div>
</div>
  )
}

export default Section2
