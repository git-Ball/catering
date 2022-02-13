import { loadPage } from "./load.js";
import { render, page, html } from "./util.js";



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
  widthOutput.textContent = window.innerWidth;
  if (widthOutput.textContent < 760) {
    return gliderDowngrade();
  } else {
    return gliderUpdate();
  }
}


document.body.onresize = reportWindowSize;

reportWindowSize();



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
