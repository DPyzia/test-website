const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.description');

squares.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.nextElementSibling.style.display = 'block';
  })
});

descriptions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.style.display = 'none';
  })
});
