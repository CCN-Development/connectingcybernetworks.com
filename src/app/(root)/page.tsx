import CompanySlider from "@/components/website/CompanySlider";
import HomeHero from "@/components/website/HomeHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Benefits from "@/components/website/Benefits";
import EndAsker from "@/components/website/EndAsker";
import LandingAbout from "@/components/website/LandingAbout";
import PackageView from "@/components/website/PackageView";
import PopularCourses from "@/components/website/PopularCourses";
import HomeBlogs from "@/components/website/HomeBlogs";
import HomePlacedStudents from "@/components/website/HomePlacedStudents";


export default function Home() {
    return (
        <div className="dark:bg-black overflow-hidden md:overflow-visible">
            <HomeHero />
            <CompanySlider />
            <Benefits />
            <PackageView />
            <PopularCourses />
            <HomePlacedStudents />
            <HomeBlogs />
            <LandingAbout />
            <EndAsker />
        </div>
    );
}
