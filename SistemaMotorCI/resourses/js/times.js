/**
 * Tiempos del pistón.
 */

let pistonPos = true;
let admValve = false;
let scapeValve = false;
let fuelConsume = document.getElementById("fuel_indicator");

/**
 * Espera un momento para ejecutar una orden.
 * @param {number} milliseconds
 */
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const admission = (fuel, consume) => {
  document.getElementById("btn_admission").style.backgroundColor = "green";
  fuelTest = (fuel * 100) / fuel - consume;
  fuelConsume.style.width = fuelTest + "%";
  pistonPos = false;
  admValve = true;
  scapeValve = false;
};

const compression = () => {
  document.getElementById("btn_compression").style.backgroundColor = "green";
  pistonPos = true;
  admValve = false;
  scapeValve = false;
};

const explosion = () => {
  document.getElementById("btn_explosion").style.backgroundColor = "green";
  pistonPos = false;
  admValve = false;
  scapeValve = false;
};

const scape = () => {
  document.getElementById("btn_scape").style.backgroundColor = "green";
  pistonPos = true;
  scapeValve = true;
  admValve = false;
};

const restart = () => {
  document.getElementById("btn_admission").style.backgroundColor = "grey";
  document.getElementById("btn_compression").style.backgroundColor = "grey";
  document.getElementById("btn_explosion").style.backgroundColor = "grey";
  document.getElementById("btn_scape").style.backgroundColor = "grey";
  scapeValve = false;
  admValve = false;
  pistonPos = true;
};
