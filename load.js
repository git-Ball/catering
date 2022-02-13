
import { getData } from "./api.mjs";
import { reportWindowSize } from "./app.js";





export  async function loadPage(ctx){

  let data = await getData();

  const lastImg = data[0].img;

  reportWindowSize();
  let hiddenEl = document.querySelector("#showMore");
  hiddenEl.classList.remove("hidden");
  hiddenEl.innerHTML = `<img class="event-img" src="${lastImg}" />`
  const btn = document.querySelector(".loadMore").classList.add("hidden");
}
