import type { EventData } from "../types";
import EventMarker from "./EventMarker";

type Props = {
  events: EventData[];
  onSelect: (e: EventData) => void;
  selectedEventId?: number | null;
};

export default function Timeline({ events, onSelect, selectedEventId }: Props) {
  return (
    <section 
      id="timeline" 
      className="timeline"
      aria-label="Timeline of events"
      role="list"
    >
      {events.map(ev => (
        <div key={ev.id} role="listitem">
          <EventMarker 
            event={ev} 
            onClick={onSelect} 
            isSelected={selectedEventId === ev.id}
          />
        </div>
      ))}
    </section>
  );
}