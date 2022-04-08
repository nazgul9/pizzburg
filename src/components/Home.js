import React from 'react';
import { AiOutlineInstagram, AiOutlinePhone } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr'
import { Image, } from 'react-bootstrap'
import MenuOne from './MenuOne';
import Footer from './Footer';

function Home(props) {
    return (
        <div className=' m-2 p-2'>
            <>
                <div className='borderPhoto footer'></div>

                <div className='m-3 text-center'>
                    <span className='h1 span1'>
                        PIZZ
                    </span>
                    <span className='h1 span2'>
                        BURG
                    </span>
                </div>
                <div className='images' >
                    <Image className='images' src={'https://balance.kg/static/Img/c6/88/c688d84c269e5c8c4ef86e10b123fb70.png'} />
                </div>

                {/* <div class=" bg-circle-outline d-inline-block ">
                <a href="https://instagram.com/" class="text-white">
                    <i class="fa fa-2x fa-fw fa-instagram color-blue"></i></a>
            </div> */}
                <div className='justify-content: center; '>
                    {/* <a href="https://www.instagram.com/osh_pizzburg/">
                    <AiOutlineInstagram style={{ fontSize: '50px' }} />@osh_pizzburg</a><br/>
                    <AiOutlinePhone style={{ fontSize: '50px' }} />
                    <GrMapLocation style={{ fontSize: '50px' }} /> */}
                </div>
                <div className='borderPhoto footer'></div>
            </>
            <MenuOne />
            <Footer />
        </div>

    );
}

export default Home;