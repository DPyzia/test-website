let descriptionShowing = false;

const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.close');

squares.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (descriptionShowing) return

    el.nextElementSibling.style.display = 'block';
    descriptionShowing = !descriptionShowing;
  })
});

descriptions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.style.display = 'none';

    descriptionShowing = false;
  })
});
