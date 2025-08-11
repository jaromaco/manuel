import React, { useRef , useState } from "react";
import ContactForm from "./ContactForm";
import PopUp from "./PopUp";
import Title from "../common/Title";
import Text from "../about-me/Text"

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
        <Title text="Contactanos" subtitle="Hablemos de tu proyecto"/>
        <div className="text-contact"><p>Estoy a tu disposición para evaluar tus necesidades y ofrecerte una solución profesional y ajustada. Cuéntame qué necesitas y me pondré en contacto contigo para ofrecerte un presupuesto detallado, gratuito y sin ningún tipo de compromiso.</p></div>
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