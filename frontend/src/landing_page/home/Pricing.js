import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Smart Pricing</h1>
          <p>
            Experience low-cost trading with zero delivery charges and flat ₹20
            fees — no hidden costs, just smart value.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row p-5 text-center">
            <div className="col border p-3">
              <h1 className="mb-3 fs-2">₹0</h1>
              <p>
                Free Equity delivery and <br></br>direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-3 fs-2">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
