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
 * @returns {entry Boolean} True para llave en el switch, false llave
 * fuera del switch
 */
const putKey = () => {
  return (entry = !entry);
};

/**
 *
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

const turnKey = () => {
  if (validateKey()) {
    if (!keyPos) {
      keyPos = true;
      document.getElementById("btn_Girar_Llave").style.backgroundColor =
        "green";
      restart();
    } else {
      keyPos = false;
      document.getElementById("btn_Girar_Llave").style.backgroundColor = "grey";
    }
    start();
  } else {
    alert("La llave no esta en el switch");
  }
};

$("#girar_llave").on("click", function () {
  turnKey();
});

const start = () => {
  if (keyPos) {
    document.getElementById("btn_start").style.backgroundColor = "green";
    document.getElementById("on_indicator").style.backgroundColor = "green";
  } else {
    document.getElementById("btn_start").style.backgroundColor = "grey";
  }
  combustion();
};

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
        } else {
          if (admValve) {
            compression();
            explosion();
          } else {
            scape();
          }
        }
      }
    }
    rpm = 0;
    restart();
    if (!keyPos) {
      document.getElementById("on_indicator").style.backgroundColor = "red";
      break;
    }
    if (consume == fuel - 1) {
      document.getElementById("on_indicator").style.backgroundColor = "red";
    }
  }
};
