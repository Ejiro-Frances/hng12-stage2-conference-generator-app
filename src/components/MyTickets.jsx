import { useState } from "react";
import PropTypes from "prop-types";
import SelectTicket from "./SelectTicket";
import UserForm from "./UserForm";
import BookedTicket from "./BookedTicket";

const MyTickets = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main className="main">
      <Steps step={step} />

      <section
        className={`ticket-container container ${step === 1 ? "active" : ""}`}
      >
        {step === 1 && <SelectTicket />}

        <Buttons step={step} nextStep={nextStep} prevStep={prevStep} />
      </section>

      <div className={`container ${step === 2 ? "active" : ""}`}>
        {step === 2 && <UserForm />}
        <Buttons step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>

      <div className={`container ${step === 3 ? "active" : ""}`}>
        {step === 3 && <BookedTicket />}
        <Buttons step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </main>
  );
};

const Steps = ({ step }) => {
  const stepTitles = {
    1: "Ticket Selection",
    2: "Attendee Details",
    3: "Ready",
  };

  return (
    <div>
      <div className="step-container">
        <div>
          <p className="step-title">{stepTitles[step]}</p>
        </div>

        <div>
          <p className="step-num">
            Step <span>{step}</span>/3
          </p>
        </div>
      </div>

      <div>
        <input
          className="step-input"
          type="range"
          value={step}
          min="1"
          max="3"
          readOnly
        />
      </div>
    </div>
  );
};

Steps.propTypes = {
  step: PropTypes.number.isRequired,
};

const Buttons = ({ step, nextStep, prevStep }) => {
  const buttonText = {
    1: { primary: "Next", secondary: "Cancel" },
    2: { primary: "Get My Free Ticket", secondary: "Back" },
    3: { primary: "Download Ticket", secondary: "Book Another Ticket" },
  };

  return (
    <div className="button-container">
      {/* {step > 1 && ( */}
      <button className="button button-secondary" onClick={prevStep}>
        {buttonText[step].secondary}
      </button>
      {/* )} */}
      <button className="button button-primary" onClick={nextStep}>
        {buttonText[step].primary}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default MyTickets;
