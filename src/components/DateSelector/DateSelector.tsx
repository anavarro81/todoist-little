import styles from "./DateSelector.module.css";
import cn from "classnames";
import { Icons } from "../Icons";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
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
  const inputTimeRef = useRef<HTMLInputElement | null>(null);

  // Se define un contenedor re-render que se mantiene tras el re-render, sin disparar otro re-render
  // Guarda la última posicion del caret para reposicionarlo cada vez que se introduce un nuevo digito.
  const caretPosRef = useRef<number | null>(null);

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

  const [hour, setHour] = useState({
    hour_hh: "",
    separator: ":",
    hour_mm: "",
  });

  const [hoursSelector, setHoursSelector] = useState<string[]>([]);

  const [showListOfHour, setShowListOfHour] = useState(false);

  // Array que contiene todas las horas desde 00:00 a 00:30
  const [allHours, setAllHours] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    const nextWeek = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);

    // TODO
    let currentMinutes = today.getMinutes();
    let currentHour = today.getHours();

    // Calcular hora inicial
    if (currentMinutes > 0 && currentMinutes < 30) {
      currentMinutes = 30;
    } else if (currentMinutes > 30) {
      currentMinutes = 0;
      currentHour++;
    }

    const hours = generateHours();

    setAllHours(hours);

    const filteredHours = hours.filter(
      (hour: string) =>
        hour >=
        `${currentHour.toString().padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`,
    );

    // filtrar para seleccionar a partir de la hora del día la primera vez.

    setHoursSelector(filteredHours);

    setHour({
      hour_hh: filteredHours[0].slice(0, 2),
      separator: ":",
      hour_mm: filteredHours[0].slice(3, 5),
    });

    setDates({
      today: today,
      tomorrow: tomorrow,
      nextWeek: nextWeek,
      nextWeekend: getNextWeekEnd(today),
      monthGrid: generateMonth(today),
    });
  }, []);

  useLayoutEffect(() => {
    console.log("He cambiado la hora ");

    if (inputTimeRef.current) {
      inputTimeRef.current.focus();

      switch (caretPosRef.current) {
        case 0:
          inputTimeRef.current.setSelectionRange(0, 2);
          break;
        case 1:
          inputTimeRef.current.setSelectionRange(1, 2);
          break;
        case 3:
          inputTimeRef.current.setSelectionRange(3, 5);
          break;
        case 4:
          inputTimeRef.current.setSelectionRange(4, 5);
          break;
        default:
          break;
      }
    }
  }, [hour]);

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

  const handleInput = () => {
    setShowListOfHour((prev) => !prev);

    if (inputTimeRef.current) {
      inputTimeRef.current.setSelectionRange(0, 2);
    }

    let hours = 0;
    let minutes = 0;
    let rawValue = "";

    if (inputTimeRef.current) {
      rawValue = inputTimeRef.current.value;
      hours = parseInt(rawValue.slice(0, 2));
      minutes = parseInt(rawValue.slice(3, 5));
    }

    if (minutes > 0 && minutes < 30) {
      minutes = 30;
    } else if (minutes > 30) {
      minutes = 0;
      hours++;
    }

    const result = allHours.filter(
      (hour: string) =>
        hour >=
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
    );

    setHoursSelector(result);
  };
  // Change de focus between hours and minutos
  const changeFocus = () => {
    if (inputTimeRef.current) {
      const start = inputTimeRef.current.selectionStart;
      const end = inputTimeRef.current.selectionEnd;

      if (hour.hour_hh.startsWith(" ", 0)) {
        console.log("empieza con espacio las horas");
        setHour((prev) => ({ ...prev, hour_hh: `0${prev.hour_hh[1]}` }));
        caretPosRef.current = 3;
      } else if (hour.hour_mm.startsWith(" ", 0)) {
        console.log("empieza con espacio los minutos");
        setHour((prev) => ({ ...prev, hour_mm: `0${prev.hour_mm[1]}` }));
        caretPosRef.current = 0;
      }

      if (start == 3 && end == 5) {
        inputTimeRef.current.setSelectionRange(0, 2);
      } else {
        inputTimeRef.current.setSelectionRange(3, 5);
      }
    }
  };

  const changeTime = (direction: string) => {
    const d = new Date();
    const add30MinutesInMs = 30 * 60 * 1000;
    const substract30MinutsInMs = -30 * 60 * 1000;

    d.setHours(parseInt(hour.hour_hh), parseInt(hour.hour_mm));

    if (direction == "ArrowDown") {
      d.setTime(d.getTime() + add30MinutesInMs);
    } else {
      d.setTime(d.getTime() + substract30MinutsInMs);
    }

    setHour({
      hour_hh: d.getHours().toString().padStart(2, "0"),
      separator: ":",
      hour_mm: d.getMinutes().toString().padStart(2, "0"),
    });
  };

  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        changeFocus();

        break;
      case "ArrowRight":
        e.preventDefault();
        changeFocus();

        break;
      case "ArrowUp":
        changeTime(e.key);

        break;
      case "ArrowDown":
        changeTime(e.key);

        break;
      case "Tab":
        console.log("He pulsado la tecla Tab");
        e.preventDefault();

        changeFocus();
        break;
      case "Escape":
        console.log("He pulsado la tecla Escape");
        break;
      // Evitamos que pueda borrar el input
      case "Backspace":
      case "Delete":
        e.preventDefault();
        break;
      default:
        if (e.key < "0" || e.key > "9") {
          e.preventDefault();
        } else {
          if (inputTimeRef.current) {
            setShowListOfHour(false);

            switch (inputTimeRef.current.selectionStart) {
              case 0:
                e.preventDefault();
                caretPosRef.current = 1;
                setHour((prev) => ({ ...prev, hour_hh: ` ${e.key}` }));

                break;
              case 1:
                e.preventDefault();
                caretPosRef.current = 3;

                setHour((prev) => ({
                  ...prev,
                  hour_hh: `${prev.hour_hh[1]}${e.key}`,
                }));
                break;
              case 3:
                e.preventDefault();
                caretPosRef.current = 4;
                setHour((prev) => ({
                  ...prev,
                  hour_mm: ` ${e.key}`,
                }));
                break;
              case 4:
                e.preventDefault();
                caretPosRef.current = 0;
                setHour((prev) => ({
                  ...prev,
                  hour_mm: `${prev.hour_mm[1]}${e.key}`,
                }));
                break;
              default:
                break;
            }
          }
        }
    }
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
              return <div key={day}> {day.slice(0, 1)} </div>;
            })}
            {dates.monthGrid.map((day) => {
              return (
                <button
                  key={day.day}
                  type="button"
                  disabled={day.isDisable}
                  className={cn(styles.datePickerCell, {
                    [styles.currentDay]: day.isCurrentDay,
                    [styles.datePickerDisabled]: day.isDisable,
                  })}
                >
                  {day.isVisible && day.day}
                </button>
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
                  <Icons name="Clock" />
                  <input
                    type="text"
                    value={`${hour.hour_hh}${hour.separator}${hour.hour_mm}`}
                    // onChange={}
                    ref={inputTimeRef}
                    id="time-input"
                    onClick={handleInput}
                    onKeyDown={handleKeyDown}
                  />
                  <button>
                    <Icons name="Cancel" />
                  </button>
                </div>

                {showListOfHour && (
                  <div className={styles.hourSelector} id="hour-list">
                    <ul>
                      {hoursSelector.map((hour: string, index: number) => {
                        if (index === 0) {
                          return (
                            <li key={hour} className={styles.listHourSelected}>
                              {hour}
                              <Icons name="Check" fill="#4895ef" />
                            </li>
                          );
                        }

                        return <li key={hour}> {hour} </li>;
                      })}
                    </ul>
                  </div>
                )}
              </>
            )}
            <button className={styles.blueButton}> Repetir </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSelector;
