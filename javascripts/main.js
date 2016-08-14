// TOGGLE SCREENSHOTS

window.onload = function () {
  var thumbs = document.querySelectorAll('.thumb');

  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(e) {
      e.target.classList.toggle('screen');
      e.target.classList.toggle('thumb');
    });
  }
};
