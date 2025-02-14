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
    <main className="booked-ticket final-ticket-container">
      {ticket ? (
        <div className="ticket c-ticket">
          <div className="user-booking-details">
            <h4 className="user-detail-title">Techember Fest &quot;25</h4>
            <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
            <p>📅 March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="avatar-container">
            <img
              src={ticket.avatar}
              alt="User Avatar"
              className="avatar-display"
            />
          </div>
          <div className="user-details">
            <div className="border-right border-bottom">
              <p className="detail-title">Name</p>
              <h5 className="detail-result">{ticket.fullName}</h5>
            </div>

            <div className="border-bottom padding-left">
              <p className="detail-title ">Email Address</p>
              <h5 className="detail-result email">{ticket.email}</h5>
            </div>

            <div className="border-right border-bottom">
              <p className="detail-title">Ticket Type:</p>
              <h5 className="detail-result-type">{ticket.ticketType}</h5>
            </div>

            <div className="border-bottom padding-left">
              <p className="detail-title">Ticket for:</p>
              <p className="detail-result-type">{ticket.quantity}</p>
            </div>

            <div>
              <p className="detail-title">Special request?</p>
              <p className="detail-result-type">
                {ticket.specialRequest || "Nil"}
              </p>
            </div>
          </div>
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
