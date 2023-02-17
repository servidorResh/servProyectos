import '../css/Modal.css'

const Modal = ({children, isOpen,closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}` } onClick={closeModal}>
        <div className='modal-container'>
            <button class='modal-close' onClick={closeModal}>SALIR</button>
            {children}
        </div>
    </article>
    
  );
};

export default Modal