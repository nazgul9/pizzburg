import React from 'react';
import { Card } from 'react-bootstrap';

function Deserts(props) {
    return (
        <div className='divs m-2 p-2'>
            
            <Card.Title className='text-center'> <h1 className='pricePizza fonts'>ДЕСЕРТЫ</h1></Card.Title>
            <Card style={{ width: '100%' }}>

                <Card.Img variant="top" src="https://static.1000.menu/img/content/20687/recept-medovika_1496147737_1_max.jpg" />
                <Card.Title className='text-center'> <h1 className='titlePizza'>Медовик</h1></Card.Title>
                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>70 cом</h2>
                        <hr />
                    </Card.Text>
                </Card.Body>

                <Card.Img variant="top" src="https://www.yournutrition.ru/images/recipes/5279/photo650.jpg" /><Card.Title className='text-center'> <h1 className='titlePizza'>Чизкейк творожный</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>75 cом</h2>
                    </Card.Text>
                    <hr />
                </Card.Body>

                <Card.Img variant="top" src="https://toprecepty.ru/wp-content/uploads/2018/12/b443c62-880x440-723x380.jpeg" /><Card.Title className='text-center'> <h1 className='titlePizza'>Сникерс</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>85 cом</h2>
                    </Card.Text><hr />
                </Card.Body>

                <Card.Img variant="top" src="https://www.svoimirykami.club/upload/iblock/984/984ab5fe768334a9a7d9f3a662a6b707.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Красный бархат</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>90 cом</h2>
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Deserts;