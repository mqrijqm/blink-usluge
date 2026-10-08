"use client";

import { useEffect, useState } from "react";

// Živi sat Banje Luke. Do prvog renderiranja u browseru prikazuje crtice (da se server i browser ne razilaze).
export default function LiveClock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("bs-BA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Sarajevo",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  return <span>{time}</span>;
}
