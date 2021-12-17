const skipToContentInitiator = ({ element, focusTarget, scrollTarget }) => {
  element.addEventListener('click', () => {
    focusTarget.focus();
    scrollTarget.scrollIntoView();
  });
};

export default skipToContentInitiator;
