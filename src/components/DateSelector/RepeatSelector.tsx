import { useState } from "react";
import styles from "./DateSelector.module.css";

const RepeatSelector = () => {
  interface repetionConfig {
    isRepeating: boolean;
    RepeatType: "dayly" | "weekly" | "monthly" | "yearly";
    interval: number;
    repeatValue: string;
    endStretegy: "endless" | "by_date" | "by_coount";
    endDate: Date | null;
    ocurrenceLimit: number | null;
  }

  // TODO Quitar cuando tenga las valores. 
  const repetition = {
    semanal: "martes",
    mensual: "día 31",
    anual: "día 31",
    diaSemana: "Lun-Vie",
  };

  const [repetion, setRepetion] = useState<repetionConfig>(
    {
        isRepeating: false,
        RepeatType: "dayly",
        interval: 1,
        repeatValue: "",
        endStretegy: "endless",
        endDate: null,
        ocurrenceLimit: null
    })
    
  return (
    <div className={styles.repeatSelectorContainer}>
      <button> Diario </button>
      <button>
        Semanal <span> ({repetition.semanal}) </span>
      </button>
      <button>
        Mensual <span> ({repetition.mensual}) </span>
      </button>
      <button>
        Anual <span> ({repetition.anual}) </span>
      </button>
      <button>
        Dias de la semana <span> ({repetition.diaSemana}) </span>
      </button>
    </div>
  );
};

export default RepeatSelector;
