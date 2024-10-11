const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.description');
const body = document.body;

squares.forEach(function(square) {
  square.addEventListener('click', function(e) {
    const description = square.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
  })
});

body.addEventListener('click', function(e) {
  if (!e.target.classList.contains('description')) {
    descriptions.forEach(function(description) {
      description.style.display = 'none';
    });
  }
});
