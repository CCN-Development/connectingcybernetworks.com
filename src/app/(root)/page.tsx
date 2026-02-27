import CompanySlider from "@/components/website/CompanySlider";
import HomeHero from "@/components/website/HomeHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    return (
        <>
        <HomeHero />
        <CompanySlider />
        </>
    );
}
