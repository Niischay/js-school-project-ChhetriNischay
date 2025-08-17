import { Event } from './types/event';

export function setupModal(modalElement: HTMLElement, contentElement: HTMLElement, closeElement: HTMLElement): {
  showModal: (event: Event) => void;
  hideModal: () => void;
} {
  function showModal(event: Event): void {
    contentElement.innerHTML = `
      <h2>${event.title} (${event.year})</h2>
      <p>${event.description}</p>
      <small>Category: ${event.category}</small>
    `;
    modalElement.style.display = 'block';
  }

  function hideModal(): void {
    modalElement.style.display = 'none';
  }

  closeElement.addEventListener('click', hideModal);
  window.addEventListener('click', (e) => {
    if (e.target === modalElement) hideModal();
  });

  return { showModal, hideModal };
}