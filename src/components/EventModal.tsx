import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"; 
import type { EventData } from "../types";

type Props = {
  open: boolean;
  event: EventData | null;
  onClose: () => void;
};

export default function EventModal({ open, event, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      // Store currently focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 10);
      
      // Add event listener for Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    } else if (previouslyFocusedElement.current) {
      // Return focus to the element that opened the modal
      previouslyFocusedElement.current.focus();
    }
  }, [open, onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [open]);

  if (!open || !event) return null;
  const modalRoot = document.getElementById("modal-root") ?? document.body;

  const content = (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="presentation"
    >
      <div 
        ref={modalRef}
        className="modal" 
        onClick={e => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <button 
          ref={closeButtonRef}
          className="modal-close" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          ×
        </button>
        <h2 id="modal-title">{event.title} ({event.year})</h2>
        <p><strong>Category:</strong> {event.category}</p>
        <p id="modal-description">{event.description}</p>
      </div>
    </div>
  );

  return createPortal(content, modalRoot);
}