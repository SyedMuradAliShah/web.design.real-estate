var wrapper = document.getElementById("wrapper");
wrapper.classList.add("list"); // Add list class by default

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;

  // List view
  event.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  // Grid view
  event.preventDefault();
  wrapper.classList.remove("list");
});


// ===========================listing-pagination


