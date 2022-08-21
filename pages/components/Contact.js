import Styles from "../../styles/Contact.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div className={Styles.Bg}>
      <div className={`container ${Styles.Container}`}>
        <h2 className="pb-3 text-center"> Hablemos</h2>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className={Styles.FormControl}
              type="text"
              placeholder="Nombre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className={Styles.FormControl}
              type="email"
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Control
            as="textarea"
            rows={3}
            className={Styles.FormControl}
            style={{ height: "100px" }}
            placeholder="Envia tu mensaje"
            required
          />
          <Button variant="primary" type="submit" className={Styles.Button}>
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
