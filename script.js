const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");

document.addEventListener("keydown", (e) => {
  key1.textContent = e.key;
  key2.textContent = e.keyCode;
  key3.textContent = e.code;
});
