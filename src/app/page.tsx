import HeroSection from "@/components/sections/hero-section";
import Reward from "@/components/sections/reward";
import TimelineSection from "@/components/sections/timeline-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TimelineSection />
      <Reward />
    </main>
  );
}
