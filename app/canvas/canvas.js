'use strict';
class Canvas {
  constructor(elem, width, height) {
    this.elem = elem;
    this.ctx = this.elem.getContext('2d');
    this.width = width;
    this.height = height;

    this.updateResolution(width, height);
  }
  updateResolution(width, height) {
    this.elem.width = width;
    this.elem.height = height
  }
  canvasClear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  canvasDraw(image, x, y, width, height) {
    this.ctx.drawImage(image, x, y, width, height);
  }
}