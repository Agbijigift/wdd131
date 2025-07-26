const footer = document.querySelector("footer");
const copyright = document.createElement("P");
const lastup = document.createElement("p");
const today = new Date();
const year = today.getFullYear();
lastup.innerText = `Last Modification ${document.lastModified}`
copyright.innerText = `\u00A9 ${year} 🌹 Gift Agbiji 🌹 Nigeria`
lastup.classList.add("highlight");
copyright.classList.add("foot-p");
footer.appendChild(copyright);
footer.appendChild(lastup);