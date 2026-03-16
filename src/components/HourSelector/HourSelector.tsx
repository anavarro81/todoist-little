import styles from "./HourSelector.module.css";

const HourSelector = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hourSelectInput}>
        <label htmlFor="time"> Hora </label>
        <select name="time" id="time">
          <option value="13:15">13:15</option>
          <option value="13:30">13:30</option>
          <option value="13:45">13:45</option>
          <option value="14:00">14:00</option>
        </select>
      </div>
      <div className={styles.hourSelectButtons}>
        <button className={styles.cancelButton} type="button">
          Cancelar
        </button>
        <button className={styles.acceptButton} type="button">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default HourSelector;
