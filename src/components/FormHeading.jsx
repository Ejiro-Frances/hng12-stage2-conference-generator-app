const TitleBox = () => {
  return (
    <section className="ticket-details">
      <h1 className="ticket-heading">Techember Fest &quot;25</h1>
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

export default TitleBox;
