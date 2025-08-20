import type { EventData } from "../types";
import EventMarker from "./EventMarker";

type Props = {
  events: EventData[];
  onSelect: (e: EventData) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  return (
    <section id="timeline" className="timeline">
      {events.map(ev => (
        <EventMarker key={ev.id} event={ev} onClick={onSelect} />
      ))}
    </section>
  );
}
