import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyTicket = () => {
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTicket = localStorage.getItem("savedTicket");
    if (savedTicket) {
      setTicket(JSON.parse(savedTicket));
    }
  }, []);

  return (
    <main className="main">
      {ticket ? (
        <div className="ticket c-ticket">
          <h2>Your Ticket</h2>
          <p>
            <strong>Name:</strong> {ticket.fullName}
          </p>
          <p>
            <strong>Email:</strong> {ticket.email}
          </p>
          <p>
            <strong>Ticket Type:</strong> {ticket.ticketType}
          </p>
          <p>
            <strong>Quantity:</strong> {ticket.quantity}
          </p>
          <p>
            <strong>Special Request:</strong> {ticket.specialRequest || "None"}
          </p>
          <button
            className="button button-primary"
            onClick={() => navigate("/tickets")}
          >
            Book Another Ticket
          </button>
        </div>
      ) : (
        <div className="ticket c-ticket">
          <h2>No Ticket Found</h2>
          <p>You have not booked any tickets yet.</p>
          <button
            className="button button-primary"
            onClick={() => navigate("/")}
          >
            Book a Ticket Now
          </button>
        </div>
      )}
    </main>
  );
};

export default MyTicket;
