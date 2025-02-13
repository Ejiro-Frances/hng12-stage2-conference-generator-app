import { Routes, Route } from "react-router-dom";

import Events from "../components/EventTicket";
// import Tickets from "../components/TicketSelection";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      {/* <Route path="/tickets" element={<Tickets />} /> */}
    </Routes>
  );
};

export default PageRoutes;
