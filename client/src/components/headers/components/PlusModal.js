import React from 'react'
import Modal from 'react-modal';


const PlusModal = (props) => {
    
    const stateModal = props.hide
    console.log(stateModal)
    
        return (
            <div style={{display: 'flex'}}>
            <Modal
              isOpen={stateModal}
              onRequestClose={stateModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div style={{textAlign: 'center', fontSize:'25px'}}>Welcome Back</div>
            </Modal>
          </div>
        )
    }

export default PlusModal


const customStyles = {
    content : {
      width                 : '10%',
      height                : '15%',
      top                   : '10%',
      left                  : '80%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)'
    }
  };