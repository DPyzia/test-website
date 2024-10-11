let descriptionShowing = false;

const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.description');
const close = document.querySelectorAll('.close');

squares.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (descriptionShowing) return

    el.nextElementSibling.style.display = 'block';
    descriptionShowing = !descriptionShowing;
  })
});

close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.style.display = 'none';
    descriptionShowing = false;
  })
});
