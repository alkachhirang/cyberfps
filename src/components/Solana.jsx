import React from 'react'
import Container from 'react-bootstrap/Container';
import Solanaimg from '../assets/images/png/solana-img.png'
import Unread from '../assets/images/png/unreal-img.png'

function Solana() {
    return (
        <div>
            <div className='solana-bg_img py-solana'>
                <Container>
                    <div className=' text-center d-flex flex-column flex-md-row justify-content-center'>
                        <div>
                            <img src={Solanaimg} alt='solanaimg' className='w-100 mw_385 mh_255 me-md-4 me-0' />
                        </div>
                        <div>
                            <img src={Unread} alt='Unread' className='w-100 mw_263 mh_255 mt-md-0 mt-4' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Solana
