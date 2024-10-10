/*let descriptionShowing = false;

const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.description')

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (descriptionShowing) return; // prevent clicking on other squares

    const description = square.nextElementSibling;
    description.classList.toggle('show');
    descriptionShowing = !descriptionShowing; // toggle the flag
  });
});

descriptions.forEach((description) => {
    description.addEventListener('click', () => {
        description.classList.remove('show') // reset the flag
    });
});
