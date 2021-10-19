import React, {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'

const Modal = () => {
  const {isModelOpen, closeModel} = useContext(AppContext)

  return <div className={isModelOpen ? "modal-overlay show-modal": "modal-overlay"}>
    <div className="modal-container">
      <h3>model content</h3>
      <button className="close-modal-btn" onClick={closeModel}>
        <FaTimes/>
      </button>
    </div>
  </div>
}

export default Modal
