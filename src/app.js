/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominios = ["com", "gub"];

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  document.querySelector(".texto").innerHTML = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let z = 0; z < noun.length; z++) {
        for (let a = 0; a < dominios.length; a++) {
          //console.log(pronoun[i], adj[j], noun[z], dominios[a]);
          document.querySelector(
            ".texto"
          ).innerHTML += `<li>${pronoun[i]}${adj[j]}${noun[z]}.${dominios[a]}</li>`;
        }
      }
    }
  }
});
