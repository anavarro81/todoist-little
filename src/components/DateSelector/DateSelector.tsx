import styles from "./DateSelector.module.css";
import cn from "classnames";
import { Icons } from "../Icons";
import { useState, useEffect } from "react";
import {
  getDayOfWeek,
  getMonthName,
  daysOfWeekMon,
  generateMonth,
  getNextWeekEnd,
} from "../../utils/DateUtils";
import type { DateState } from "../../utils/DateUtils";

interface DateSelectorProps {
  handleTaskForm: (name: string, value: Date | null) => void;
}

const DateSelector = ({ handleTaskForm }: DateSelectorProps) => {
  const [dates, setDates] = useState<DateState>(() => {
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    return {
      today,
      tomorrow,
      nextWeek,
      nextWeekend: getNextWeekEnd(today),
      monthGrid: generateMonth(today),
    };
  });

  const [viewDate, setViewDate] = useState(new Date());
  const [viewMonth, setViewMonth] = useState(dates.today.getMonth());

  useEffect(() => {
    let today = new Date();
    let tomorrow = new Date();
    let nextWeek = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);

    setDates({
      today: today,
      tomorrow: tomorrow,
      nextWeek: nextWeek,
      nextWeekend: getNextWeekEnd(today),
      monthGrid: generateMonth(today),
    });
  }, []);

  const goToCurrentDay = () => {
    setDates((prev) => ({ ...prev, monthGrid: generateMonth(dates.today) }));
    setViewMonth(dates.today.getMonth());
  };

  const changeMonth = (offset: number) => {
    // Al hacer return explicito se crea una nueva instancia y se asegura que actualiza la interfaz

    setViewDate((prev) => {
      let nextViewDate;

      if (prev.getMonth() == dates.today.getMonth() + 1 && offset == -1) {
        nextViewDate = dates.today;
      } else {
        nextViewDate = new Date(
          prev.getFullYear(),
          prev.getMonth() + offset,
          1,
        );
      }

      // Genero el calendario a partir de la fecha de vista correspondiente
      setDates({ ...dates, monthGrid: generateMonth(nextViewDate) });

      setViewMonth(nextViewDate.getMonth());

      return nextViewDate;
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.datePickerQuickSelect}>
          <button
            type="button"
            onClick={() => handleTaskForm("dueDate", dates.today)}
          >
            <span>Hoy</span> <span>{getDayOfWeek(dates.today.getDay())}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTaskForm("dueDate", dates.tomorrow)}
          >
            <span>Mañana</span>
            <span>{getDayOfWeek(dates.tomorrow.getDay())}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTaskForm("dueDate", dates.nextWeek)}
          >
            <span>Próxima semana</span>
            <span>{getDayOfWeek(dates.nextWeek.getDay())}</span>
          </button>
          <button
            type="button"
            onClick={() => handleTaskForm("dueDate", dates.nextWeekend)}
          >
            <span>Este fin de semana</span>
            <span>{getDayOfWeek(dates.nextWeekend.getDay())}</span>
          </button>

          <div className={styles.datePickerMonthNavigator}>
            <span>{getMonthName(viewMonth)}</span>
            <div className={styles.datePickerNavButtons}>
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                disabled={viewMonth == dates.today.getMonth()}
                className={styles.disabled}
              >
                {<Icons name="ArrowLeft" />}
              </button>

              <button type="button" onClick={() => goToCurrentDay()}>
                {<Icons name="Circle" />}
              </button>

              <button type="button" onClick={() => changeMonth(1)}>
                {<Icons name="ArrowRight" />}
              </button>
            </div>
          </div>
          {/* Calendar */}
          <div className={styles.datePickerCalendarGrid}>
            {daysOfWeekMon.map((day) => {
              return (
                <>
                  <div> {day.slice(0, 1)} </div>
                </>
              );
            })}
            {dates.monthGrid.map((day) => {
              return (
                <>
                  <button
                    type="button"
                    disabled={day.isDisable}
                    className={cn(styles.datePickerCell, {
                      [styles.currentDay]: day.isCurrentDay,
                      [styles.datePickerDisabled]: day.isDisable,
                    })}
                  >
                    {day.isVisible && day.day}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DateSelector;
