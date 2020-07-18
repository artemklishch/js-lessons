let last_known_scroll_position = 0;
let ticking = false;

const doSomething = () => {
  // console.log("scroll is happend");
  console.log(ticking);
};

const scroll = () => {
  last_known_scroll_position = window.scrollY;
  window.requestAnimationFrame(function () {
    doSomething(last_known_scroll_position);
  });
  //46 times of scroll event

  // if (!ticking) {
  //   window.requestAnimationFrame(function () {
  //     doSomething(last_known_scroll_position);
  //     ticking = false;
  //   });
  //   ticking = true;
  // }
  //44 times of scroll event

  // doSomething() //64 times of scroll event
};
window.addEventListener("scroll", scroll);
