import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from './Pizza';

function MenuOne(props) {
    return (
        <div>
            <h1 >Menu:</h1>
            <div as={Link} to={"/Pizza"}>Pizza</div>
        </div>
    );
}

export default MenuOne;