
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    

    useGSAP(() => {
        gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    );

        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
            cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
            y: 50,
            opacity: 0,
            },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.25 * (index + 1),
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
            },
            }
        );
        });

    }, []);

    return (
        <section ref={sectionRef} className='app-showcase'>
            <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                {/*LeftSide*/}
                <div className='first-project-wrapper' ref = {rydeRef}>
                    <div className='image-wrapper rounded-3xl  bg-green-100'>
                        <img src="/images/project2.png" alt="Project 2" />
                    </div>
                    
                    <div className='text-content'>
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <h2 >SoulAir: Connecting Citizens with Air Quality Through UI/UX.</h2>
                            <div className="md:px-4">
                                <a href="https://www.figma.com/proto/j9HtLxtX38pqm0eRfKrDJp/Prototipo-redise%C3%B1ado?page-id=2311%3A2&node-id=2508-122&viewport=1992%2C542%2C0.25&t=Ert65wAvHHxOoebN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2311%3A3" target="_blank" rel="noopener noreferrer" className="social-button group">
                            <div className="bg-circle" />
                            <img src="/images/figma.svg" alt="Instagram" className="p-0.5" />
                            </a>
                            </div>
                            
                        </div>
                        
                        
                        <p className='text-white md:text-xl'>Soul Air empathizes with users by providing crucial information about air quality. Its key features include 
                            presenting complex data in an interactive and educational way, using augmented reality maps, healthy routes, and personalized news.</p>
                        
                    </div>
                </div>
                {/*LRightSide*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref = {libraryRef}>
                            <div className='image-wrapper bg-amber-100'>
                            <img src="/images/project1.png" alt="Project 1"  />
                        </div>
                        
                        <div className='text-content'>
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <h2 >GAN-based facial style transfer for digital image transformation.</h2>
                                <div className="md:px-4 md:mt-5">
                                    <a href="https://colab.research.google.com/drive/1ejOXq5Hhfqp-URS8Z9IxfJ_nTyM8JlVF?usp=sharing#scrollTo=rqokPe_QJ9MN" target="_blank" rel="noopener noreferrer" className="social-button group">
                                    <div className="bg-circle" />
                                    <img src="/images/x.svg" alt="X" className="p-1.5"/>
                                    </a>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
                    <div className='project' ref = {ycDirectoryRef}>
                            <div className='image-wrapper bg-red-200'>
                            <img src="/images/project3.png" alt="Project 1" />
                            </div>
                        
                        <div className='text-content'>
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <h2 >Recreation of the Davivienda website with Node.js and MySQL for user management.</h2>
                                <div className="md:px-4 md:mt-5">
                                    <a href="https://github.com/juan-davidvp/ProyectoFinalWebNodeJS.git" target="_blank" rel="noopener noreferrer" className="social-button group">
                                    <div className="bg-circle" />
                                    <img src="/images/x.svg" alt="X" className="p-1.5"/>
                                    </a>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
                    
                </div>

                    
                    


                </div>
            </div>
            
        </div>
        </section>
        
    )
}

export default ShowcaseSection