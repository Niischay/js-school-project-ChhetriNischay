import { createPortal } from "react-dom";
import type { EventData } from "../types";

type Props = {
  open: boolean;
  event: EventData | null;
  onClose: () => void;
};

export default function EventModal({ open, event, onClose }: Props) {
  if (!open || !event) return null;
  const modalRoot = document.getElementById("modal-root") ?? document.body;

  const content = (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2>{event.title} ({event.year})</h2>
        <p><strong>Category:</strong> {event.category}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );

  return createPortal(content, modalRoot);
}
