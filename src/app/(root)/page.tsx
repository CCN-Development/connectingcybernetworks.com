import CompanySlider from "@/components/website/CompanySlider";
import HomeHero from "@/components/website/HomeHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefits from "@/components/website/Benefits";


export default function Home() {
    return (
        <>
            <HomeHero />
            <CompanySlider />
            <div className="relative dark:bg-black">
                <Benefits />
            </div>
        </>
    );
}
