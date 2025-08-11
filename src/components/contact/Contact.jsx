import React, { useRef , useState } from "react";
import ContactForm from "./ContactForm";
import PopUp from "./PopUp";
import Title from "../common/Title";

export default function Contact () {

  const formRef = useRef()
  
  const [showPopup, setShowPopup] = useState(false)

  const handleFormSuccess = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
                

      <div className="contact-container page form-contact">
        <Title text="Contactanos" />
        <ContactForm className="formulario" onSuccess={handleFormSuccess} formRef={formRef}/>
        {showPopup &&
          <PopUp msj="El mensaje fue recibido.lllNos pondremos en contacto con la mayor brevedad posible."
            onClose={closePopup}
          />
        }
      </div>
    </>
  );
}