const vowels = /[aeiouy]/i;
const textField = document.getElementById('text-field');

textField.addEventListener('keypress', function(e) {
  if (vowels.test(e.key)) {
  } else {
    e.preventDefault();
  }
});