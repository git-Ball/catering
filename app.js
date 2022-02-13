// import { getData } from "./api.mjs";
import { loadPage } from "./load.js";


import { render, page, html } from "./util.js";

alert("bau");

const root = document.querySelector("#loadMore");

page(decoration);
page('/load',loadPage)

page.start();


function decoration(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}

const toggleButton = document.querySelector("#toggle-btn");
const navLinks = document.querySelector(".navbar-links");
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 500);
});

const topDiv = document
  .querySelector(".scrollTop")
  .addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

const widthOutput = document.querySelector("#width");

export function reportWindowSize() {
  widthOutput.textContent = window.innerWidth; //?
  console.log(widthOutput.textContent);
  if (widthOutput.textContent < 760) {
    return gliderDowngrade();
  } else {
    return gliderUpdate();
  }
}
// window.onresize = reportWindowSize;
// window.addEventListener('resize', reportWindowSize);
// reportWindowSize()

document.body.onresize = reportWindowSize;
// document.addEventListener('resize', reportWindowSize);

// let clientWidth = document.body.clientWidth
// clientWidth.addEventListener('resize', reportWindowSize);

// intElemClientWidth.addEventListener('resize', reportWindowSize);
reportWindowSize();

// let loadMoreBtn = document
//   .querySelector(".loadMore")
//   .addEventListener("click", loadPage)


    // let data = await getData();
    // const template = (img) => html`<img class="event-img" src="${img}" />`;

    // const lastImg = data[0].img;
    // console.log(lastImg)
    // reportWindowSize();
    // let hiddenEl = document.querySelector("#showMore");
    // hiddenEl.classList.remove("hidden");
    // const btn = document.querySelector(".loadMore").classList.add("hidden");
    // render(template(lastImg));
  // });

  // async function load(){
  //   let data = await getData();
  //   const template = (img) => html`<img class="event-img" src="${img}" />`;

  //   const lastImg = data[0].img;
  //   console.log(lastImg)
  //   reportWindowSize();
  //   let hiddenEl = document.querySelector("#showMore");
  //   hiddenEl.classList.remove("hidden");
  //   const btn = document.querySelector(".loadMore").classList.add("hidden");
  //   return ctx.render(template(lastImg));
  // }
function gliderUpdate() {
  return new Glider(document.querySelector(".glider"), {
    slidesToShow: 3,
    slideToScroll: 2,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
}
function gliderDowngrade() {
  return new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slideToScroll: 1,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
}
