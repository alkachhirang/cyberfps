import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cryptostrap from '../assets/images/png/cryptostrap.png';


function Cryptostraps() {
    return (
        <div className='bg-black py_cryptostrap'>
            <Container className='custom_container'>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6} className='col-sm-11 col-10'>
                        <img src={Cryptostrap} alt='CSimg' className='w-100 mw_394' data-aos="fade-right" />
                    </Col>
                    <Col lg={6} className='col-sm-12 col-11 pt-5 pt-lg-0'>
                        <h2 className='ff_audiowide fw-normal text-white fs_64 position-relative' data-aos="fade-left" >CryptoStraps </h2>
                        <div className='blue_line pb-1' data-aos="fade-left" ></div>
                        <p className='ff_Montserrat fs_16 fw-normal text-white lh_150 mw_568 opacity-75 pt-2' data-aos="fade-left" >CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Cryptostraps
