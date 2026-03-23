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
  generateHours,
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

  const [showHourSelector, setShowHourSelector] = useState(false);

  const [hour, setHour] = useState("");
  const [hoursSelector, setHoursSelector] = useState<string[]>([]);

  const [isHourValid, setIsHourValid] = useState(true);

  const [showListOfHour, setShowListOfHour] = useState(false);

  const validateHour = (e: any) => {
    const value = e.target.value;
    setHour(value);

    // Consider empty value as valid (no tooltip)
    if (value === "") {
      setIsHourValid(true);
      return;
    }

    // Validate format HH:MM (24-hour)
    const isValid = /^([01]?\d|2[0-3]):([0-5]\d)$/.test(value);
    setIsHourValid(isValid);
  };

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    const nextWeek = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const hours = generateHours();

    setHoursSelector(hours);
    setHour(hours[0]);

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
                {
                  <Icons
                    name="ArrowLeft"
                    fill={
                      viewMonth == dates.today.getMonth() ? "#cccccc" : "black"
                    }
                  />
                }
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
          {/* Hora*/}
          <div className={styles.bottonButtonContainer}>
            {!showHourSelector && (
              <>
                <button
                  type="button"
                  className={styles.timeButtonContainer}
                  onClick={() => setShowHourSelector(!showHourSelector)}
                >
                  <div className={styles.timeButtonClock}>
                    <Icons name="Clock" />
                    <span>Hora</span>
                  </div>
                  <Icons name="Chevron" fill="black" />
                </button>
              </>
            )}

            {showHourSelector && (
              <>
                <div className={styles.timeButtonContainer} id="input-hora">
                  {/* Tooltip shown above input when hour is invalid */}
                  {!isHourValid && hour !== "" && (
                    <div
                      id="hora-invalid-tooltip"
                      className={styles.tooltip}
                      role="alert"
                      aria-live="polite"
                    >
                      hora no valida
                    </div>
                  )}

                  <Icons name="Clock" />
                  <input
                    type="text"
                    value={hour}
                    onChange={validateHour}
                    onClick={() => setShowListOfHour((prev) => !prev)}
                    aria-invalid={!isHourValid}
                    aria-describedby={
                      !isHourValid ? "hora-invalid-tooltip" : undefined
                    }
                  />
                  <button>
                    <Icons name="Cancel" />
                  </button>
                </div>

                {showListOfHour && (
                  <div className={styles.hourSelector}>
                    <ul>
                      {hoursSelector.map((hour: string) => (
                        <li key={hour}> {hour} </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            <button className={styles.blueButton}> Repetir </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default DateSelector;
