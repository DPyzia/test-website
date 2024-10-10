const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('click', () => {
    const description = square.nextElementSibling;
    description.classList.toggle('show');
  });
});
