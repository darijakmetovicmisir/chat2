import User from './user.mjs';


document
      .getElementById("prijava")
      .addEventListener("click", (event) => User.prijava(event));

document
.getElementById("odjava")
.addEventListener("click", (event) => User.odjava(event));

document
      .getElementById("dohvatiPoruke")
      .addEventListener("click", (event) => User.dohvatiSvePoruke(event));

document
      .getElementById("posalji")
      .addEventListener("click", (event) => User.posaljiPoruku(event));

document
.getElementById("aktivneSobe")
.addEventListener("click", (event) => User.dohvatiSobe(event));