import styles from "./ConfirmationModal.module.css";


interface ConfirmationModalPros {
    setShowConfirmModal: (value: boolean) => void;
    closeConfirmModal: () => void,
    handleDismiss: () => void,
    handleConfirmDiscard: () => void
}


const ConfirmationModal = (props: ConfirmationModalPros) => {
  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <h1>¿Descartar los cambios?</h1>
          <div>Los cambios no guardados se descartaran</div>
          <div className={styles.modalButtonsContainer}>
            <button type="button" onClick={props.closeConfirmModal}> Cancelar </button>
            <button type="button" onClick={props.handleConfirmDiscard}className={styles.primaryButton}> Descartar </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ConfirmationModal;
