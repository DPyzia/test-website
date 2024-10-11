// Select all square elements
const squares = document.querySelectorAll('.square');

// Add an event listener to each square element
squares.forEach((square) => {
  square.addEventListener('click', () => {
    // Toggle the visibility of the description
    const description = square.querySelector('.description');
    description.classList.toggle('visible');
    description.addEventListener('click', () => {
      description.classList.remove('visible');
    });
  });
});
