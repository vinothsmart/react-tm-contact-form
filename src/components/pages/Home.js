import { ContactForm } from "./ContactForm";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Message } from "./Message";

export const Home = () => {
  const history = useHistory();

  let intialValues = {
    name: "",
    email: "",
    option: "",
    select: "",
    message: "",
    terms: false,
  };
  const [form, setForm] = useState(intialValues);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    // console.log(form);
    setForm(form);
    console.log(form);
    history.push("/message");
  };

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
              <Link to={"login"}>
                <button class="btn btn-default">
                  <i className="glyphicon glyphicon-user"></i> Log In
                </button>
              </Link>
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
            <ContactForm
              handleChange={handleChange}
              sendForm={sendForm}
              form={form}
            />
          </div>
        </div>
      </div>
    </>
  );
};
