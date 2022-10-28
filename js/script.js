const bg = document.getElementById("bg");
//console.log(bg);
window.addEventListener("scroll", () => {
  //   const y = 1 - window.scrollY / 685;
  //   console.log(y);
  bg.style.opacity = 1 - window.scrollY / 685;
});
