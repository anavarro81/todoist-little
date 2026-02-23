import styles from "./NewTaskButton.module.css";
import { Icons } from "../Icons";
interface NewTaskButtonProps {
  showNewTaskWindow: React.MouseEventHandler<HTMLButtonElement>;
}

const NewTaskButton = ({ showNewTaskWindow }: NewTaskButtonProps) => {
  return (
    <button className={styles.newTaskButton} onClick={showNewTaskWindow}>
      {<Icons name="Add" />} Añadir Tarea
    </button>
  );
};

export default NewTaskButton;
