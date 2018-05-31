
class Draw {
  constructor(canvasSelector) {
    let canvas = document.querySelector(canvasSelector)
    this.context = canvas.getContext('2d');

    this.context.imageSmoothingEnabled = false;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 1;

    this._canWidth = canvas.width
    this._canHeight = canvas.height
    this.lastX = -1
    this.lastY = -1
    this.drawing = false

    this.lineWidth = 1
    this.strokeStyle = 'black'
  }

  setLineWidth(width) {
    this.lineWidth = width
    this.context.lineWidth = width;
  }

  setBrushColor(color) {
    this.context.strokeStyle = color;
  }

  isPointInCanvasArea(x, y) {
    return x >= 0 && x <= this._canWidth && y >= 0 && y <= this._canHeight
  }

  start(x, y) {
    console.log('start', x, y)
    if (!this.isPointInCanvasArea(x, y)) return;
    this.drawing = true;

    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x, y + 0.01);
    this.context.stroke();
    this.lastX = x;
    this.lastY = y;
  }

  drawTo(x, y) {
    if (!this.drawing) return;
    console.log('drawTo', x, y)

    if (!this.isPointInCanvasArea(x, y)) {
      return this.end()
    }

    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.lastX = x;
    this.lastY = y;
  }

  end() {
    console.log('end')
    this.drawing = false;
  }
}

export default Draw