import {useState} from 'react'
import Modal from "./modal"
import './modal.css'
export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false)
    function handlePopup() {
        setShowModalPopup(!showModalPopup)
    }
    function onClose() {
        setShowModalPopup(false) 
    }
   return(
    <div>
      <button style={{cursor: 'pointer'}} onClick={handlePopup} >Open Modal Popup</button> 
      {
         showModalPopup && <Modal
          header={<h1>CUSTOMIZED HEADER</h1>}
          footer={<h1>CUSTOMIZED FOOTER</h1>}
         onClose={onClose} body={<div>Customized Body</div>} />
      } 
    </div>
   )
}