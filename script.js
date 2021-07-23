/* ======================== LENGTH ======================== */

function verifyLength() {
  var numberLengthtxt = document.getElementById('numberLengthtxt')
  var numberLength = Number(numberLengthtxt.value)

  var inicialLength = document.getElementsByName('inicialLength')
  var finalLength = document.getElementsByName('finalLength')

  var resLength = document.getElementById('resLength')

  if (numberLengthtxt.value.length == 0) {
    alert('Provide a valid number')
  } else {
    var kmToKm = numberLength
    var kmToM = numberLength * 1000
    var kmToCm = numberLength * 100000
    var kmToMm = numberLength * 1000000

    var mToKm = numberLength / 1000
    var mToCm = numberLength * 100
    var mToMm = numberLength * 1000

    var cmToKm = numberLength / 100000
    var cmToM = numberLength / 1000000
    var cmToMm = numberLength * 10

    var mmToKm = numberLength / 1000000
    var mmToM = numberLength / 1000
    var mmToCm = numberLength / 10


    if (inicialLength[0].checked && finalLength[0].checked) {
      resLength.innerHTML = `${numberLength}km = ${numberLength}km`
    } else if (inicialLength[0].checked && finalLength[1].checked) {
      resLength.innerHTML = `${numberLength}km = ${kmToM}m`
    } else if (inicialLength[0].checked && finalLength[2]) {
      resLength.innerHTML = `${numberLength}km = ${kmToCm}cm`
    } else if (inicialLength[0].checked && finalLength[3]) {
      resLength.innerHTML = `${numberLength}km = ${kmToMm}cm`
    }

    else if (inicialLength[1].checked && finalLength[0].checked) {
      resLength.innerHTML = `${numberLength}m = ${mToKm}km`
    } else if (inicialLength[1].checked && finalLength[1].checked) {
      resLength.innerHTML = `${numberLength}m = ${numberLength}m`
    } else if (inicialLength[1].checked && finalLength[2].checked) {
      resLength.innerHTML = `${numberLength}m = ${mToCm}cm`
    } else if (inicialLength[1].checked && finalLength[3].checked) {
      resLength.innerHTML = `${numberLength}m = ${mToMm}`
    }

    else if (inicialLength[2].checked && finalLength[0].checked) {
      resLength.innerHTML = `${numberLength}cm = ${cmToKm}km`
    } else if (inicialLength[2].checked && finalLength[1]) {
      resLength.innerHTML = `${numberLength}cm = ${cmToM}m`
    } else if (inicialLength[2].checked && finalLength[2]) {
      resLength.innerHTML = `${numberLength}cm = ${numberLength}cm`
    } else if (inicialLength[2].checked && finalLength[3].checked) {
      resLength.innerHTML = `${numberLength}cm = ${cmToMm}mm`
    }

    else if (inicialLength[3].checked && finalLength[0].checked) {
      resLength.innerHTML = `${numberLength}mm = ${mmToKm}km`
    } else if (inicialLength[3].checked && finalLength[1].checked) {
      resLength.innerHTML = `${numberLength}mm = ${mmToKm}m`
    } else if (inicialLength[3].checked && finalLength[2].checked) {
      resLength.innerHTML = `${numberLength}mm = ${mmToKm}cm`
    } else if (inicialLength[3].checked && finalLength[3].checked) {
      resLength.innerHTML = `${numberLength}mm = ${numberLength}mm`
    } else {
      alert('Verify your options')
    }
  }

  //Clear the input
  document.getElementById('numberLengthtxt').value = ''
}

/* ======================== TEMPERATURE ======================== */

function verifyTemperature() {
  var numberTemperaturetxt = document.getElementById('numberTemperaturetxt')
  var numberTemperature = Number(numberTemperaturetxt.value)

  var inicialTemperature = document.getElementsByName('inicialTemperature')
  var finalTemperature = document.getElementsByName('finalTemperature')

  var resTemperature = document.getElementById('resTemperature')

  var cToK = numberTemperature + 273
  var cToF = (numberTemperature * 9) / 5 + 32

  var kToC = numberTemperature - 273
  var kToF = ((numberTemperature - 273) * 9) / 5 + 32

  var fToC = ((numberTemperature - 32) * 5) / 9
  var fToK = (5 * numberTemperature - 160) / 9 + 273

  // Descartar temperaturas abaixo de 0K
  // Caso não seja digitado um valor
  if (numberTemperaturetxt.value.length == 0) {
    alert('Provide a valid number')
  } else {
    //First selected is °F
    if (inicialTemperature[0].checked && finalTemperature[2].checked) {
      if (numberTemperature < -273) {
        alert("This temperature doesn't exist")
      } else {
        resTemperature.innerHTML = `${numberTemperature}°C corresponde a ${cToK}K`
      }
    } else if (inicialTemperature[0].checked && finalTemperature[1].checked) {
      if (numberTemperature < -273) {
        alert("This temperature doesn't exist")
      } else {
        resTemperature.innerHTML = `${numberTemperature}°C corresponde a ${cToF}°F`
      }

      //First selected is K
    } else if (inicialTemperature[2].checked && finalTemperature[0].checked) {
      if (numberTemperature < 0) {
        alert("This temperature doesn't exist")
      } else {
        resTemperature.innerHTML = `${numberTemperature}K corresponde a ${kToC}°C`
      }
    } else if (inicialTemperature[2].checked && finalTemperature[1].checked) {
      if (numberTemperature < 0) {
        alert('Essa temperatura não existe')
      } else {
        resTemperature.innerHTML = `${numberTemperature}K corresponde a ${kToF}°F`
      }

      //First selected is °F
    } else if (inicialTemperature[1].checked && finalTemperature[0].checked) {
      if (numberTemperature < -459.4) {
        alert('Essa temperatura não existe')
      } else {
        resTemperature.innerHTML = `${numberTemperature}°F corresponde a ${fToC}°C`
      }
    } else if (inicialTemperature[1].checked && finalTemperature[2].checked) {
      if (numberTemperature < -459.4) {
        alert('Essa temperatura não existe')
      } else {
        resTemperature.innerHTML = `${numberTemperature}°F corresponde a ${fToK}K`
      }

      //Same temperature unit selected
    } else if (
      (inicialTemperature[0].checked && finalTemperature[0].checked) ||
      (inicialTemperature[1].checked && finalTemperature[1].checked) ||
      (inicialTemperature[2].checked && finalTemperature[2].checked)
    ) {
      alert('[ERRO] COLOQUE UNIDADES DIFERENTES!')
    }
  }

  // Clear the input
  document.querySelector('#numberTemperaturetxt').value = ''
}

/* ======================== TIME ======================== */

function verifyTime() {
  var numberTimetxt = document.getElementById('numberTimetxt')
  var numberTime = Number(numberTimetxt.value)

  var inicialTime = document.getElementsByName('inicialTime')
  var finalTime = document.getElementsByName('finalTime')

  var resTime = document.getElementById('resTime')

  var msToS = numberTime / 1000
  var msToMin = numberTime / 60000
  var msToHour = numberTime / 3600000
  var msToDay = numberTime / 86400000

  var sToMs = numberTime * 1000
  var sToMin = numberTime / 60
  var sToHour = numberTime / 3600
  var sToDay = numberTime / 86400

  var minToMs = numberTime * 60000
  var minToS = numberTime * 60
  var minToHour = numberTime / 60
  var minToDay = numberTime / 1440

  var hourToMs = numberTime * 3600000
  var hourToS = numberTime * 3600
  var hourToMin = numberTime * 60
  var hourToDay = numberTime / 24

  var dayToMs = numberTime * 86400000
  var dayToS = numberTime * 86400
  var dayToMin = numberTime * 1440
  var dayToHour = numberTime * 24

  if (numberTimetxt.value.length == 0) {
    alert('Provide a valid number')
  } else {
    if (inicialTime[0].checked && finalTime[0].checked) {
      resTime.innerHTML = `${numberTime}ms = ${numberTime}ms`
    } else if (inicialTime[0].checked && finalTime[1].checked) {
      resTime.innerHTML = `${numberTime}ms = ${msToS}s`
    } else if (inicialTime[0].checked && finalTime[2].checked) {
      resTime.innerHTML = `${numberTime}ms = ${msToMin}min`
    } else if (inicialTime[0].checked && finalTime[3].checked) {
      resTime.innerHTML = `${numberTime}ms = ${msToHour}hour(s)`
    } else if (inicialTime[0].checked && finalTime[4].checked) {
      resTime.innerHTML = `${numberTime}ms = ${msToDay}day(s)`
    }

    else if (inicialTime[1].checked && finalTime[1].checked) {
      resTime.innerHTML = `${numberTime}s = ${numberTime}s`
    } else if (inicialTime[1].checked && finalTime[0].checked) {
      resTime.innerHTML = `${numberTime}s = ${sToMs}ms`
    } else if (inicialTime[1].checked && finalTime[2].checked) {
      resTime.innerHTML = `${numberTime}s = ${sToMin}min`
    } else if (inicialTime[1].checked && finalTime[3].checked) {
      resTime.innerHTML = `${numberTime}s = ${sToHour}hour(s)`
    } else if (inicialTime[1].checked && finalTime[4].checked) {
      resTime.innerHTML = `${numberTime}s = ${sToDay}day(s)`
    }

    else if (inicialTime[2].checked && finalTime[0].checked) {
      resTime.innerHTML = `${numberTime}min = ${minToMs}ms`
    } else if (inicialTime[2].checked && finalTime[1].checked) {
      resTime.innerHTML = `${numberTime}min = ${minToS}s`
    } else if (inicialTime[2].checked && finalTime[2].checked) {
      resTime.innerHTML = `${numberTime}min = ${numberTime}min`
    } else if (inicialTime[2].checked && finalTime[3].checked) {
      resTime.innerHTML = `${numberTime}min = ${minToHour}hour(s)`
    } else if (inicialTime[2].checked && finalTime[4].checked) {
      resTime.innerHTML = `${numberTime}min = ${minToDay}day(s)`
    }

    else if (inicialTime[3].checked && finalTime[0].checked) {
      resTime.innerHTML = `${numberTime} hour(s) = ${hourToMs}ms`
    } else if (inicialTime[3].checked && finalTime[1].checked) {
      resTime.innerHTML = `${numberTime} hour(s) = ${hourToS}s`
    } else if (inicialTime[3].checked && finalTime[2].checked) {
      resTime.innerHTML = `${numberTime} hour(s) = ${hourToMin}min`
    } else if (inicialTime[3].checked && finalTime[3].checked) {
      resTime.innerHTML = `${numberTime} hour(s) = ${numberTime}hour(s)`
    } else if (inicialTime[3].checked && finalTime[4].checked) {
      resTime.innerHTML = `${numberTime} hour(s) = ${hourToDay}day(s)`
    }

    else if (inicialTime[4].checked && finalTime[0].checked) {
      resTime.innerHTML = `${numberTime} day(s) = ${dayToMs}ms`
    } else if (inicialTime[4].checked && finalTime[1].checked) {
      resTime.innerHTML = `${numberTime} day(s) = ${dayToS}s`
    } else if (inicialTime[4].checked && finalTime[2].checked) {
      resTime.innerHTML = `${numberTime} day(s) = ${dayToMin}min`
    } else if (inicialTime[4].checked && finalTime[3].checked) {
      resTime.innerHTML = `${numberTime} day(s) = ${dayToHour}hour(s)`
    } else if (inicialTime[4].checked && finalTime[4].checked) {
      resTime.innerHTML = `${numberTime} day(s) = ${numberTime}day(s)`
    }
  }

  // Clear the input
  document.querySelector('#numberTimetxt').value = ''
}

/* ======================== DARK MODE ======================== */
function darkModeOn() {
  document.body.style.background = '#111111'
  document.body.style.color = '#eeeeee'
  document.getElementById('divider1').style.backgroundColor = "#eeeeee";
  document.getElementById('divider2').style.backgroundColor = "#eeeeee";
  document.getElementById('divider3').style.backgroundColor = "#eeeeee";
}

function darkModeOff() {
  document.body.style.background = '#eeeeee'
  document.body.style.color = '#111111'
}
