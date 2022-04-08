import React from 'react';
import { Card } from 'react-bootstrap';

function SlisePizz(props) {
    return (
        <div className='divs m-2 p-2'>
            
            <Card.Title className='text-center'> <h1 className='pricePizza fonts'>СЛАЙСЫ</h1></Card.Title>
            <Card style={{ width: '100%' }}>

                <Card.Img variant="top" src="https://fastly.4sqi.net/img/general/600x600/IEWFUAXVDFX4SKAY0EC5PPN522I5VIT5E2BTUXSKOPFGRXX2.jpg" />
                <Card.Body>
                    <Card.Title className='text-center' > <h1 className='pricePizza'>Пицца фридей</h1></Card.Title>
                    <h3>Копченое куриное филе</h3>
                    <h3>Майонез </h3>
                    <h3>Свежие шампиньоны</h3>
                    <h3>Помидоры</h3>
                    <h3>Петрушка</h3>
                    <h3>Твердый сыр </h3>
                    <Card.Text className='text-center'><h2 className='pricePizza'>55 cом</h2>
                    </Card.Text>
                <hr />

                </Card.Body>

               
                <Card.Img variant="top" src="https://st4.depositphotos.com/11169808/22782/i/450/depositphotos_227828578-stock-photo-cut-slices-delicious-fresh-pizza.jpg" />
                <Card.Body>
                <Card.Title className='text-center'> <h1 className='pricePizza'>Пицца с колбасой</h1></Card.Title>
                    <h3>Сырокопченая колбаса</h3>
                    <h3>Твердый сыр</h3>
                    <h3>Томатный соус </h3>
                    <h3>Помидоры</h3>
                    <h3>Майонез</h3>
                    <Card.Text className='text-center'><h2 className='pricePizza'>55 cом</h2>
                    </Card.Text>
                <hr />

                </Card.Body>
                
                <Card.Img variant="top" src="https://xatiko.ru/assets/images/products/231/dscf9080.jpg" />
                <Card.Body>
                <Card.Title className='text-center'> <h1 className='pricePizza'>Пицца баварская</h1></Card.Title>
                    <h3>Куриная грудка</h3>
                    <h3>Колбаски копченые баварские </h3>
                    <h3>Огурец соленый </h3>
                    <h3>Корейская морковь</h3>
                    <h3>Майонез, кетчуп</h3>
                    <h3>Твердый сыр </h3>
                    <Card.Text className='text-center'><h2 className='pricePizza'>50 cом</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SlisePizz;