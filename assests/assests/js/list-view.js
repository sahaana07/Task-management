document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
      const accordion = row.querySelector('.accordion-content');
      if (accordion.style.display === 'none' || accordion.style.display === '') {
        accordion.style.display = 'block';
      } else {
        accordion.style.display = 'none';
      }
    });
  });


