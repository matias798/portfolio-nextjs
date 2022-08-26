// Styles
import Styles from "./../styles/Contact.module.css";

// Module export
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Contact = () => {
  const emailHandler = (e) => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matiasquiroga584@gmail.com"
    );
    Swal.fire({
      text: "Gracias por contactarme, me pondré en contacto contigo a la brevedad.",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <div id="Contact">
      <div className={Styles.Bg}>
        <h2 className={Styles.Title}>¿Necesitas una pagina web?</h2>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <Button variant="primary" className={Styles.Button}>
            <span
              className={Styles.ButtonText}
              onClick={() => {
                // Copy text to clipboard
                var textArea = document.createElement("textarea");
                textArea.value = "93415638192";
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();

                Swal.fire({
                  title: "¡Copiado!",
                  text: "Se ha copiado el numero a tu portapapeles",
                });
              }}
            >
              LLamame
            </span>
          </Button>
          <Button
            variant="outline-primary"
            className={Styles.SecondaryButton}
            onClick={() => {
              emailHandler();
            }}
          >
            <span className={Styles.ButtonText}>Enviame un mail</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
