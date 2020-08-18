/**
 * Simulacion de motor de combustión interna
 */

let entry = false;
let keyPos = false;
let rpm = 0;
let fuel = 3785; //mililitros
let consume = 0;

/**
 * Cambia el estado del swicth.
 * (Con llave o sin llave)
 * @returns {Boolean} True para llave en el switch, false para llave
 * fuera del switch
 */
const putKey = () => {
  return (entry = !entry);
};

/**
 *Verifica el estado del switch
 *@return {Boolean}True para llave en el switch, false para llave
 *fuera del switch
 */
const validateKey = () => {
  if (!entry && keyPos == false) {
    document.getElementById("btn_meter_llave").style.backgroundColor = "grey";
  } else {
    document.getElementById("btn_meter_llave").style.backgroundColor = "green";
  }
  return entry;
};

$("#meter_llave").on("click", function () {
  putKey();
  validateKey();
});

/**
 * Girar la llave en ambos sentidos, tanto para encender el motor como apagarlo.
 */
const turnKey = () => {
  if (validateKey()) {
    if (!keyPos) {
      keyPos = true;
      document.getElementById("btn_girar_glave").style.backgroundColor =
        "green";
      start();
    } else {
      keyPos = false;
      document.getElementById("btn_girar_glave").style.backgroundColor = "grey";
      document.getElementById("btn_start").style.backgroundColor = "grey";
    }
  } else {
    alert("La llave no esta en el switch");
  }
};

$("#girar_llave").on("click", function () {
  turnKey();
});

/**
 * Ejecuta el proceso de arranque del motor.
 */
const start = () => {
  if (keyPos) {
    document.getElementById("btn_start").style.backgroundColor = "green";
    document.getElementById("on_indicator").style.backgroundColor = "green";
    combustion();
  }
};

/**
 * Proceso del ciclo del pistón teniendo en cuenta el combustible disponible.
 */
const combustion = async () => {
  // await sleep(400);

  for (consume; consume < fuel; consume++) {
    if (pistonPos && !admValve) {
      await sleep(1000);
      for (rpm; rpm < 4; rpm++) {
        await sleep(1000);
        if (pistonPos) {
          if (!admValve) {
            admission(fuel, consume);
          }
        } else if (admValve) {
          compression();
          explosion();
        } else {
          scape();
        }
      }
    }
    rpm = 0;
    restart();
    if (!keyPos) {
      document.getElementById("on_indicator").style.backgroundColor = "red";
      document.getElementById("btn_start").style.backgroundColor = "grey";
      break;
    }
    if (consume == fuel - 1) {
      document.getElementById("on_indicator").style.backgroundColor = "red";
    }
  }
};
