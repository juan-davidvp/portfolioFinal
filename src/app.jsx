import Hero from './sections/hero.jsx';
import AnimatedCounter from "./components/AnimatedCounter";
import NavBar from "./components/NavBar.jsx";
import TitleHeader from './components/TitleHeader.jsx'
import ShowcaseSection from "./sections/ShowcaseSection";
import FetureCards from './sections/FetureCards.jsx';
import ExpirienceSection from './sections/ExpirienceSection.jsx';
function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <section className="portfolio-content">
                <AnimatedCounter />
            </section>
            <div className='mt-20'>
            <TitleHeader 
            title="Recently Projects"ll
            sub="💼 Works I've done"
            />
            </div>
            <ShowcaseSection />
            
            <ExpirienceSection />
            <FetureCards />
        </>
        
    );
}

export default App;