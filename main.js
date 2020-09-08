import Modal from "./js/modal.js";

const modalp1 = new Modal(
  `[data-modal="open-p1"]`,
  `[data-modal="close-p1"]`,
  `[data-modal="container-p1"]`
);
modalp1.init();

const modalp2 = new Modal(
  `[data-modal="open-p2"]`,
  `[data-modal="close-p2"]`,
  `[data-modal="container-p2"]`
);
modalp2.init();
