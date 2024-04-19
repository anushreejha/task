document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('on');
      if (button.classList.contains('on')) {
        button.style.transform = 'scale(0.95)';
      } else {
        button.style.transform = 'scale(1)';
      }
    });
  });
});
