/*
 * Portfolio interactive script
 *
 * Implements responsive navigation and modal dialogues for project details.
 */

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
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