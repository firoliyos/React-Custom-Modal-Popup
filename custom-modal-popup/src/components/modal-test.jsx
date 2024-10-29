import {useState} from 'react'
import Modal from "./modal"

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false)
    function handlePopup() {
        setShowModalPopup(!showModalPopup)
    }
   return(
    <div>
      <button onClick={handlePopup} >Open Modal Popup</button> 
      {
         showModalPopup && <Modal body={<div>Customized Body</div>} />
      } 
    </div>
   )
}