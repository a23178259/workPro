const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const keyin = document.querySelector(".key-in");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
