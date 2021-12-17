const skipToContentInitiator = ({ element, focusTarget, scrollTarget }) => {
  element.scrollIntoView();
  element.addEventListener('click', () => {
    focusTarget.focus();
    scrollTarget.scrollIntoView();
  });
};

export default skipToContentInitiator;
