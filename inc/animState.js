const animState = {
  start_x: 45,
  start_y: 45,
  def_h: 50,
  def_w: 50,

  circle: null,

  _this: {
    h: 50,
    w: 50,
    x: 45,
    y: 45,
  },

  max_w: 68,
  max_h: 68,
  min_w: 30,
  min_h: 30,

  state: {
    magneet: false,
    gohome: false,
  },
  init(obj) {
    this.circle = obj;
    this._this.x = this.start_x;
    this._this.y = this.start_y;
    circle.style.height = `${this.def_h}px`;
    circle.style.width = `${this.def_w}px`;
    circle.style.transform = `translate(${this.start_x}px, ${this.start_y}px)`;
  },
  defSize() {
    this._this.h = this.def_h;
    this._this.w = this.def_w;
  },

};

const iconState = {
  xx: 14,
  yy: 5,
  icon: null,
  init(obj) {
    this.icon = obj;
  },
  setPos() {
    icon.style.left = `${this.xx}px`;
    icon.style.bottom = `${this.yy}px`;
  },
  onLeave() {
    if (this.xx > 16) {
      this.xx--;
      this.yy += 1;
      this.setPos();
    }
  },
  onMove() {
    if (this.xx < 21) {
      this.xx++;
      this.yy -= 1;
      this.setPos();
    }
  },
  toDef() {
    if (this.xx > 11) {
      this.xx--;
      this.yy += 1;
      this.setPos();
    }
  },
};
