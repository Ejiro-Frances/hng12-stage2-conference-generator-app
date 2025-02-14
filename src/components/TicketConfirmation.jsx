import { jsPDF } from "jspdf";
import PropTypes from "prop-types";
import TicketNumber from "./TicketNumber";
import { useEffect } from "react";

const TicketConfirmation = ({ step, formData, resetStep }) => {
  useEffect(() => {
    if (formData) {
      localStorage.setItem("savedTicket", JSON.stringify(formData));
    }
  }, [formData]);

  const ticketNumber = localStorage.getItem("ticketNumber") || "000000";

  // Function to generate barcode and download PDF
  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Set Background Color
    doc.setFillColor(14, 70, 79); // #0e464f
    doc.rect(0, 0, 210, 297, "F"); // Fills the entire page with color

    // Add Background Image (Ensure it's Base64 or an Online URL)
    const backgroundImage = "../public/confirmation-container.png";
    doc.addImage(backgroundImage, "JPEG", 0, 0, 210, 297);
    doc.setTextColor(250, 250, 250); // #fafafa
    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text('Techember Fest "25', 60, 30);
    // Event Location
    doc.setFontSize(12);
    doc.text("04 Rumens Road, Ikoyi, Lagos", 60, 40);
    doc.text("March 15, 2025 | 7:00 PM", 60, 50);
    // Avatar
    if (formData.avatar) {
      doc.addImage(formData.avatar, "JPEG", 80, 55, 50, 50);
    }

    // Grid Layout
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Name", 20, 120);
    doc.text("Email Address", 120, 120);

    doc.setFont("helvetica", "normal");
    doc.text(formData.fullName, 20, 130);
    doc.text(formData.email, 120, 130);

    doc.setFont("helvetica", "bold");
    doc.text("Ticket Type:", 20, 150);
    doc.text("Ticket for:", 120, 150);

    doc.setFont("helvetica", "normal");
    doc.text(formData.ticketType, 20, 160);
    doc.text(formData.quantity, 120, 160);

    // Special Request
    doc.setFont("helvetica", "bold");
    doc.text("Special request?", 20, 180);
    doc.setFont("helvetica", "italic");
    doc.text(formData.specialRequest || "None", 20, 190);

    // Ticket Number and Barcode
    doc.setFont("helvetica", "bold");
    doc.text("Ticket Number:", 20, 220);
    doc.setFont("helvetica", "normal");
    doc.text(ticketNumber, 60, 220);

    // Add Barcode Image
    const barcodeCanvas = document.getElementById("barcodeCanvas");

    if (barcodeCanvas && barcodeCanvas instanceof HTMLCanvasElement) {
      const barcodeImage = barcodeCanvas.toDataURL("image/png");
      doc.addImage(barcodeImage, "PNG", 20, 100, 120, 20);
    } else {
      console.error("Barcode canvas not found!");
    }
    // Save the PDF
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
        <h2 className="confirmation-title">Your Ticket is Booked!</h2>
        <p className="desktop-p">
          Check your email for a copy or you can
          <strong className="d" onClick={generatePDF}>
            download
          </strong>
        </p>
        <p className="mobile-p">
          You can
          <span className="d" onClick={generatePDF}>
            download
          </span>
          or check your email for a copy
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

          {/* Render the TicketNumber component */}
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
          id="download"
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
