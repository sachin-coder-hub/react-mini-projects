import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopup = () => {
    setShowPopUp(!showPopUp);
  };
  function onClose() {
    setShowPopUp(false);
  }
  return (
    <div>
      <button onClick={togglePopup}>Open Modal popup</button>
      {showPopUp && <Modal onClose={onClose} id={"custom-id"} />}
    </div>
  );
}
