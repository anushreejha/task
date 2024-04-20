document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  const scrollIcon = document.querySelector('.scroll-icon');
  const innerScroll = document.querySelector('.inner-scroll');
  const outerScroll = document.querySelector('.outer-scroll');
  
  let isDragging = false;

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

  scrollIcon.addEventListener('mousedown', (event) => {
    isDragging = true;
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const scrollIconY = event.clientY - innerScroll.getBoundingClientRect().top - scrollIcon.offsetHeight / 2;
      const innerScrollHeight = innerScroll.offsetHeight;
      const scrollIconHeight = scrollIcon.offsetHeight;
      const maxPosition = innerScrollHeight - scrollIconHeight + 50; 
      const minPosition = 46; 
      const clampedPosition = Math.min(Math.max(minPosition, scrollIconY), maxPosition);
      moveScrollIcon(clampedPosition);
      updateLightIntensity(clampedPosition / (innerScrollHeight - scrollIconHeight));
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  innerScroll.addEventListener('click', (event) => {
    const scrollIconY = event.clientY - innerScroll.getBoundingClientRect().top - scrollIcon.offsetHeight / 2;
    const innerScrollHeight = innerScroll.offsetHeight;
    const scrollIconHeight = scrollIcon.offsetHeight;
    const maxPosition = innerScrollHeight - scrollIconHeight + 50; 
    const minPosition = 46; 
    const clampedPosition = Math.min(Math.max(minPosition, scrollIconY), maxPosition);
    moveScrollIcon(clampedPosition);
    updateLightIntensity(clampedPosition / (innerScrollHeight - scrollIconHeight));
  });

  function moveScrollIcon(newPosition) {
    scrollIcon.style.top = `${newPosition}px`;
  }

  function updateLightIntensity(intensity) {
    const opacity = Math.max(0, Math.min(1, 1 - intensity * 0.75)); 
    const lightColor = `rgba(62, 242, 239, ${opacity})`;
    innerScroll.style.backgroundColor = lightColor;
  }
});
