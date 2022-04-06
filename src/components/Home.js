import React from 'react';
import { AiOutlineInstagram, AiOutlinePhone } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr'
import { Image, Container, } from 'react-bootstrap'

function Home(props) {
    return (
        <>
            <Container >
                <div className='borderPhoto '></div>

                <div>
                    <h1>
                        pizzburg
                    </h1>
                </div>
                <div className='images' >
                    <Image className='images' src={'https://balance.kg/static/Img/c6/88/c688d84c269e5c8c4ef86e10b123fb70.png'} />
                </div>
                <div className='justify-content: center;'>
                    <AiOutlineInstagram style={{ fontSize: '50px' }} />{' '}
                    <AiOutlinePhone style={{ fontSize: '50px' }} />{' '}
                    <GrMapLocation style={{ fontSize: '50px' }} />
                </div>
                <div className='borderPhoto'></div>

            </Container>
        </>

    );
}

export default Home;