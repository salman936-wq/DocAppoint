import Image from "next/image";
import Hero from "./components/Hero";
import TopDoctors from "./components/TopDoctors";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <TopDoctors></TopDoctors>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
}
