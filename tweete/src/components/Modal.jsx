import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      <dialog open className={classes.modal}

        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  )
}

export default Modal;