import styles from "./NewTaskWindow.module.css";
import { Icons } from "../Icons";
import { useState } from "react";
import DateSelector from "../DateSelector/DateSelector";
import PrioritySelector from "../PrioritySelector/PrioritySelector";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

interface NewTaskWindowProps {
  isVisible: boolean;
}

interface ITask {
  name: string;
  description: string;
  dueDate: Date | null;
  priority: string;
  label: string[];
  proyect: string;
}

const initialTaskForm = {
  name: "",
  description: "",
  dueDate: null,
  priority: "p4",
  label: [],
  proyect: "",
};

const defaultPriority = {
  haspriority: false,
  value: "p4",
  label: "prioridad 4",
  fill: "none",
  stroke: "#666",
};

const NewTaskWindow = () => {
  const [isVisible, setIsVisible] = useState(true);

  /* Confirmation Modal */

  // Toggle Confirm modal
  const [showConfirmModal, setShowConfirmModal] = useState(true);

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };

  // Se pulsa en cancelar el aviso.
  const handleDismiss = () => {};

  // Se descartan los cambios
  const handleConfirmDiscard = () => {
    setShowConfirmModal(false);
    setIsVisible(false);
  };

  const [isVisibleDateSelector, setIsVisibeDateSelector] = useState(false);

  const [formTask, setFormTask] = useState<ITask>(initialTaskForm);

  const handleTaskForm = (name: string, value: any) => {
    setFormTask((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDateSelector = () => {
    setIsVisibeDateSelector(!isVisibleDateSelector);
  };

  // Prioridad

  interface PriorityState {
    haspriority: boolean;
    value: "p1" | "p2" | "p3" | "p4";
    label: string;
    fill: string;
    stroke: string;
  }

  const [priorityState, setPriorityState] = useState<PriorityState>({
    haspriority: false,
    value: "p4",
    label: "",
    fill: "",
    stroke: "",
  });

  const [isVisiblePrioritySelector, setVisiblePrioritySelector] =
    useState(false);

  const togglePrioritySelect = () => {
    setVisiblePrioritySelector(!isVisiblePrioritySelector);
  };

  const changePriority = (priority: any) => {
    const haspriority = priority.value !== "p4";

    setPriorityState({
      haspriority,
      value: priority.value,
      label: priority.label,
      fill: priority.fill,
      stroke: priority.stroke,
    });

    // Cierra la lista despues de haber seleccionado una prioridad.
    togglePrioritySelect();
  };

  return (
    isVisible && (
      <>
        {showConfirmModal && (
          <ConfirmationModal
            handleConfirmDiscard={handleConfirmDiscard}
            setShowConfirmModal={setShowConfirmModal}
            handleDismiss={handleDismiss}
            closeConfirmModal={closeConfirmModal}
          />
        )}

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
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={togglePrioritySelect}
                >
                  {priorityState.haspriority ? (
                    <>
                      <Icons name="PriorityFlag" fill={priorityState.fill} />
                      <span> {priorityState.value.toUpperCase()} </span>
                      {
                        <Icons
                          name="Cancel"
                          stroke="white"
                          onClick={() => changePriority(defaultPriority)}
                        />
                      }
                    </>
                  ) : (
                    <>
                      <Icons name="Priority" />
                      <span> Prioridad </span>
                    </>
                  )}
                </button>

                {isVisiblePrioritySelector && (
                  <PrioritySelector
                    priority={priorityState.value}
                    changePriority={changePriority}
                  />
                )}
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

              <button type="button" onClick={() => setShowConfirmModal(true)}>
                {<Icons name="Cancel" />}
                <span>Cancelar </span>
              </button>

              <button type="submit">
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
