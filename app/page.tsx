import Image from "next/image";
import Header from "@/components/home/Header";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrendingProducts from "@/components/home/TrendingProducts";
import PetHealthBanner from "@/components/home/PetHealthBanner";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FooterCTA from "@/components/home/FooterCTA";
import PromoBanners from "@/components/home/PromoBanners";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSlider/>
    <WelcomeSection/>
    <FeaturedProducts/>
    <PromoBanners/>
    <TrendingProducts/>
    <PetHealthBanner/>
    <Testimonials/>
    <Newsletter/>
    <FooterCTA/>
    </>
  );
}
