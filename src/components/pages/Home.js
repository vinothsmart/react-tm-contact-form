import { ContactForm } from "./ContactForm";

export const Home = () => {
  return (
    <>
      {/* <div className="container">
        <div className="py-4">
          <h1> Home </h1>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right">
              <button class="btn btn-default">
                <i className="glyphicon glyphicon-user"></i> Log In
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Contact us</h2>
            <p>Please fill in form on the right to get fast reply</p>
            <img
              style={{ width: "100%" }}
              src="http://via.placeholder.com/300x200"
            />
          </div>
          <div className="col-md-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
