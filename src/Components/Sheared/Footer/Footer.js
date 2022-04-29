import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        bgColor="black"
        className="text-center text-lg-start text-white"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 container">
          <div className="me-5 d-none d-lg-block">
            <span>BD Books Are so Many Warehouses</span>
          </div>

          <div>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <section className="border-top">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>BD Books Warehouse
                </h6>
                <p>
                  BD Books Warehouse operates over 340k sq ft of modern
                  warehousing at its distribution centre based near Natore
                  Shador.
                  <br />
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Security & payment
                </h6>
                <p>
                  <Link to="/" className="text-reset">
                    Privacy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Terms & conditions
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Purple Visa Card
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Warehouse Insurance
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Stores</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Store finder
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Current mailers
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Competitions
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Store defibrillators
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Natore, Rajshahi,
                  Bangladash
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  bd-books@warehouse.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 01577889966
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> 01511223344
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{"  "}
          <Link
            className="text-reset fw-bold"
            to="https://bd-books-warehouse.web.app/"
          >
            BD Books Warehouse
          </Link>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
