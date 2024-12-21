let btn = document.querySelector(".button")
let card = document.querySelector(".block")
btn.style.padding = "10px 30px"
btn.style.width = "90px"
btn.style.background = "black"
btn.style.color = "white"
btn.style.borderRadius = "10px"
card.style.width = "90px"
card.style.height = "90px"
card.style.background = "red"
card.style.opacity = "0"
card.style.transition = "2s"
card.style.transform = "scale(0)"
btn.addEventListener("click", () => {
  btn.style.color = "red"
  card.style.margin = "30px 0"
  if (card.style.opacity === "0") {
    card.style.opacity = "1"
    card.style.transform = "scale(1)"
  } else {
    card.style.opacity = "0"
    card.style.transform = "scale(0.1)"
  }
});

let plus = document.querySelector(".plus");
plus.style.width = "50px";
plus.style.height = "50px";
plus.style.background = "red";
plus.style.fontSize = "30px";
plus.style.display = "flex";
plus.style.alignItems = "center";
plus.style.justifyContent = "center";
let minus = document.querySelector(".minus");
minus.style.width = "50px";
minus.style.height = "50px";
minus.style.background = "red";
minus.style.display = "flex";
minus.style.alignItems = "center";
minus.style.justifyContent = "center";
minus.style.fontSize = "30px";
let reset = document.querySelector(".min button");
reset.style.margin = "20px 0";
reset.style.padding = "10px 40px";
reset.style.background = "red";
reset.style.borderRadius = "10px";
let conus = 0;
let text = document.querySelector("h1")
plus.addEventListener("click", () => {
conus++
text.innerHTML = conus
})
minus.addEventListener("click", () => {
    if(conus > 0){
        conus--
    }
    text.innerHTML = conus
})
reset.addEventListener("click", () => {
    conus = 0
    text.innerHTML = conus
})