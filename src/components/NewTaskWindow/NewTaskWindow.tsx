import styles from "./NewTaskWindow.module.css";
import { Icons } from "../Icons";
import { useState } from "react";

interface NewTaskWindowProps {
  isVisible: boolean;
}

//{ isVisible }: NewTaskWindowProps
const NewTaskWindow = () => {
  // return ()

  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className={styles.newTaskWindow}>
        <h1>Añadir nueva tarea</h1>
        <form className={styles.newTaskForm}>
          <input type="text" placeholder="Nombre de la tarea" />
          <input type="text" placeholder="Descripción de la tarea"></input>
          <div className={styles.btnContFristBlock}>
            <button>
              {<Icons name="Calendar" />}
              <span>Fecha</span>
              {<Icons name="Chevron" />}
            </button>
            <button>
              {<Icons name="Priority" />}
              Prioridad
              {<Icons name="Chevron" />}
            </button>
            <button>
              {<Icons name="Label" />}
              Etiqueta
              {<Icons name="Chevron" />}
            </button>
          </div>
          <div className={styles.btnContSecondBlock}>
            <button>
              {<Icons name="Project" />}
              <span>Asignar proyecto </span>
            </button>
            <button onClick={() => setIsVisible(false)}>
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
    )
  );
};

export default NewTaskWindow;

/* Añadir nueva tarea */
