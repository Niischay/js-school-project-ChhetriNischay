document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");

  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.classList.add("event-marker");
        marker.textContent = event.year;

        marker.addEventListener("click", () => {
          modalContent.innerHTML = `
            <h2>${event.title} (${event.year})</h2>
            <p>${event.description}</p>
            <small>Category: ${event.category}</small>
          `;
          modal.style.display = "block";
        });

        timeline.appendChild(marker);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
