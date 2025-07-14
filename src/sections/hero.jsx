import React from 'react'
import { words } from '../constants/index.js'
import Button from "../components/button";


const hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='absolute bottom-0 right-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
        {/*LEFT: HERO CONTECT*/}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-44 px-8 md:pt-0 pt-14'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1 className='md:h-28 h-12 md:text-[94px] text-[40px]'>Multimedia</h1>
                    <h1>
                        <span className='slide md:pl-0.5 pl-0'>
                            <span className='wrapper'>
                                {words.map((word) => (
                                    <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <span>{word.text}</span>
                                    <img 
                                        src={word.imgPath} 
                                        alt={word.text} 
                                        className='xl:size-14 md:size-10 size-7 md:p-4 p-2 rounded-full bg-white-50' 
                                    />
                                    
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <p className="text-white-50 md:text-xl text-xs relative z-10 pointer-events-none md:mt-30 mt-15">
                        Hi, I'm Juan David Velez, a passionate web developer & designer with a knack for creating stunning websites.
                    </p>
                    
                </div>
                <Button
                    text="Download CV"
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="counter"
                    href="/assets/juanDavidVelezCV.pdf"
                />

                <div className="flex items-center justify-start gap-4 mt-2 ">
  {/* Añade la clase 'group' aquí */}
  <a href="https://www.instagram.com/juanvelezdp_/" target="_blank" rel="noopener noreferrer" className="social-button group">
    <div className="bg-circle" />
    <img src="/images/instagram.svg" alt="Instagram" />
  </a>
  {/* Añade la clase 'group' aquí */}
  <a href="https://x.com/juanvelezdp_" target="_blank" rel="noopener noreferrer" className="social-button group">
    <div className="bg-circle" />
    <img src="/images/x.svg" alt="X" />
  </a>
  {/* Añade la clase 'group' aquí */}
  <a href="https://co.linkedin.com/in/juan-david-velez-piedrahita-83389a347" target="_blank" rel="noopener noreferrer" className="social-button group">
    <div className="bg-circle" />
    <img src="/images/linkedin.svg" alt="LinkedIn" />
  </a>
</div>


            </div>
        </header>
        {/* RIGHT: 3D Model or Visual */}
        <figure className="hero-visual-container">
            <div className="video-container md:w-auto w-70 ">
                <video
                    src="/videos/EmojiMovie.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg"
                ></video>
            </div>
        </figure>
        </div>
    </section>
    )
}

export default hero