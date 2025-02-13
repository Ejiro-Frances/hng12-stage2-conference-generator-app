import { jsPDF } from "jspdf";
import PropTypes from "prop-types";
import TicketNumber from "./TicketNumber";

const TicketConfirmation = ({ step, formData, resetStep }) => {
  const ticketNumber = localStorage.getItem("ticketNumber") || "000000";

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

    // ✅ Select the existing barcode canvas
    const barcodeCanvas = document.getElementById("barcodeCanvas");

    if (barcodeCanvas) {
      const barcodeImage = barcodeCanvas.toDataURL("image/png");
      doc.addImage(barcodeImage, "PNG", 20, 100, 120, 20);
    }

    // ✅ Add avatar image (if uploaded)
    if (formData.avatar) {
      doc.addImage(formData.avatar, "JPEG", 140, 40, 50, 50);
    }

    doc.save("conference_ticket.pdf");
  };

  return (
    <div className="ticket-container">
      <div>
        <div className="step-container">
          <h2 className="step-title">Ready</h2>
          <p className="step-num">Step {step}/3</p>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}></div>
        </div>
      </div>

      <div className="ticket-confirmation-container">
        <h2>Your Ticket is Booked!</h2>
        <p>
          Check your email for a copy or you can <strong>download</strong>
        </p>

        <div className="booked-ticket">
          <div className="user-booking-details-container">
            <div className="user-booking-details">
              <h4 className="user-detail-title">Techember Fest &quot;25</h4>
              <div className="con-details">
                <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
            </div>
            <div className="avatar-container">
              {formData.avatar && (
                <img
                  src={formData.avatar}
                  alt="Avatar"
                  className="avatar-display"
                />
              )}
            </div>
            <div className="user-details">
              <div className="border-right border-bottom">
                <p className="detail-title">Enter your name</p>
                <h5 className="detail-result">
                  {formData.fullName || "Avi Chukwu"}
                </h5>
              </div>

              <div className="border-bottom padding-left">
                <p className="detail-title ">Enter your email *</p>
                <h5 className="detail-result email">
                  {formData.email || "User@email.com"}
                </h5>
              </div>

              <div className="border-right border-bottom">
                <p className="detail-title">Ticket Type:</p>
                <h5 className="detail-result-type">{formData.ticketType}</h5>
              </div>

              <div className="border-bottom padding-left">
                <p className="detail-title">Ticket for:</p>
                <p className="detail-result-type">{formData.quantity}</p>
              </div>

              <div>
                <p className="detail-title">Special request?</p>
                <p className="detail-result-type">
                  {formData.specialRequest || "Nil"}
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Render the TicketNumber component */}
          <TicketNumber />
        </div>
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
  resetStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default TicketConfirmation;
