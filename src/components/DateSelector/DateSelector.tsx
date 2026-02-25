import styles from "./DateSelector.module.css";
import { Icons } from "../Icons";
import { useState, useEffect } from "react";

interface DateState {
  today: Date;
  tomorrow: Date;
  nextWeek: Date;
  nextMonth: Date;
}

const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const monthsOfYear = [
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

const getDayOfWeek = (day: number): string => {
  console.log("day ", day);

  return daysOfWeek[day].slice(0, 3);
};

const getMonthName = (month: number): string => {
  return monthsOfYear[month].slice(0, 3);
};

const DateSelector = () => {
  const [dates, setDates] = useState<DateState>({
    today: new Date(),
    tomorrow: new Date(),
    nextWeek: new Date(),
    nextMonth: new Date(),
  });

  useEffect(() => {
    let today = new Date();
    let tomorrow = new Date();
    let nextWeek = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);
    let nextMonth = new Date();
    nextMonth.setDate(nextMonth.getDate() + 30);

    setDates({
      today: today,
      tomorrow: tomorrow,
      nextWeek: nextWeek,
      nextMonth: nextMonth,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.datePickerQuickSelect}>
          <button>
            <span>Hoy</span> <span>{getDayOfWeek(dates.today.getDay())}</span>
          </button>
          <button>
            <span>Mañana</span>{" "}
            <span>{getDayOfWeek(dates.tomorrow.getDay())}</span>
          </button>
          <button>
            <span>Próxima semana</span>{" "}
            <span>{getDayOfWeek(dates.nextWeek.getDay())}</span>
          </button>
          <button>
            <span>Próxima mes</span>{" "}
            <span>{getDayOfWeek(dates.nextMonth.getDay())}</span>
          </button>

          <div className={styles.datePickerMonthNavigator}>
            <span>{getMonthName(dates.today.getMonth())}</span>
            <div className={styles.datePickerNavButtons}>
              {<Icons name="ArrowLeft" />}
              {<Icons name="ArrowRight" />}
            </div>
          </div>
          {/* Calendar */}
          <div></div>
        </div>
      </div>
      ;
    </>
  );
};

export default DateSelector;
