import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'

const Modal = () => {
  return <div className="modal-overlay">
    <div className="modal-container">
      <h3>model content</h3>
      <button className="close-modal-btn">
        <FaTimes/>
      </button>
    </div>
  </div>
}

export default Modal
