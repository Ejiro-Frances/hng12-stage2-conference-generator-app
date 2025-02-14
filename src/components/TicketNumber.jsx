import { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";

const TicketNumber = () => {
  const [ticketNumber, setTicketNumber] = useState("");

  const generateTicketNumber = () => {
    let savedTicketNumber = localStorage.getItem("ticketNumber");

    if (!savedTicketNumber) {
      savedTicketNumber = Math.floor(
        100000 + Math.random() * 900000
      ).toString(); // Generates 6-digit number
      localStorage.setItem("ticketNumber", savedTicketNumber);
    }
    return savedTicketNumber;
  };

  // ✅ Ensures ticket number is set on mount
  useEffect(() => {
    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);

    setTimeout(() => {
      if (document.getElementById("barcodeCanvas")) {
        JsBarcode("#barcodeCanvas", newTicketNumber, {
          format: "CODE128",
          displayValue: false,
          lineColor: "#fff",
          width: 2,
          height: 40,
          margin: 0,
          background: "transparent",
        });
      }
    }, 300);
  }, []);

  return (
    <div className="bar-code-container">
      <svg className="bar-code" id="barcodeCanvas"></svg>
      <div className="ticket-number">{ticketNumber}</div>
    </div>
  );
};

export default TicketNumber;
