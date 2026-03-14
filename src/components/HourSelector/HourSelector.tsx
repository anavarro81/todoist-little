import styles from "./HourSelector.module.css";

const HourSelector = () => {
  return <div className={styles.container}>

    <label htmlFor="time"> Hora </label>
    <input type="time" />

  </div>;
};

export default HourSelector;
