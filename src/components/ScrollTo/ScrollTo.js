import React, { useEffect } from 'react';

function ScrollTo() {
  useEffect(() => {
    let links = document.querySelectorAll('.navigation-link');
    links.forEach((item) => {
      item.addEventListener('click', scrollToIdOnClick);
    });

    return () => {
      links.forEach((item) => {
        item.removeEventListener('click', scrollToIdOnClick);
      });
    };
  }, []);

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target.getAttribute('href');
    const toSection = document.querySelector(element).offsetTop;
    
    window.scroll({
      top: toSection,
      behavior: "smooth",
    });
  }

  return null;
}

export default ScrollTo;
