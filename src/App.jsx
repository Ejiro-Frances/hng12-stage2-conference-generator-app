import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";
import Header from "./components/Header/Header";
import Events from "./components/EventTicket";
import EventTicket from "./components/EventTicket";
import About from "./components/About";
import MyTicket from "./components/MyTicket";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/tickets" element={<EventTicket />} />
        <Route path="/about" element={<About />} />
        <Route path="/myticket" element={<MyTicket />} />
      </Routes>
    </Router>
  );
};

export default App;
