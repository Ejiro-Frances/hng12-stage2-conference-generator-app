import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/Header/Header"; // Move Header here
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      <PageRoutes />
    </Router>
  );
};

export default App;

// import PageRoutes from "./routes/PageRoutes";

// import "./styles.css";
// import EventTicket from "./components/EventTicket";

// const App = () => {
//   return (
//     <div>
//       <PageRoutes />
//       <EventTicket />;
//     </div>
//   );
// };
// export default App;
