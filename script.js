let descriptionShowing = false;

const squares = document.querySelectorAll('.square');
const descriptions = square.querySelectorAll('.description');

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (descriptionShowing) return; // prevent clicking on other squares

//    const description = square.nextElementSibling;
    description.classList.toggle('visable');
    descriptionShowing = !descriptionShowing; // toggle the flag
  });
});

descriptions.forEach((description) => {
    description.addEventListener('click', () => {
        description.classList.remove('visable');
        descriptionShowing = false;
    });
});
