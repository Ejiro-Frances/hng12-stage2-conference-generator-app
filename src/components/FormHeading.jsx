const TitleBox = () => {
  return (
    <section className="ticket-details">
      <div>
        <h1 className="ticket-heading">Techember Fest &quot;25</h1>
        <p>
          <span className="ticket-description">
            Join us for an unforgettable experience at
          </span>
          <span className="ticket-description">
            [Event Name]! Secure your spot now.
          </span>
        </p>
      </div>

      <div>
        <p className="event-details">
          <span>📍[Event Location]</span>
          <span className="event-details-demacation">| |</span>
          <span>March 15, 2025 | 7:00PM</span>
        </p>
      </div>
    </section>
  );
};

export default TitleBox;
