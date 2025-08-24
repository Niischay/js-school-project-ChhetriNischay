import { useEffect, useMemo, useState } from "react";
import type { EventData } from "./types";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import "./App.css";

export default function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selected, setSelected] = useState<EventData | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"All" | string>("All");

  useEffect(() => {
    fetch("/data/events.json")
      .then(r => r.json())
      .then((data: EventData[]) => setEvents(data))
      .catch(err => console.error("Failed to load events.json", err));
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? events : events.filter(e => e.category === filter)),
    [events, filter]
  );

  const categories = useMemo(
    () => Array.from(new Set(events.map(e => e.category))),
    [events]
  );

  return (
    <>
      <div id="modal-root"></div>

      <Header />

      <Timeline
        events={filtered}
        onSelect={(ev) => {
          setSelected(ev);
          setOpen(true);
        }}
        selectedEventId={selected?.id}
      />
      
      <EventModal 
        open={open} 
        event={selected} 
        onClose={() => setOpen(false)} 
      />
    </>
  );
}