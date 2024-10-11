//let descriptionShowing = false;

const squares = document.querySelectorAll('.square');
const descriptions = document.querySelectorAll('.description');
const body = document.body;

squares.forEach(function (el) {
  el.addEventListener('click', function (e) {
    //if (descriptionShowing) return;

    el.nextElementSibling.style.display = 'block';
    //descriptionShowing = !descriptionShowing;
  })
});

/*descriptions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    el.style.display = 'none';
    descriptionShowing = false;
  })
});
*/

body.addEventListener('click', function(e) {
  if (!e.target.classList.contains('description')) {
    descriptions.forEach(function(description) {
      description.style.display = 'none';
    });
  }
});
