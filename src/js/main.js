import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';

if (document.querySelector('.splide')) {
    let splide = new Splide(".splide", {
      type: "loop",
      focus: 0,
      gap: "1rem",
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
        480: {
          perPage: 1,
        },
      },
    });
  
    splide.mount();
  };

 