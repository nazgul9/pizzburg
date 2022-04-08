import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className=' footers p-2'>
            <div className='justify-content: center;'>
                <span >

                    <a href="https://www.instagram.com/osh_pizzburg/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-instagram "></i></a>
                    <a href="https://www.phone.com/+996 (704)-000-180/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-phone "></i></a>
                    <a href="https://www.facebook.com/osh_pizzburg/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-facebook "></i></a>
                </span>
                <span >
                    <p>+996 (704)-000-180</p>
                    <p>+996 (770)-000-180</p>
                </span>
            </div>
           
            <div className='text-center'>@osh_pizzburg</div>
           



        </div>
    );
}

export default Footer;