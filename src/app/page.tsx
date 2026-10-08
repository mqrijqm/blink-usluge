import Closer from "@/components/Closer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Panels from "@/components/Panels";
import SmoothScroll from "@/components/SmoothScroll";
import Stack from "@/components/Stack";

export default function UslugePage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Panels />
      </main>
      <Closer />
    </>
  );
}
