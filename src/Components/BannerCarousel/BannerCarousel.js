import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BannerCarousel.css";

const BannerCarousel = () => {
  return (
    <div>
      <Carousel className="banner">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/z4Ds5Gf/bd-books-warehouse-7.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <Link to="/">
              <button className=" btn-banner">Manage Items</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Cs0Kc73/bd-books-warehouse-6.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <Link to="/">
              <button className=" btn-banner">Manage Items</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Bqt7wf6/bd-books-warehouse-5.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <Link to="/">
              <button className=" btn-banner">Manage Items</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/fdcqcRd/bd-books-warehouse-4.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <button className="btn-banner">Manage Items</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/m9QGchZ/bd-books-warehouse-10.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <button className="btn-banner">Manage Items</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
