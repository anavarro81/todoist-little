// const minutesValues = ["00", "30"];

// export const generateHours = (startHour, startMinutes) => {
//   // Generar horas: De las 00 a las 23:30 en bloques de 30 minutos.
//   const hours = [];

//   for (let hourIndex = startHour; hourIndex < 24; hourIndex++) {
//     const hour = hourIndex.toString().padStart(2, "0");

//     for (const min of minutesValues) {
//       hours.push(hour + ":" + min);
//     }
//   }

//   console.log(hours);

//   return hours;
// };

// const today = new Date();

// const hour = today.getHours();
// // const minutes = today.getMinutes();
// let minutes = 36;
// let roundMinutes = 0;
// let

// if (minutes >= 30) {
//   roundMinutes = 60 - minutes;
//   startHour
// } else {
//   roundMinutes = 30 - minutes;
// }

// today.setHours(7, 30, 0, 0);

// today.setTime(today.getTime() + roundMinutes * 60 * 1000);

// console.log(today.toLocaleTimeString());

const getStartTimeTest = (startHour, startMinutes) => {
  const today = new Date();

  today.setHours(startHour, startMinutes, 0, 0);

  const startTime = today.toLocaleTimeString();

  let minutes = today.getMinutes();
  let hour = today.getHours();

  // Calcular hora inicial
  if (minutes >= 30) {
    minutes = 0;
    hour++;
  } else {
    minutes = 30;
  }
  // Setear hora inicial
  today.setHours(hour, minutes, 0, 0);

  console.log(
    `Hora inicial ${startTime} --> hora final: ${today.toLocaleTimeString()}`,
  );
};

const getStartTime = () => {
  const today = new Date();
  const finalHour = new Date();
  finalHour.setHours(23, 30, 0, 0);

  console.log("Hora final ==> ", finalHour.toLocaleTimeString());

  const ADD_MINUTES = 30;
  const hours = [];

  let minutes = today.getMinutes();
  let hour = today.getHours();

  // Calcular hora inicial
  if (minutes >= 30) {
    minutes = 0;
    hour++;
  } else {
    minutes = 30;
  }
  // Setear hora inicial
  today.setHours(hour, minutes, 0, 0);

  hours.push(today.getHours() + ":" + today.getMinutes());

  let startTime = today.getHours();

  while (today.getTime() < finalHour.getTime()) {
    today.setTime(today.getTime() + ADD_MINUTES * 60 * 1000);
    hours.push(today.getHours().toString().padStart(2,'0') + ":" + today.getMinutes().toString().padStart(2,'0'));
  }

  console.log("hours: ", hours);
};

// Desde la hora inicial hasta las 23 irle sumando 30 minutos
// extraer las horas y minutos
// guardarlas en el array

// Obtener hora actual

// getStartTime(6, 30);
// getStartTime(6, 36);
// getStartTime(10, 0);
// getStartTime(10, 15);
// getStartTime(10, 45);
// getStartTime(8, 59);
// getStartTime(23, 15);
// getStartTime(23, 30);

getStartTime();
