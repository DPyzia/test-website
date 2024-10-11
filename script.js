const togglers = document.querySelectorAll('.toggler');
//console.log(togglers);
togglers.forEach(function(el) {
  el.addEventListener('click', function(e) {
    //const content = el.innerHTML;
    //console.log(content);
    el.nextElementSibling.style.display = 'block';
  })
});
