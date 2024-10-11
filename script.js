const togglers = document.querySelectorAll('.square');
togglers.forEach(function(el) {
  el.addEventListener('click', function(e) {
    el.nextElementSibling.style.display = 'block';
  })
});
