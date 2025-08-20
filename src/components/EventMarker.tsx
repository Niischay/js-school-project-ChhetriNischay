import type { EventData } from "../types";

type Props = {
  event: EventData;
  onClick: (e: EventData) => void;
};

export default function EventMarker({ event, onClick }: Props) {
  return (
    <button className="event-marker" onClick={() => onClick(event)} aria-label={`Open ${event.title}`}>
      <span className="event-year">{event.year}</span>
      <span className="event-title">{event.title}</span>
    </button>
  );
}
