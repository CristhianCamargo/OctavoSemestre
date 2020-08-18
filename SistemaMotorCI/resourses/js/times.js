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

/**
 * Primer tiempo del ciclo del motor. Evalua el consumo del combustible.
 * @param {number} fuel
 * @param {number} consume
 * @return {boolean} pistonPos, true cunado el piston esta arriba, false cuando el piston esta abajo.
 * @return {boolean} admValve, true cuando la valvula de admisión esta abierta, false cuando esta cerrada.
 * @return {boolean} scapeValve, true cuando la valvula de escape esta abierta, false cuando esta cerrada.
 */
const admission = (fuel, consume) => {
  document.getElementById("btn_admission").style.backgroundColor = "green";
  fuelTest = (fuel * 100) / fuel - consume;
  fuelConsume.style.width = fuelTest + "%";
  pistonPos = false;
  admValve = true;
  scapeValve = false;
  return pistonPos, admValve, scapeValve;
};

/**
 *Segundo tiempo del ciclo del motor.
 * @return {boolean} pistonPos, true cunado el piston esta arriba, false cuando el piston esta abajo.
 * @return {boolean} admValve, true cuando la valvula de admisión esta abierta, false cuando esta cerrada.
 * @return {boolean} scapeValve, true cuando la valvula de escape esta abierta, false cuando esta cerrada.
 */
const compression = () => {
  document.getElementById("btn_compression").style.backgroundColor = "green";
  pistonPos = true;
  admValve = false;
  scapeValve = false;
  return pistonPos, admValve, scapeValve;
};

/**
 * Tercer tiempo del ciclo del motor.
 * @return {boolean} pistonPos, true cunado el piston esta arriba, false cuando el piston esta abajo.
 * @return {boolean} admValve, true cuando la valvula de admisión esta abierta, false cuando esta cerrada.
 * @return {boolean} scapeValve, true cuando la valvula de escape esta abierta, false cuando esta cerrada.
 */
const explosion = () => {
  document.getElementById("btn_explosion").style.backgroundColor = "green";
  pistonPos = false;
  admValve = false;
  scapeValve = false;
  return pistonPos, admValve, scapeValve;
};

/**
 * Cuarto tiempo del ciclo del motor.
 * @return {boolean} pistonPos, true cunado el piston esta arriba, false cuando el piston esta abajo.
 * @return {boolean} admValve, true cuando la valvula de admisión esta abierta, false cuando esta cerrada.
 * @return {boolean} scapeValve, true cuando la valvula de escape esta abierta, false cuando esta cerrada.
 */
const scape = () => {
  document.getElementById("btn_scape").style.backgroundColor = "green";
  pistonPos = true;
  scapeValve = true;
  admValve = false;
  return pistonPos, admValve, scapeValve;
};

/**
 *Se reinician las variables para iniciar el ciclo nuevamente.
 * @return {boolean} pistonPos, true cunado el piston esta arriba, false cuando el piston esta abajo.
 * @return {boolean} admValve, true cuando la valvula de admisión esta abierta, false cuando esta cerrada.
 * @return {boolean} scapeValve, true cuando la valvula de escape esta abierta, false cuando esta cerrada.
 */
const restart = () => {
  document.getElementById("btn_admission").style.backgroundColor = "grey";
  document.getElementById("btn_compression").style.backgroundColor = "grey";
  document.getElementById("btn_explosion").style.backgroundColor = "grey";
  document.getElementById("btn_scape").style.backgroundColor = "grey";
  scapeValve = false;
  admValve = false;
  pistonPos = true;
  return pistonPos, admValve, scapeValve;
};
