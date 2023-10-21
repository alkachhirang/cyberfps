import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Collin from "../assets/images/png/collin-img.png";
import Pharaox from "../assets/images/png/pharaox-img.png";
import Zach from "../assets/images/png/zach-img.png";
import Arlen from "../assets/images/png/arlen-img.png";

function Team() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centreMode: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <div className="py_team">
                <h2 className="text-center ff_audiowide fs_64 fw-normal lh_normal text-black mb-5 pb-2">
                    <span className="team_line position-relative">Team</span>
                </h2>
                <Container className="custom_container">
                    <Slider {...settings}>
                        <div className="px-2 outline">
                            <img src={Collin} alt="GirlWithBlackJacket" className="w-100" />
                            <h4 className="ff_Montserrat fs_24 fw-semibold lh_normal text-black mt-3 mb-1">
                                Collin
                            </h4>
                            <p className="ff_Montserrat fs_16 fw-normal lh_150 text-black mb-3">
                                Founder
                            </p>
                        </div>
                        <div className="px-2 outline">
                            <img src={Pharaox} alt="GirlWithBlackJacket" className="w-100" />
                            <h4 className="ff_Montserrat fs_24 fw-semibold lh_normal text-black mt-3 mb-1">
                                Pharaox
                            </h4>
                            <p className="ff_Montserrat fs_16 fw-normal lh_150 text-black mb-3">
                                Founder
                            </p>
                        </div>
                        <div className="px-2 outline">
                            <img src={Zach} alt="GirlWithBlackJacket" className="w-100" />
                            <h4 className="ff_Montserrat fs_24 fw-semibold lh_normal text-black mt-3 mb-1">
                                Zach
                            </h4>
                            <p className="ff_Montserrat fs_16 fw-normal lh_150 text-black mb-3">
                                CM
                            </p>
                        </div>
                        <div className="px-2 outline">
                            <img src={Arlen} alt="GirlWithBlackJacket" className="w-100" />
                            <h4 className="ff_Montserrat fs_24 fw-semibold lh_normal text-black mt-3 mb-1">
                                Arlen
                            </h4>
                            <p className="ff_Montserrat fs_16 fw-normal lh_150 text-black mb-3">
                                CM
                            </p>
                        </div>
                    </Slider>
                </Container>
            </div>
        </div>
    )
}

export default Team
