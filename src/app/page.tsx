import Closer from "@/components/Closer";
import Nav from "@/components/Nav";
import Panels from "@/components/Panels";
import Radovi from "@/components/Radovi";
import SmoothScroll from "@/components/SmoothScroll";
import Stack from "@/components/Stack";

export default function UslugePage() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Stack />
        <Panels />
        <Radovi />
      </main>
      <Closer />
    </>
  );
}
