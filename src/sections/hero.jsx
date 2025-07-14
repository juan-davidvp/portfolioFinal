import React from 'react'
import { words } from '../constants/index.js'
import Button from "../components/button";


const hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
        {/*LEFT: HERO CONTECT*/}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1 className='md:h-20 h-10 md:text-[70px] text-[30px]'>Multimedia</h1>
                    <h1>
                        <span className='slide'>
                            <span className='wrapper'>
                                {words.map((word) => (
                                    <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <span>{word.text}</span>
                                    <img 
                                        src={word.imgPath} 
                                        alt={word.text} 
                                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' 
                                    />
                                    
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <p className="text-white-50 md:text-xl text-xs relative z-10 pointer-events-none md:mt-24 mt-14">
                        Hi, I'm Juan David Velez, a passionate web developer & designer <br/> with a knack for creating stunning websites.
                    </p>
                    
                </div>
                <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
            </div>
        </header>
        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout border-red-200 border-2 rounded-lg">

          </div>
        </figure>
        </div>
    </section>
  )
}

export default hero