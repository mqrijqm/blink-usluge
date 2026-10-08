import Closer from "@/components/Closer";
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
        <Stack />
        <Panels />
      </main>
      <Closer />
    </>
  );
}
