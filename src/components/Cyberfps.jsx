import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cyberimg from '../assets/images/png/cyber-img.png';


function Cyberfps() {
    return (
        <div className='cyber_bg_img py_cyber'>
            <Container className='custom_container'>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6} className='col-sm-12 col-11'>
                        <h2 className='ff_audiowide text-black fw-normal fs_64 position-relative text-lg-start text-center'>What is <span className='text_sky'>CyberFPS</span></h2>
                        <div className='blue_line pt-2 pb-3 text-lg-start text-center'></div>
                        <p className='ff_Montserrat fw-normal fs_16 text_grey mw_562 pb-lg-3 pb-2'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
                        <p className='ff_Montserrat fw-normal fs_16 text_grey mw_562'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
                    </Col>
                    <Col lg={6} className='col-sm-12 col-11 pt-3 pt-lg-0'>
                        <img src={cyberimg} alt="cyberimg" className='w-100 mw_528' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cyberfps
