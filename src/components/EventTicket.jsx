import { useState, useEffect } from "react";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import TicketConfirmation from "./TicketConfirmation";

// function to get data from local storage
const getSavedFormData = () => {
  const savedData = localStorage.getItem("formData");
  return savedData ? JSON.parse(savedData) : {};
};

const EventTicket = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(getSavedFormData());

  // save formData to localstorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const resetStep = () => {
    setStep(1);
    setFormData({});
    localStorage.removeItem("formData");
    window.location.reload();
  };

  return (
    <main className="main">
      {step === 1 && (
        <TicketSelection
          step={step}
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 2 && (
        <AttendeeDetails
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <TicketConfirmation
          step={step}
          prevStep={prevStep}
          resetStep={resetStep}
          formData={formData}
        />
      )}
    </main>
  );
};

export default EventTicket;
