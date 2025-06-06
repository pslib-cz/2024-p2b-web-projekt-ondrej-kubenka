import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
    loop: true,
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Scrollbar],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
        slidesPerView: 4,
        grid: {
          columns: 4,
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
     },
  },
});