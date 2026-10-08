import Closer from "@/components/Closer";
import CursorDot from "@/components/CursorDot";
import Nacin from "@/components/Nacin";
import Nav from "@/components/Nav";
import OStudiju from "@/components/OStudiju";
import Proizvodi from "@/components/Proizvodi";
import SmoothScroll from "@/components/SmoothScroll";

export default function ProizvodiView() {
  return (
    <>
      <SmoothScroll />
      <CursorDot />
      <Nav />
      <main>
        <Nacin />
        <OStudiju />
        <Proizvodi />
      </main>
      <Closer />
    </>
  );
}
