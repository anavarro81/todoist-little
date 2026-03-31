import styles from "./DateSelector.module.css";

const RepeatSelector = () => {
  const repetition = {
    semanal: "martes",
    mensual: "día 31",
    anual: "día 31",
    diaSemana: "Lun-Vie",
  };

  return (
    <div className={styles.repeatSelectorContainer}>
      <button> Diario </button>
      <button>
        {" "}
        Semanal <span> ({repetition.semanal}) </span>
      </button>
      <button>
        {" "}
        Mensual <span> ({repetition.mensual}) </span>
      </button>
      <button>
        {" "}
        Anual <span> ({repetition.anual}) </span>{" "}
      </button>
      <button>
        {" "}
        Dias de la semana <span> ({repetition.diaSemana}) </span>
      </button>
    </div>
  );
};

export default RepeatSelector;
