import Modal from "./js/modal.js";
import SmoothScroll from "./js/smooth-scroll.js";

const modalp1 = new Modal(
  `[data-modal="open-p1"]`,
  `[data-modal="close-p1"]`,
  `[data-modal="container-p1"]`
);
modalp1.init();

const modalp4 = new Modal(
  `[data-modal="open-p4"]`,
  `[data-modal="close-p4"]`,
  `[data-modal="container-p4"]`
);
modalp4.init();

const smoothScroll = new SmoothScroll(
  `[data-menu="smooth-scroll"] a[href^="#"]`
);
smoothScroll.init();
