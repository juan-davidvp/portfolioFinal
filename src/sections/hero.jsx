import { words } from '../constants/index.js'
import Button from "../components/button.jsx";
import HeroExperience from "../components/models/HeroModels/HeroExperience";

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

        
        {/* RIGHT: 3D Model or Visual */}
        <figure className="hero-visual-container">
            <div className="  rounded-3xl p-4 md:p-6 flex-col-center gap-4 w-full max-w-[320px] md:max-w-[380px] border border-white/20  neon-effect">
            <div className="interactive-container ">
                <HeroExperience />
                
                
            </div>
            <div className="flex-col-center  gap-6 w-full pt-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Juan David Velez</h2>
                        <a
                            href="/assets/juanDavidVelezCV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full group"
                        >
                            <div className="bg-purple-50 group-hover:bg-purple-50/90 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                <span>Download CV</span>
                            </div>
                        </a>
                    </div>

            </div>
            
        </figure>

        {/*LEFT: HERO CONTECT*/}
        <header className='flex-col-center md:w-full w-screen'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1 className='md:h-28 h-12 md:text-[94px] text-[40px]'>Multimedia</h1>
                    <h1>
                        <span className='slide md:pl-0.5 pl-0'>
                            <span className='wrapper'>
                                {words.map((word) => (
                                    <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <span>{word.text}</span>
                                    <div className='xl:size-14 md:size-10 size-7 md:p-4 p-2 rounded-full bg-purple-50 center flex  items-center justify-center' >
                                        <img 
                                        src={word.imgPath} 
                                        alt={word.text} 
                                        
                                    />
                                    </div>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <p className="text-white md:text-xl text-xs relative z-10 pointer-events-none md:mt-30 mt-15 font-light">
                        I build bridges between code and design to create digital experiences that not only work, but also fascinate. I am a full stack developer with the vision of a multimedia designer.
                    </p>
                    
                </div>
                <Button
                    text="See My Work"
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="counter"
                    href="/assets/juanDavidVelezCV.pdf"
                />

                <div className="flex items-center justify-start gap-4  ">
                    <a href="https://www.instagram.com/juanvelezdp_/" target="_blank" rel="noopener noreferrer" className="social-button group">
                        <div className="bg-circle" />
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://x.com/juanvelezdp_" target="_blank" rel="noopener noreferrer" className="social-button group">
                        <div className="bg-circle" />
                        <img src="/images/x.svg" alt="X" />
                    </a>
                    <a href="https://co.linkedin.com/in/juan-david-velez-piedrahita-83389a347" target="_blank" rel="noopener noreferrer" className="social-button group">
                        <div className="bg-circle" />
                        <img src="/images/linkedin.svg" alt="LinkedIn" />
                    </a>
                </div>
                
            </div>
        </header>
        </div>
    </section>
    )
}

export default hero