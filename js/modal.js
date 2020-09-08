// Class to open or close a Modal Box on the Website

// --- Parameters ---
// buttonOpen: button to open Modal. ie: '[data-modal="open"]',
// default: none, can't be empty
// buttonClose: button to close Modal. ie: '[data-modal="close"]',
// default: none, can't be empty
// containerModal: container to be shown or hidden. ie: '[data-modal="content"]',
// default: none, can't be empty

export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  openModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle(`active`);
  }

  closeModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle(`active`);
    this.stopVideos();
  }

  /* added to stop videos on background, youtube videos need ?enablejsapi=1 */
  stopVideos() {
    let iframes = document.querySelectorAll("iframe");
    Array.prototype.forEach.call(iframes, (iframe) => {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo" }),
        "*"
      );
    });
  }

  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.closeModal(event);
    }
  }

  addModalEvent() {
    this.buttonOpen.addEventListener("click", this.openModal);
    this.buttonClose.addEventListener("click", this.closeModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
