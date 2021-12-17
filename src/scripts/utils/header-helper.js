const changeHeaderToBlack = () => {
  const header = document.querySelector('.header');
  header.classList.add('overlaying');
};

const changeHeaderToOverlay = () => {
  const header = document.querySelector('.header');
  header.classList.remove('overlaying');
};

const io = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) changeHeaderToOverlay();
  else changeHeaderToBlack();
});

export { io, changeHeaderToBlack, changeHeaderToOverlay };
