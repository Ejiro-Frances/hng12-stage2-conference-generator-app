import { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";

const TicketNumber = () => {
  const [ticketNumber, setTicketNumber] = useState("");

  const generateTicketNumber = () => {
    let savedTicketNumber = localStorage.getItem("ticketNumber");

    if (!savedTicketNumber) {
      savedTicketNumber = Math.floor(
        100000 + Math.random() * 900000
      ).toString(); // Generates 6-digit number
      localStorage.setItem("ticketNumber", savedTicketNumber);
    }
    return savedTicketNumber;
  };

  // ✅ Ensures ticket number is set on mount
  useEffect(() => {
    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);

    setTimeout(() => {
      if (document.getElementById("barcodeCanvas")) {
        JsBarcode("#barcodeCanvas", newTicketNumber, {
          format: "CODE128",
          displayValue: false,
          lineColor: "#fff",
          width: 2,
          height: 50,
          margin: 0,
        });
      }
    }, 500);
  }, []);

  return (
    <div className="bar-code-container">
      <svg className="bar-code" id="barcodeCanvas"></svg>
      <div className="ticket-number">{ticketNumber}</div>
    </div>
  );
};

export default TicketNumber;

// import { useEffect, useState } from "react";

// import bwipjs from "bwip-js";
// import JsBarcode from "jsbarcode";

// const TicketNumber = () => {
//   const [ticketNumber, setTicketNumber] = useState("");

//   const generateTicketNumber = () => {
//     let savedTicketNumber = localStorage.getItem("ticketNumber");

//     if (!savedTicketNumber) {
//       savedTicketNumber = Math.floor(
//         100000 + Math.random() * 900000
//       ).toString(); // Generates 6-digit number
//       localStorage.setItem("ticketNumber", savedTicketNumber); // Save to LocalStorage
//     }
//     return savedTicketNumber;
//   };

//   // Set ticket number on component mount
//   useEffect(() => {
//     // setTicketNumber(generateTicketNumber());
//     const newTicketNumber = generateTicketNumber();
//     setTicketNumber(newTicketNumber);

//     if (ticketNumber) {
//       JsBarcode("#barcodeCanvas", ticketNumber, {
//         format: "CODE128",
//         displayValue: false,
//         lineColor: "#fff",
//         width: 2,
//         height: 50,
//         margin: 0,
//       });
//     }
//   }, [ticketNumber]);

//   // Generate barcode on component mount
//   useEffect(() => {
//     if (ticketNumber) {
//       JsBarcode("#barcodeCanvas", ticketNumber, {
//         format: "CODE128",
//         displayValue: false,
//         lineColor: "#fff",
//         width: 2,
//         height: 50,
//         margin: 0,
//       });
//     }
//   }, [ticketNumber]);

//   // Generate barcode
//   const barcodeCanvas = document.createElement("canvas");
//   bwipjs.toCanvas(barcodeCanvas, {
//     bcid: "code128", // Barcode type
//     text: ticketNumber, // Ticket number
//     scale: 3, // Scale factor
//     height: 10, // Barcode height
//     includetext: true,
//     textxalign: "center",
//   });

//   return (
//     <div className="bar-code-container">
//       <svg className="bar-code" id="barcodeCanvas"></svg>
//       <div className="ticket-number">{ticketNumber}</div>
//     </div>
//   );
// };

// export default TicketNumber;
