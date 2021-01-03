// const btn1 = document.querySelector('#elem1');
// let event = new Event('click');
// btn1.dispatchEvent(event);

// document.addEventListener("hello", function (event) {
//   alert("ПРивет от " + event.target.tagName);
// });

// let ev1 = new Event("hello", { bubbles: true });
// const h11 = document.querySelector("#elem2");
// elem2.dispatchEvent(ev1);

const h12 = document.querySelector("#elem3");
h12.addEventListener("hello", function (event) {
  alert(event.detail.name);
});
h12.dispatchEvent(
  new CustomEvent("hello", {
    detail: { name: "Петя" },
  })
);
