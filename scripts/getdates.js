
const last = document.querySelector("#last");
const p = document.querySelector(".footer-p");
const today = new Date();
const year = today.getFullYear();
last.classList.add("highlight");
last.innerHTML = `last modified ${document.lastModified}`;
p.innerHTML = `&copy; ${year} 🌹 Gift Agbiji 🌹 Nigeria`;