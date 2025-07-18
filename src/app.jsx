import Hero from './sections/hero.jsx';
import AnimatedCounter from "./components/AnimatedCounter";
import NavBar from "./components/NavBar.jsx";
import ShowcaseSection from "./sections/ShowcaseSection";
function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <section className="portfolio-content">
                <AnimatedCounter />
            </section>
            <ShowcaseSection />

        </>
        
    );
}

export default App;