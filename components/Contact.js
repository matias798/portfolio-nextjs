// Styles
import Styles from "./../styles/Contact.module.css";

// Module export
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Contact = () => {
  const { t } = useTranslation("global");

  const emailHandler = (e) => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matiasq.dkk@gmail.com",
    );
    Swal.fire({
      text: `${t("Contact.EmailText")}`,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };
  return (
    <div id="Contact">
      <div className={Styles.Bg}>
        <h2 className={Styles.Title}>{t("Contact.Title")}</h2>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <Button variant="primary" className={Styles.Button}>
            <span
              className={Styles.ButtonText}
              onClick={() => {
                // Copy text to clipboard
                var textArea = document.createElement("textarea");
                textArea.value = "+4557201947 |";
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                textArea.remove();

                Swal.fire({
                  title: `${t("Contact.Copy")}`,
                  text: `${t("Contact.CopiedText")}`,
                });
              }}
            >
              {t("Contact.Call")}
            </span>
          </Button>
          <Button
            variant="outline-primary"
            className={Styles.SecondaryButton}
            onClick={() => {
              emailHandler();
            }}
          >
            <span className={Styles.ButtonText}>{t("Contact.email")} </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
