const textWrapper = document.getElementById('wrapper');

textWrapper.addEventListener('click', function(e) {
  if (confirm('Вы действительно желаете перейти по данной ссылке?')) {
  } else {
    e.preventDefault();
  }
});