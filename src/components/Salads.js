import React from 'react';
import { Card } from 'react-bootstrap';

function Salads(props) {
    return (
        <div className='divs m-2 p-2'>
            <Card.Title className='text-center'> <h1 className='pricePizza fonts'>САЛАТЫ</h1></Card.Title>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://img.delo-vcusa.ru/2014/02/grecheskij-salat.jpg" />
                <Card.Body>
                <Card.Title className='text-center'> <h1 className='titlePizza'>Греческий</h1></Card.Title>
                    <Card.Text className='text-center'><h2 className='pricePizza'>150 cом</h2>
                <hr />
                    </Card.Text>
                </Card.Body>
                
                <Card.Img variant="top" src="https://www.patee.ru/r/x6/01/6b/1c/960m.jpg" />
                <Card.Body>
                <Card.Title className='text-center'> <h1 className='titlePizza'>Цезарь с курицей</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>155 cом</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Salads;