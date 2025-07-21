import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const firstProjectRef = useRef(null);
    const secondProjectRef = useRef(null);
    const thirdProjectRef = useRef(null);
    const descriptionRef = useRef(null);

    const [isAnimating, setIsAnimating] = useState(false);
    const [projectItems, setProjectItems] = useState(projects);
    const [animationDirection, setAnimationDirection] = useState(null);

    // Animación de entrada inicial (sin cambios)
    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
        );
        const cards = [firstProjectRef.current, secondProjectRef.current, thirdProjectRef.current];
        cards.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.25 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    /**
     * Maneja la transición horizontal de los proyectos.
     * @param {'next' | 'prev'} direction - La dirección de la transición.
     */
    // --- LÓGICA DE ANIMACIÓN CORREGIDA ---
    // Este useEffect se ejecuta DESPUÉS de que el estado `projectItems` cambia y
    // el componente se re-renderiza. Se encarga de la animación de ENTRADA.
    useEffect(() => {
        // Solo se ejecuta si la transición fue iniciada por un clic
        if (!isAnimating || !animationDirection) return;

        const targets = [firstProjectRef.current, secondProjectRef.current, thirdProjectRef.current];
        // La animación de entrada viene del lado opuesto a la de salida
        const xAmount = animationDirection === 'next' ? 50 : -50;

        // Animación de ENTRADA para los 3 proyectos
        gsap.fromTo(targets,
            { x: xAmount, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power2.out',
                // Cuando termina, permite que se realicen nuevas animaciones
                onComplete: () => {
                    setIsAnimating(false);
                    setAnimationDirection(null);
                }
            }
        );

        // Animación de ENTRADA para la descripción
        gsap.fromTo(descriptionRef.current,
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
            "<0.35" // Se ejecuta un poco después de que la animación principal comience
        );

    }, [projectItems]); // Se dispara cada vez que el orden de los proyectos cambia

    /**
     * Inicia la animación de SALIDA y luego actualiza el estado.
     * @param {'next' | 'prev'} direction
     */
    const handleTransition = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAnimationDirection(direction);

        const targets = [firstProjectRef.current, secondProjectRef.current, thirdProjectRef.current];
        const xAmount = direction === 'next' ? -50 : 50;

        // Animación de SALIDA para los 3 proyectos
        gsap.to(targets, {
            x: xAmount,
            opacity: 0,
            duration: 0.45,
            stagger: 0.25,
            ease: 'power2.in',
            // Cuando termina la salida, actualiza el estado,
            // lo que disparará el useEffect de arriba.
            onComplete: () => {
                if (direction === 'next') {
                    setProjectItems(prev => {
                        const newItems = [...prev];
                        newItems.push(newItems.shift());
                        return newItems;
                    });
                } else { // prev
                    setProjectItems(prev => {
                        const newItems = [...prev];
                        newItems.unshift(newItems.pop());
                        return newItems;
                    });
                }
            }
        });
    };

    
    const firstProject = projectItems[0];
    const secondProject = projectItems[1];
    const thirdProject = projectItems[2];

    return (
        <section ref={sectionRef} className='app-showcase'>
             <div className="showcase-controls">
                                      <button onClick={() => handleTransition('next')} disabled={isAnimating} className="control-button">&lt;</button>
                </div>
             <div className='showcase-container-wrapper'>
                <div id='work' className='showcase-content-layout'>
                    <div className='showcaselayout'>
                        {/* Se añade una clave (key) única al contenedor principal de cada proyecto. */}
                        {/* Esto ayuda a React y GSAP a identificar correctamente los elementos después de un re-render. */}
                        
                        {/* --- Lado Izquierdo: Proyecto Principal --- */}
                        <div className='first-project-wrapper' ref={firstProjectRef} key={firstProject.title}>
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
                                <p ref={descriptionRef} className='text-white md:text-xl'>{firstProject.description}</p>
                            </div>
                        </div>

                        {/* --- Lado Derecho: Siguientes dos proyectos --- */}
                        <div className='project-list-wrapper'>
                            <div className='project' ref={secondProjectRef} key={secondProject.title}>
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
                            <div className='project' ref={thirdProjectRef} key={thirdProject.title}>
                                <div className={`image-wrapper ${thirdProject.color}`}>
                                    <img src={thirdProject.image} alt={thirdProject.title} />
                                </div>
                                <div className='text-content'>
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
             <div className="showcase-controls">

                    <button onClick={() => handleTransition('prev')} disabled={isAnimating} className="control-button">&gt;</button>
                </div>
        </section>
    );
}

export default ShowcaseSection;
