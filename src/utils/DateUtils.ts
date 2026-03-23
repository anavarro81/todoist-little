export interface DateState {
  today: Date;
  tomorrow: Date;
  nextWeek: Date;
  nextWeekend: Date;
  monthGrid: daysOfMonth[];
}

export interface daysOfMonth {
  day: number;
  isDisable: boolean;
  isCurrentDay: boolean;
  isVisible: boolean;
}

export const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const daysOfWeekMon = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const monthsOfYear = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const getDayOfWeek = (day: number): string => {
  return daysOfWeek[day].slice(0, 3);
};

export const getMonthName = (month: number): string => {
  return monthsOfYear[month].slice(0, 3);
};

export const getMonday = (currentDate: Date): number => {
  const dayNumber = currentDate.getDay();
  const dayOfMonth = currentDate.getDate();
  const daysToSubtract = dayNumber === 0 ? 6 : dayNumber - 1;

  return dayOfMonth - daysToSubtract;
};

/*
 Obtengo la fecha del siguiente sábado. 
*/

export const getNextWeekEnd = (date: Date): Date => {
  const dayNumber = date.getDay();
  const daysToAdd = dayNumber === 0 ? 6 : 6 - dayNumber;
  const d = new Date(date);

  d.setDate(d.getDate() + daysToAdd);
  return d;
};

export const getLastDay = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const lastDay = new Date(year, month + 1, 0).getDate();

  return lastDay;
};

// Genera los dias del mes a partir de la semana del dia acutal.
// Por ejemplo si hoy fuese cuatro (miercoles), empieza a generar desde el 2 lunes hasta el final del mes.
export const generateMonth = (date: Date): daysOfMonth[] => {
  const firstDay = getMonday(date);
  const lastDay = getLastDay(date);
  const currentDay = date.getDate();
  let isCurrentMonth;

  if (date.getMonth() == new Date().getMonth()) {
    isCurrentMonth = true;
  }

  const daysOfMonth = [];

  let isCurrentDay = false;

  for (let i = firstDay; i <= lastDay; i++) {
    let isDisable = false;
    let isVisible = true;

    if (isCurrentMonth) {
      if (i < currentDay) {
        isDisable = true;
      }
      isCurrentDay = i == currentDay;
    }

    // Los dias del mes anterior no se muestran.
    if (i < 1) {
      isVisible = false;
    }

    daysOfMonth.push({ day: i, isDisable, isCurrentDay, isVisible });
  }

  return daysOfMonth;
};

export const generateHours = () => {
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
  hours.push(
    today.getHours().toString().padStart(2, "0") +
      ":" +
      today.getMinutes().toString().padStart(2, "0"),
  );

  while (today.getTime() < finalHour.getTime()) {
    today.setTime(today.getTime() + ADD_MINUTES * 60 * 1000);
    hours.push(
      today.getHours().toString().padStart(2, "0") +
        ":" +
        today.getMinutes().toString().padStart(2, "0"),
    );
  }

  return hours;
};
