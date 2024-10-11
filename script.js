const squareContainer = document.querySelector('.square-container');

squareContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('square')) {
    const description = e.target.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
  } else if (e.target.classList.contains('description')) {
    e.target.style.display = 'none';
  }
});
