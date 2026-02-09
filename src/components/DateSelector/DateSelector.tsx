import styles from "./DateSelector.module.css";
import Icons from "../Icons";

interface DateSelectorProps {
  currentDate: Date;
}

const DateSelector = ({ currentDate }: DateSelectorProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.datePickerQuickSelect}>
          <div>
            <span>Hoy</span> <span>Lun</span>
          </div>
          <div>
            <span>Mañana</span> <span>Mar</span>
          </div>
          <div>
            <span>Próxima semana</span> <span>Lun</span>
          </div>
          <div>
            <span>Próxima mes</span> <span>xxx</span>
          </div>
        </div>
        


      </div>
      ;
    </>
  );
};

export default DateSelector;
