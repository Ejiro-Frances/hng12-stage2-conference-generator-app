import PropTypes from "prop-types";
import { jsPDF } from "jspdf";
import bwipjs from "bwip-js";

const TicketConfirmation = ({ step, formData, resetStep }) => {
  const ticketNumber = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random ticket number

  // Function to generate barcode and download PDF
  const generatePDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Conference Ticket", 80, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.fullName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Ticket Type: ${formData.ticketType}`, 20, 60);
    doc.text(`Number of Tickets: ${formData.quantity}`, 20, 70);
    doc.text(`Special Request: ${formData.specialRequest || "None"}`, 20, 80);
    doc.text(`Ticket Number: ${ticketNumber}`, 20, 90);

    // Generate barcode
    const barcodeCanvas = document.createElement("canvas");
    bwipjs.toCanvas(barcodeCanvas, {
      bcid: "code128", // Barcode type
      text: ticketNumber, // Ticket number
      scale: 3, // Scale factor
      height: 10, // Barcode height
      includetext: true,
      textxalign: "center",
    });

    // Convert barcode canvas to image and add it to PDF
    const barcodeImage = barcodeCanvas.toDataURL("image/png");
    doc.addImage(barcodeImage, "PNG", 20, 100, 120, 20);

    // Add avatar image (if uploaded)
    if (formData.avatar) {
      doc.addImage(formData.avatar, "JPEG", 140, 40, 50, 50);
    }

    doc.save("conference_ticket.pdf");
  };

  return (
    <div className="ticket-confirmation">
      <div className="step-container">
        <h2>Your Ticket is Booked!</h2>
        <p>Step {step}/3</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </div>

      <div className="ticket">
        <h3>Techember Fest `&quot;`25</h3>
        <p>{formData.fullName}</p>
        <p>{formData.email}</p>
        <p>
          🎟 {formData.ticketType} - {formData.quantity} Ticket(s)
        </p>
        <p>📜 Special Request: {formData.specialRequest || "None"}</p>
        <p>🎫 Ticket Number: {ticketNumber}</p>

        {/* Avatar Display */}
        {formData.avatar && (
          <img src={formData.avatar} alt="Avatar" className="avatar-display" />
        )}

        {/* Barcode */}
        <canvas id="barcodeCanvas"></canvas>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button
          type="button"
          className="button button-secondary"
          onClick={resetStep}
        >
          Book Another Ticket
        </button>
        <button
          type="button"
          className="button button-primary"
          onClick={generatePDF}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

TicketConfirmation.propTypes = {
  step: PropTypes.number.isRequired,
  prevStep: PropTypes.func.isRequired,
  resetStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default TicketConfirmation;
