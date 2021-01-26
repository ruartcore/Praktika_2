window.onload = function () {
  const circle = document.querySelector('#circle');
  const container = document.getElementById('container');

  container.addEventListener('mousemove', MouseMoveEvent, false);
  container.addEventListener('mouseleave', MouseLeaveEvent, false);
  icon.addEventListener('mouseleave', MouseLeaveEvent, false);

  animState.init(circle);
  iconState.init(icon);

  function MouseMoveEvent(event) {
    clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    mouseState.x = clientX - animState.circle.offsetWidth / 2 - 10;
    mouseState.y = clientY - animState.circle.offsetHeight / 2;

    if (Math.floor(animState.x) == mouseState.x && Math.floor(animState.y) == mouseState.y) {

    } else {
      if (animState.state.magneet) return;
      animState.state.magneet = true;
      animState.state.gohome = true;
      animState.defSize();
      bubble.state = -1;
      radUp();
      AnimationMove();
    }
  }

  function MouseLeaveEvent() {
    if (!animState.state.magneet) return;
    animState.state.gohome = false;
    animState.state.magneet = false;
    radMin();
    AnimationLeave();
  }
};
