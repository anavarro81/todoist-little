export interface DateState {
  today: Date;
  tomorrow: Date;
  nextWeek: Date;
  nextMonth: Date;
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

