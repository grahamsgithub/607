document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('header nav');

  hamburgerMenu.addEventListener('click', function() {
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  });

  // JavaScript to populate the date dropdown
  const dateSelect = document.getElementById('date');
  const daysToShow = 30; // Number of days to show in the dropdown
  const daysOpen = [3, 4, 5, 6, 0]; // Wednesday to Sunday (0 is Sunday)

  const today = new Date();
  for (let i = 0; i < daysToShow; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (daysOpen.includes(date.getDay())) {
      const option = document.createElement('option');
      option.value = date.toISOString().split('T')[0];
      option.textContent = date.toDateString();
      dateSelect.appendChild(option);
    }
  }

  // JavaScript to handle form submission and display confirmation message
  const form = document.getElementById('reservation-form');
  const confirmationMessage = document.getElementById('confirmation-message');
  const resetButton = document.getElementById('reset-button');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    confirmationMessage.style.display = 'block'; // Show the confirmation message
    form.reset(); // Reset the form fields
  });

  resetButton.addEventListener('click', function() {
    form.reset(); // Reset the form fields
    confirmationMessage.style.display = 'none'; // Hide the confirmation message
  });
});