
const a = document.getElementsByClassName("header_button")[0];
const b = document.getElementsByClassName("navlist")[0];

a.addEventListener("click", () =>{
  console.log(a.classList.length);
  a.classList.toggle("active");

  b.classList.toggle("active");
  console.log(b.classList);
});
