import styles from "./NewTaskButton.module.css"
import Icons from "../Icons";


const NewTaskButton = () => {
  return (
    <button className={styles.newTaskButton}>
      {Icons.add} Añadir Tarea
    </button>
  );
};

export default NewTaskButton;