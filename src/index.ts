
import { fetchEvents } from './fetcher.js';
import { renderTimeline } from './renderer.js';
import { setupModal } from './modal.js';

document.addEventListener('DOMContentLoaded', async () => {
  const timeline = document.getElementById('timeline') as HTMLElement;
  const modal = document.getElementById('modal') as HTMLElement;
  const modalContent = document.getElementById('modal-content') as HTMLElement;
  const modalClose = document.getElementById('modal-close') as HTMLElement;

  if (!timeline || !modal || !modalContent || !modalClose) {
    throw new Error('Required DOM elements not found');
  }

  const { showModal } = setupModal(modal, modalContent, modalClose);

  try {
    const events = await fetchEvents();
    renderTimeline(events, timeline, showModal);
  } catch (error) {
    console.error('Error initializing timeline:', error);
  }
});