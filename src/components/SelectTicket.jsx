import { useState } from "react";
import PropTypes from "prop-types";

const ticketType = [
  {
    name: "REGULAR ACCESS",
    price: "Free",
    slotLeft: "20/52",
  },
  {
    name: "VIP ACCESS",
    price: "$150",
    slotLeft: "20/52",
  },
  {
    name: "VVIP ACCESS",
    price: "$150",
    slotLeft: "20/52",
  },
];

const SelectTicket = () => {
  return (
    <>
      <TitleBox />
      <Line />
      <TicketType />
      <NumberOfTickets />
    </>
  );
};

const TitleBox = () => {
  return (
    <section className="ticket-details">
      <h1 className="ticket-heading">Techember Fest 25</h1>
      <p>
        <span className="ticket-description">
          Join us for an unforgettable experience at
        </span>
        <spa className="ticket-description">
          [Event Name]! Secure your spot now.
        </spa>
      </p>
      <p className="event-details">
        <span>📍[Event Location]</span>
        <span>| |</span>
        <span>March 15, 2025 | 7:00PM</span>
      </p>
    </section>
  );
};

const Line = () => {
  return <div className="line"></div>;
};

const TicketType = () => {
  const tickets = ticketType;
  //   const numTickets = tickets.length;
  return (
    <section className="ticket-types-container">
      <p className="select-ticket">Select Ticket Type:</p>

      <ul className="tickets">
        {tickets.map((ticket) => (
          <Ticket ticketObj={ticket} key={ticket.name} />
        ))}
      </ul>
    </section>
  );
};

const Ticket = ({ ticketObj }) => {
  return (
    <li className="ticket">
      <p className="ticket-price">{ticketObj.price}</p>
      <p>
        <span className="ticket-access">{ticketObj.name}</span>

        <span className="ticket-left">{ticketObj.slotLeft}</span>
      </p>
    </li>
  );
};

Ticket.propTypes = {
  ticketObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slotLeft: PropTypes.string.isRequired,
  }).isRequired,
};

const NumberOfTickets = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="ticket-quantity">
      <label className="quantity-label">Number of Tickets</label>
      <select
        className="quantity-select"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 52 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTicket;
