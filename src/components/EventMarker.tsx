import type { EventData } from "../types";

type Props = {
  event: EventData;
  onClick: (e: EventData) => void;
  isSelected?: boolean;
};

export default function EventMarker({ event, onClick, isSelected = false }: Props) {
  const handleClick = () => {
    console.log("Click event triggered for:", event.title);
    onClick(event);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log("Key pressed:", e.key);
    // Handle both Enter and Space key events
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent scrolling when Space is pressed
      console.log("Opening modal for:", event.title);
      onClick(event);
    }
  };

  return (
    <button 
      type="button"
      className="event-marker"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Event from ${event.year}: ${event.title}. ${isSelected ? 'Selected' : ''}`}
      aria-current={isSelected ? "true" : undefined}
      tabIndex={0}
    >
      <span className="event-year">{event.year}</span>
      <span className="event-title">{event.title}</span>
    </button>
  );
}