const About = () => {
  return (
    <section className="main about">
      <h2 className="about-title">
        About This Conference Ticket Generator App
      </h2>
      <p className="about-p">
        The Conference Ticket Generator is a web-based application that allows
        users to book event tickets seamlessly. It features a form with three
        stages for selecting the type and number of ticket(s), getting attendee
        details, and generating a personalized digital ticket with a unique
        barcode. With real-time form validation, Cloudinary-powered image
        uploads, and local storage for data persistence, the platform ensures a
        smooth and user-friendly ticketing experience.
      </p>
      <p className="about-p">
        This project was made with love and any improvement can be sent to us
        via
        <a className="mail-to" href="mailto:francesejiro@yahoo.com">
          email
        </a>
        .
      </p>
    </section>
  );
};
export default About;
