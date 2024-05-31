import React from "react";
import "./Letter.css";

function Letter() {
  const name = "Sumit Kumar";
  const certificateno = "CDACP/2024/ACTS/WBL/00254";
  const currentDate = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div
        className="container"
        id="printContainer"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="top" style={{ height: "200px", width: "100%" }}></div>

        <div className="row" style={{ height: "700px" }}>
          <div className="col-md-2"></div>
          <div
            className="col-md-8"
            style={{ fontSize: "16px", textAlign: "justify" }}
          >
            <p>{certificateno}</p>
            <div className="mt-5">
              <p>
                Lorem ipsum dolor sit, amet consectetur{" "}
                <span className="fw-bold">{name}</span> elit. Accusantium,
                magnam reiciendis illo impedit deleniti cumque expedita
                praesentium dicta consectetur saepe voluptatem, doloribus qui
                eos sapiente pariatur. Praesentium totam, ad nesciunt rem,
                maxime sint reiciendis et aperiam aut omnis a, vero atque
                cupiditate eos odio iure. Rem fuga reprehenderit cupiditate
                voluptatum.
              </p>
            </div>
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, magnam reiciendis illo{" "}
                <span className="fw-bold">{name}</span> deleniti cumque expedita
                praesentium dicta consectetur saepe voluptatem, doloribus qui
                eos sapiente pariatur. Praesentium totam, ad nesciunt rem,
                maxime sint reiciendis et aperiam aut omnis a, vero atque
                cupiditate eos odio iure. Rem fuga reprehenderit cupiditate
                voluptatum.
              </p>
            </div>
            <div className="mt-4">
              <p>
                Date: <span>{formattedDate}</span>
              </p>
            </div>
            <div className="mt-4">
              <p>Signature:</p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="footer text-center" style={{ height: "100px" }}>
          <hr />
          <small className="">
            CONTACT US lorem5 Innovation Park, Rajapul, Pashan, Patna - 411 008,
            Patna (India) Phone: +91-20-******* Fax: +91-20-*******
          </small>
        </div>
      </div>
      <div className="text-center mt-3 mb-5 no-print">
        <button className="btn btn-success ps-4 pe-4" onClick={handlePrint}>
          Print
        </button>
      </div>
    </>
  );
}

export default Letter;