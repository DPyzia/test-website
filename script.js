const squares = document.querySelectorAll('.square');

if (e.target.classList.contains('square')) {
  squares.forEach(function(el) {
    el.addEventListener('click', function(e) {
      el.nextElementSibling.style.display = 'block';
    })
  })
};
