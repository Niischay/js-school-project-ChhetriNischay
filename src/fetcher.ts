import { Event } from './types/event';

export async function fetchEvents(): Promise<Event[]> {
  try {
    const response = await fetch('/events.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}