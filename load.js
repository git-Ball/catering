
import { getData } from "./api.mjs";
import { reportWindowSize } from "./app.js";



// const template = (img) => html`<img class="event-img" src="${img}" />`;

export  async function loadPage(ctx){

  let data = await getData();

  const lastImg = data[0].img;
  console.log(lastImg)
  reportWindowSize();
  let hiddenEl = document.querySelector("#showMore");
  hiddenEl.classList.remove("hidden");
  hiddenEl.innerHTML = `<img class="event-img" src="${lastImg}" />`
  const btn = document.querySelector(".loadMore").classList.add("hidden");
//   return ctx.render(lastImg);
   

  }

//   let data = await getData();

//   const lastImg = data[0].img;
//   console.log(lastImg)
//   reportWindowSize();
//   let hiddenEl = document.querySelector("#showMore");
//   hiddenEl.classList.remove("hidden");
//   const btn = document.querySelector(".loadMore").classList.add("hidden");
//   return render(template(lastImg));