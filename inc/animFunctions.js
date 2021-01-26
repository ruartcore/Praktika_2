const posCorrect = (objCord, obj) => {
  const object = obj;
  object.style.transform = `translate(${objCord.x}px, ${objCord.y}px)`;
};
const sizeCorrect = (objSize, obj) => {
  const object = obj;
  object.style.width = `${objSize.w}px`;
  object.style.height = `${objSize.h}px`;
};
const moveToPoint = (obj, speed, pos_to) => {
  animState._this.x += (pos_to.x - animState._this.x) / speed;
  animState._this.y += (pos_to.y - animState._this.y) / speed;
};

function radUp() {
  if(!animState.state.magneet) return;
  if(animState._this.h >= animState.max_h) return;
  animState._this.h += 2;
  animState._this.w += 2;
  sizeCorrect(animState._this, animState.circle);
  requestAnimationFrame(radUp);
}

function radMin() {
  if(bubble.state == 0) return;
  if(animState.state.magneet) return;
  if(animState._this.h >= animState.def_h) {
    animState._this.h -= 3;
    animState._this.w -= 3;
    sizeCorrect(animState._this, animState.circle);
  } else {
    animState.defSize();
    sizeCorrect(animState._this, animState.circle);
    bubble.state = 0;
    _animBubble();
    return;
  }
  requestAnimationFrame(radMin);
}

function _animBubble() {
  if(bubble.state > 1) {
    bubble.state = -1;
    return;
  }
  if(animState.state.magneet) return;
  if(bubble.state == 0) {
    bubble.max(animState._this);
    iconState.onMove();
    sizeCorrect(animState._this, animState.circle);
    animState.circle.style.transform = `translate(${animState._this.x}px, ${animState._this.y}px)`;
    if(animState._this.h >= animState.max_h) {
      bubble.state++;
    }
    return requestAnimationFrame(_animBubble);
  }
  if(bubble.state == 1) {
    bubble.min(animState._this);
    sizeCorrect(animState._this, animState.circle);
    posCorrect(animState._this, animState.circle);
    iconState.toDef();
    if(animState._this.h <= animState.def_h) {
      animState.defSize();
      sizeCorrect(animState._this, animState.circle);
      animState.circle.style.transform = `translate(${animState._this.x}px, ${animState._this.y}px)`;
      bubble.state++;
      return;
    }
    return requestAnimationFrame(_animBubble);
  }
}

function AnimationMove() {
  if(!animState.state.magneet) return;
  moveToPoint(animState._this, 30, {
    x: Math.floor(mouseState.x) + 10,
    y: Math.floor(mouseState.y)
  });
  posCorrect(animState._this, animState.circle);
  iconState.onMove();
  requestAnimationFrame(AnimationMove);
}

function AnimationLeave() {
  if(animState.state.gohome) return;
  moveToPoint(animState._this, 5, {
    x: animState.start_x,
    y: animState.start_y
  });
  posCorrect(animState._this, animState.circle);
  (Math.floor(animState._this.x) == animState.start_x || Math.floor(animState._this.y) == animState.start_y) 
  ? false: requestAnimationFrame(AnimationLeave);
  iconState.onLeave();
}