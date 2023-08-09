/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres = ["el", "nuestro", "tu"];
  let adj = ["gran", "enorme", "sabroso", "pequeño"];
  let nombres = ["carro", "binks", "JavaScript", "racoon", "master"];
  let extensiones = [".com", ".net", ".org", ".ve", ".es"];
  let results = "";

  pronombres.forEach(pronombre => {
    adj.forEach(adjetivo => {
      nombres.forEach(nombre => {
        extensiones.forEach(extension => {
          console.log(pronombre + adjetivo + nombre + extension);
          results = results + "\n" + pronombre + adjetivo + nombre + extension;
        });
      });
    });
  });
  let domainGenerator = document.getElementById("results");
  domainGenerator.innerHTML = "<pre>" + results + "</pre>";
};
