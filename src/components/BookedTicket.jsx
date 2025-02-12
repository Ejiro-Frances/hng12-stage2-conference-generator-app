const BookedTicket = () => {
  return (
    <section className="booked-ticket-container">
      <h2>Your Ticket is Booked!</h2>
      <p>
        Check your email for a copy or you can <strong>download</strong>
      </p>

      <div className="booked-ticket">
        <div className="user-booking-details">
          <h3>Techember Fest 25</h3>
          <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
          <p>📅 March 15, 2025 | 7:00 PM</p>
          <img src="avatar.jpg" alt="Attendee Photo" className="avatar" />

          <section className="user-details">
            <div>
              <p className="detail-title">Enter your name</p>
              <h5 className="detail-result">Avi Chukwu</h5>
            </div>

            <div>
              <p className="detail-title">Enter your email *</p>
              <h5 className="detail-result">User@email.com</h5>
            </div>

            <div>
              <p className="detail-title">Ticket Type:</p>
              <h5 className="detail-result">VIP</h5>
            </div>

            <div>
              <p className="detail-title">Ticket for:</p>
              <p className="detail-result">1</p>
            </div>

            <div>
              <p className="detail-title">Special request?</p>
              <p className="detail-result">
                Nil ? Or the users sad story they write in there gets this whole
                space, Max of three rows
              </p>
            </div>
          </section>
        </div>
        <div className="barcode"></div>
      </div>
    </section>
  );
};

export default BookedTicket;
