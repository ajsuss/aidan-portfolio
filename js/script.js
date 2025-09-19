/*
 * Portfolio interactive script
 *
 * Implements responsive navigation and modal dialogues for project details.
 */

// Set up handlers once the script loads. Since this file is loaded at the end of
// the document, the DOM is already present and we can directly query elements
// without waiting for a DOMContentLoaded event.

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('show');
});

// Attach modal close listener to handle close button events
const closeBtn = document.querySelector('.modal-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
}

// Category filtering for project cards
// Attach click listeners to each filter button to filter the project grid
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Retrieve the selected filter from the button's data-filter attribute
    const filter = button.getAttribute('data-filter');
    // Remove the active class from all buttons and highlight the current one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // Query the cards on each click to ensure we have an up‑to‑date list
    const cards = document.querySelectorAll('.card-grid .card');
    cards.forEach(card => {
      const categoryAttr = card.getAttribute('data-category') || '';
      // Split categories on whitespace to support multiple categories
      const categories = categoryAttr.split(/\s+/).filter(Boolean);
      // If the "all" filter is selected or the card includes the category, show it; otherwise hide
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Open a modal with the given template ID
function openModal(templateId) {
  const overlay = document.getElementById('modal-overlay');
  const contentContainer = document.getElementById('modal-content');
  const template = document.getElementById(templateId);
  if (!overlay || !contentContainer || !template) return;
  // Clone template content and insert into modal
  contentContainer.innerHTML = '';
  const clone = template.content.cloneNode(true);
  contentContainer.appendChild(clone);
  overlay.style.display = 'flex';
  // Lock body scroll when modal open
  document.body.style.overflow = 'hidden';
}

// Close the modal
function closeModal(event) {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.style.display = 'none';
  // Unlock body scroll when modal closed
  document.body.style.overflow = '';
}