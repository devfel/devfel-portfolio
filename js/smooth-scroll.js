// --- Parameters ---
// links: used to select the elements. ie: a[href^="#"]
// default links: none, can't be empty
// options: options for the scroll, ie: behavior and block
// default options: behavior: "smooth", block: "start"

export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute(`href`); // tem que ser com getAttribute ou entao pega o link inteiro.
    const secaoSelecionada = document.querySelector(href);
    secaoSelecionada.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.internalLinks.forEach((elem) => {
      elem.addEventListener(`click`, this.scrollToSection);
    });
  }

  init() {
    if (this.internalLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
