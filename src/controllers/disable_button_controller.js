import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'link', 'btn' ]

  disable() {
    this.btnTarget.innerText = "Bingo!";
    this.btnTarget.setAttribute('disabled', '');
    this.linkTarget.classList.remove('d-none');
  }

  enable() {
    this.linkTarget.classList.add('d-none');
    this.btnTarget.innerText = "Click me!";
    this.btnTarget.removeAttribute('disabled', '');
  }
}
