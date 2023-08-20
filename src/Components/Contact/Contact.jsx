import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="overlay">
          <form>
            <div className="topic">
              <p>Contact Us</p>
              <h3>Make an Appointment</h3>
            </div>
            <div className="form">
              <div className="wrap">
                <input type="text" name="fullName" placeholder="Full Name" />
                <input
                  type="text"
                  name="email"
                  placeholder="Example@gmail.com"
                />
                <select name="service" id="service">
                  <option value="select">Please Select</option>
                </select>
                <select name="service" id="service">
                  <option value="select">4:00 Available</option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              />
              <button>Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
