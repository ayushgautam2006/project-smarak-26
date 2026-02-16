import Hero from "../components/Hero";
import About from "../components/About";
import MissionAnimation from "../components/MissionAnimation";
import GallerySection from "../components/GallerySection";
import Slider from "@/components/slider";
export default function Home() {
    return (
        <div className="">
            <Hero />
            <About />
            <MissionAnimation />
            <Slider />
            <GallerySection />
        </div>
    );
}
