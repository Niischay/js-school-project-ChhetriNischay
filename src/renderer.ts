import { Event } from './types/event';

export function renderTimeline(events: Event[], timelineElement: HTMLElement, onMarkerClick: (event: Event) => void): void {
  events.forEach(event => {
    const marker = document.createElement('div');
    marker.classList.add('event-marker');

    const dot = document.createElement('div');
    dot.classList.add('event-dot');

    const label = document.createElement('div');
    label.classList.add('event-label');
    label.textContent = event.year;

    marker.appendChild(dot);
    marker.appendChild(label);
    marker.addEventListener('click', () => onMarkerClick(event));
    
    timelineElement.appendChild(marker);
  });
}