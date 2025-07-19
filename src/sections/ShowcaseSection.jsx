import { useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from '../constants'; 

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const fristPropjectAnimation = useRef(null);
    const secondtPropjectAnimation = useRef(null);
    const thirdPropjectAnimation = useRef(null);

    

    useGSAP(() => {
        gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    );

        const cards = [fristPropjectAnimation.current, secondtPropjectAnimation.current, thirdPropjectAnimation.current];
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

    // Estado para manejar el orden de los proyectos en el carrusel
    const [projectItems, setProjectItems] = useState(projects);
    /**
   * Maneja el clic en el botón "siguiente".
   * Rota el array de proyectos moviendo el primer elemento al final.
   */
    const handleNext = () => {
        setProjectItems(prevItems => {
        const newItems = [...prevItems];
        const firstItem = newItems.shift(); // Saca el primer elemento
        newItems.push(firstItem);        // Lo añade al final
        return newItems;
        });
    };

    /**
     * Maneja el clic en el botón "anterior".
     * Rota el array de proyectos moviendo el último elemento al principio.
     */
    const handlePrev = () => {
        setProjectItems(prevItems => {
        const newItems = [...prevItems];
        const lastItem = newItems.pop();     // Saca el último elemento
        newItems.unshift(lastItem);        // Lo añade al principio
        return newItems;
        });
    };

    const firstProject = projectItems[0];
    const secondProject = projectItems[1];
    const thirdProject = projectItems[2];

    return (
        <section ref={sectionRef} className='app-showcase'>
             <div className="showcase-controls ml-24">
                    <button onClick={handleNext} className="control-button">&lt;</button>
                </div>
            <div id='work' className='app-showcase px-12'>
               
            <div className='w-full'>

                

                <div className='showcaselayout'>
                {/* --- Lado Izquierdo: Proyecto Principal --- */}
                    {/* Este bloque ahora muestra dinámicamente el primer proyecto del array */}
                    <div className='first-project-wrapper' ref={fristPropjectAnimation}>
                        <div className={`image-wrapper rounded-3xl ${firstProject.color}`}>
                            <img src={firstProject.image} alt={firstProject.title} />
                        </div>
                        
                        <div className='text-content'>
                            <div className="flex flex-col md:flex-row md:items-center gap-2">
                                <h2>{firstProject.title}</h2>
                                <div className="md:px-4">
                                    <a href={firstProject.link} target="_blank" rel="noopener noreferrer" className="social-button group">
                                        <div className="bg-circle" />
                                        <img src={firstProject.btnlogo} alt="Project link" className="p-1" />
                                    </a>
                                </div>
                            </div>
                            <p className='text-white md:text-xl'>{firstProject.description}</p>
                        </div>
                    </div>
                    {/* --- Lado Derecho: Siguientes dos proyectos --- */}
                        <div className='project-list-wrapper'>
                            {/* Segundo Proyecto */}
                            <div className='project' ref={secondtPropjectAnimation}>
                                <div className={`image-wrapper ${secondProject.color}`}>
                                    <img src={secondProject.image} alt={secondProject.title} />
                                </div>
                                <div className='text-content'>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                                        <h2>{secondProject.title}</h2>
                                        <div className="md:px-4 md:mt-5">
                                            <a href={secondProject.link} target="_blank" rel="noopener noreferrer" className="social-button group">
                                                <div className="bg-circle" />
                                                <img src={secondProject.btnlogo} alt="Project link" className="p-1.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Tercer Proyecto */}
                            <div className='project' ref={thirdPropjectAnimation}>
                                <div className={`image-wrapper ${thirdProject.color}`}>
                                    <img src={thirdProject.image} alt={thirdProject.title} />
                                </div>
                                <div className='text-content' >
                                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                                        <h2>{thirdProject.title}</h2>
                                        <div className="md:px-4 md:mt-5">
                                            <a href={thirdProject.link} target="_blank" rel="noopener noreferrer" className="social-button group">
                                                <div className="bg-circle" />
                                                <img src={thirdProject.btnlogo} alt="Project link" className="p-1.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            {/* --- Botones de Navegación del Slider --- */}
                
                
        </div>
        <div className="showcase-controls mr-24">
                    <button onClick={handlePrev} className="control-button">&gt;</button>
                </div>
        </section>
        
    )
}

export default ShowcaseSection