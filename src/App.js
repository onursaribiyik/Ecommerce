import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components";
import Router from "./router";

import "./styles/App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
