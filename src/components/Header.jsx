import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headerlogo from '../assets/images/png/header-logo-img.png'
import Menimg from '../assets/images/png/men-img.png'
import navlogo from "../assets/images/png/nav-logo.png";
import { Twitter } from "../components/IconImg";
import { Instagram } from "../components/IconImg";
import { Discord } from "../components/IconImg";
import { Link } from "react-router-dom";


function Header() {
  function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
  }
  return (
    <div>
      <div className="header_bg_img">
        <div>
          <Container className="custum_container py-2">
            <div className="d-flex align-items-center justify-content-between">
              <img src={navlogo} alt="navLogo" className="w-100 mw_128 h-100" />
              <ul
                id="navbar"
                className="d-flex gap-4 mb-0 flex-column list-unstyled flex-xl-row justify-content-center align-items-center mobile_view z_index_3"
              >
                <li className="link hover_border position-relative">
                  <Link
                    onClick={opennav}
                    className="nav-link text-white fs_16 fw-normal ff_audiowide"
                    to="/About"
                  >
                    About
                  </Link>
                </li>
                <li className="link">
                  <Link
                    onClick={opennav}
                    to="/CryptoStraps"
                    className="text-white fs_16 fw-normal ff_audiowide"
                  >
                    CryptoStraps
                  </Link>
                </li>
                <li className="link">
                  <Link
                    onClick={opennav}
                    to="/Team"
                    className="text-white fs_16 fw-normal ff_audiowide"
                  >
                    Team
                  </Link>
                </li>
                <li className="link">
                  <Link
                    onClick={opennav}
                    to="Faq"
                    className="text-white fs_16 fw-normal ff_audiowide"
                  >
                    Faq
                  </Link>
                </li>
                <li className="link">
                  <Link
                    onClick={opennav}
                    to="Footer"
                    className="text-white fs_16 fw-normal ff_audiowide"
                  >
                    Light Paper
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-baseline nav_button gap-2 d-none d-sm-block">
                <Twitter/>
                <Instagram/>
                <Discord />
              </div>
              <div
                id="menubtn-icon"
                onClick={opennav}
                className="d-xl-none d-block z_index_3 pe-2"
              >
                <div className="line"></div>
                <div className="line1 my-2"></div>
                <div className="line2"></div>
              </div>
            </div>
          </Container>
        </div>

        <Container className="custom_container pt-lg-3">
          <Row className="justify-content-lg-between justify-content-center align-items-center pt-3">
            <Col
              xs={11}
              sm={12}
              lg={6}
              xl={5}
              className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center pb-4"
            >
              <img
                src={Headerlogo}
                alt="Headerlogo"
                className="w-100 max_w_344 max_h_239"
              />
              <h1 className="ff_audiowide fs_28 fw-normal lh_normal text-white mb-lg-5">
                Web3 Gaming Reimagined
              </h1>
              <div className="text-center">
                <button
                  href="#"
                  className="ff_audiowide fs_16 fw-normal text-black get_btn d-inline-block me-3 mt-lg-3 mt-1"
                >
                  Get Started
                </button>
                <button
                  href="#"
                  className="ff_audiowide fs_16 fw-normal text-white learn_btn d-inline-block me-3 ms-sm-1 ms-0 mt-3"
                >
                  Learn More
                </button>
              </div>
            </Col>
            <Col
              xs={11}
              sm={10}
              lg={5}
              xl={6}
              className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
            >
              <img
                src={Menimg}
                alt="MenWithGun"
                className="w-100 mt-lg-0 mt-5"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Header
