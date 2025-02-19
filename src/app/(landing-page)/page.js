import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSection";
import ServicesSection from "./components/Service";
import Navbar from "./components/Header";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <HeroSection />
      <ServicesSection />
      <PostsSection />
    </div>
  );
}
