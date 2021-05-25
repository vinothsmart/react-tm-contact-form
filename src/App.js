import "./App.css";
import { Home, Login, Message } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <ContactForm />
        <Login /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/message" component={Message} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
