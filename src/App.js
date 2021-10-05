import logo from "./logo.png";
import "./App.css";
import Header from "./componets/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componets/Home/Home";
import About from "./componets/About/About";
import Services from "./componets/Services/Services";
import Contact from "./componets/Contact/Contact";
import Page404 from "./componets/Page404/Page404";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about-us">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Page404></Page404>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
