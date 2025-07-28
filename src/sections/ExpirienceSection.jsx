import TitleHeader from '../components/TitleHeader.jsx'
import GlowCard from '../components/GlowCard.jsx'
import {expCards} from '../constants/index.js'
import gsap from 'gsap';
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const ExpirienceSection = () => {
  useGSAP(() => {
      gsap.utils.toArray('.timeline-card').forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        });
      });

      gsap.to('.timeline',{
        transformOrigin: 'bottom bottom',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top center',
          end: '70% center',
          onUpdate: (self) => {
            gsap.to(".timeline", {
              scaleY: 1 - self.progress,
            });
          },
        },
      });

      gsap.utils.toArray('.expText').forEach((text) => {
        gsap.from(text, {
          xPercent: 0,
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        });
      });
    }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-5 mt-2 section-padding xl:px-0"
    >
      
      <div className="w-full h-full">
        <div>
        <TitleHeader 
            title="Working & Learning Path"ll
            sub="👨🏻‍🏫 My Career Overview"
            />
      </div>
        <div className="mt-30 relative md:pl-60 pl-0 md:px-0 px-5">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 ">
                  {card.imgPath && (
                    <GlowCard card={card}>
                      <div>
                        <img src={card.imgPath} alt="exp-img" />
                      </div>
                    </GlowCard>
                  )}
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start pr-70">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-14 md:gap-10 gap-5 relative z-20 pl-7.5 ">
                      <div className="timeline-logo ">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-4xl">{card.title}</h1>
                        <p className="font-semibold text-2xl my-5 text-white-50">
                          🏫 &nbsp;{card.institution}
                        </p>
                        <p className=" text-white-50">
                          📅 &nbsp;{card.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpirienceSection