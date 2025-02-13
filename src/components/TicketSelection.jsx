import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormHeading from "./FormHeading";
import Line from "./Line";

const ticketTypes = [
  {
    name: "Regular",
    price: "Free",
    slotLeft: "20/52",
  },
  {
    name: "VIP",
    price: "$50",
    slotLeft: "20/52",
  },
  {
    name: "VVIP",
    price: "$150",
    slotLeft: "20/52",
  },
];

const TicketSelection = ({
  step,
  nextStep,
  resetStep,
  setFormData,
  formData,
}) => {
  return (
    <Formik
      initialValues={{
        ticketType: formData.ticketType || "",
        quantity: formData.quantity || "1",
      }}
      validationSchema={Yup.object({
        ticketType: Yup.string().required("Please select a ticket type"),
        quantity: Yup.string().required("Please select the number of tickets"),
      })}
      onSubmit={(values) => {
        setFormData((prev) => ({
          ...prev,
          ...values,
        }));

        // save to local storage
        localStorage.setItem("ticketType", values.ticketType);
        localStorage.setItem("quantity", values.quantity);

        nextStep(); // Move to the next step
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="main">
          <div>
            <div className="step-container">
              <h2 className="step-title">Ticket Selection</h2>
              <p className="step-num">Step {step}/3</p>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <FormHeading />
            <Line />
          </div>

          <div className="ticket-type-container">
            <p className="select-ticket">Select Ticket Type:</p>
            <ul className="tickets">
              {ticketTypes.map((ticket) => (
                <Ticket
                  ticketObj={ticket}
                  key={ticket.name}
                  setFieldValue={setFieldValue}
                  values={values}
                />
              ))}
            </ul>

            <ErrorMessage
              name="ticketType"
              component="div"
              className="error-message"
            />
          </div>

          <div className="ticket-quantity">
            <label className="quantity-label">Number of Tickets:</label>
            <Field as="select" name="quantity" className="quantity-select">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="quantity"
              component="div"
              className="error-message"
            />
          </div>

          <div className="button-container">
            <button
              type="button"
              className="button button-secondary"
              onClick={resetStep}
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Ticket = ({ ticketObj, setFieldValue, values }) => {
  return (
    <li
      className={`ticket ${
        values.ticketType === ticketObj.name ? "active" : ""
      }`}
      onClick={() => setFieldValue("ticketType", ticketObj.name)}
    >
      <p className="ticket-price">{ticketObj.price}</p>
      <p className="ticket-name">{ticketObj.name} Access</p>
      <span className="ticket-left">{ticketObj.slotLeft} left</span>
    </li>
  );
};

TicketSelection.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  resetStep: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

Ticket.propTypes = {
  ticketObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slotLeft: PropTypes.string.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.shape({
    ticketType: PropTypes.string,
  }).isRequired,
};
export default TicketSelection;
