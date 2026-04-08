import styles from "./NewTaskWindow.module.css";
import { Icons } from "../Icons";
import { useState } from "react";
import DateSelector from "../DateSelector/DateSelector";
import PrioritySelector from "../PrioritySelector/PrioritySelector";

interface NewTaskWindowProps {
  isVisible: boolean;
}

interface ITask {
  name: string;
  description: string;
  dueDate: Date | null;
  label: string[];
  proyect: string;
}

const initialTaskForm = {
  name: "",
  description: "",
  dueDate: null,
  label: [],
  proyect: "",
};

const NewTaskWindow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [isVisibleDateSelector, setIsVisibeDateSelector] = useState(false);

  const [formTask, setFormTask] = useState<ITask>(initialTaskForm);

  const handleTaskForm = (name: string, value: any) => {
    setFormTask((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDateSelector = () => {
    setIsVisibeDateSelector(!isVisibleDateSelector);
  };

  return (
    isVisible && (
      <>
        <div className={styles.newTaskWindow}>
          <h1>Añadir nueva tarea</h1>
          <form className={styles.newTaskForm}>
            <input type="text" placeholder="Nombre de la tarea" />
            <input type="text" placeholder="Descripción de la tarea"></input>
            <div className={styles.btnContFristBlock}>
              <button
                type="button"
                className={styles.dateButton}
                onClick={() => {
                  // e.preventDefault();
                  toggleDateSelector();
                }}
              >
                {<Icons name="Calendar" />}
                <span>Fecha</span>
                {<Icons name="Chevron" />}
              </button>
              {isVisibleDateSelector && (
                <DateSelector handleTaskForm={handleTaskForm} />
              )}
              <div>
                <button className={styles.primaryButton}>
                  {<Icons name="Priority" />}
                  Prioridad
                  {<Icons name="Chevron" />}
                </button>

                <PrioritySelector priority="p4"/>
              </div>

              {/* <button>
                {<Icons name="Label" />}
                Etiqueta
                {<Icons name="Chevron" />}
              </button> */}
            </div>
            <div className={styles.btnContSecondBlock}>
              {/* <button>
                {<Icons name="Project" />}
                <span>Asignar proyecto </span>
              </button> */}
              <button>
                {<Icons name="Cancel" />}
                <span>Cancelar </span>
              </button>
              <button>
                {<Icons name="Add" />}
                Añadir tarea
              </button>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default NewTaskWindow;

/* Añadir nueva tarea */
