export const ContactForm = () => {
  return (
    <>
      {/* <div className="container">
        <div className="py-4">
          <h1> ContactForm </h1>
        </div>
      </div> */}
      <form>
        <h3>Contact Form</h3>

        <div class="form-group">
          <label className="form-label">Your Name:</label>
          <input name="name" className="form-control" />
        </div>

        <div class="form-group">
          <label className="form-label">Your Best Email:</label>
          <input name="email" className="form-control" />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div class="form-group row">
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A" /> Option A
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B" /> Option B
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C" /> Option C
          </label>
        </div>

        <hr />

        <div class="form-group">
          <label className="form-label">What can we help you with:</label>
          <select className="form-control" name="select">
            <option value="1">I have question about my membership</option>
          </select>
        </div>

        <div class="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Please type your question here"
            className="form-control"
          />
        </div>

        <div class="form-group">
          <label className="form-label">
            {" "}
            <input type="checkbox" name="terms" /> I agree to terms and
            conditions{" "}
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    </>
  );
};
