import React from 'react';
import { Card } from 'react-bootstrap';

function Pizza(props) {
    return (
        <div className='divs m-2 p-2'>
            <Card.Title className='text-center'> <h1 className='pricePizza fonts'>ПИЦЦЫ</h1></Card.Title>
            <Card style={{ width: '100%' }}>

                <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/0d/86/6c/4d/caption.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца семейная</h1></Card.Title>
                    <Card.Text className='text-center'><h2 className='pricePizza'>350/420 cом</h2>
                    </Card.Text> 
                    {/* <hr/> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
               
                <Card.Img variant="top" src="https://takiepirogi.by/assets/images/products/52/4sezona.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца 4  сезона</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>370/450 cом</h2>
                    </Card.Text>    
                     {/* <hr /> */}
                     <div className='borderPhoto footer'></div>
                </Card.Body>
           

                <Card.Img variant="top" src="https://vilkin.pro/wp-content/uploads/2019/11/picca-chetire-sira-770x513.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца 4  сыра</h1></Card.Title>
                    <Card.Text className='text-center'><h2 className='pricePizza'>390/480 cом</h2>
                    </Card.Text>  
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
              
                <Card.Img variant="top" src="https://static.1000.menu/img/content-v2/ef/27/10853/picca-margarita-v-domashnix-usloviyax_1608783820_4_max.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца  маргарита</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>370/450 cом</h2>
                {/* <hr /> */}
                <div className='borderPhoto footer'></div>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src="https://vkusnie-vkusnosti.ru/wp-content/uploads/2019/01/pica-assorti.jpg" />
                <Card.Body><Card.Title className='text-center'> <h1 className='titlePizza'>Пицца ассорти</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>390/490 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
               
                <Card.Img variant="top" src="https://cdn.the-village.ru/the-village.ru/post_image-image/FyAiMKGzotxBrmjnVKz8og.png" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца фридей</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>440 cом</h2>
                    </Card.Text>
                    {/* <hr />  */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                 <Card.Img variant="top" src="https://static.1000.menu/img/content-v2/24/88/49769/meksikanskaya-picca-ostraya_1616760935_13_max.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца острая</h1></Card.Title>

                    <Card.Text className='text-center'><h2 className='pricePizza'>315/420 cом</h2>
                    </Card.Text>
                    {/* <hr />  */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://static.1000.menu/img/content-v2/85/ff/6190/pitstsa-pepperoni-_1612599986_22_max.jpg" />
                <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца пепперони</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>330/410 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://paprikapp.ru/wp-content/uploads/2020/07/%D0%91%D0%B0%D0%B2%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F.jpg" />
                <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца баварская</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>400 cом</h2>
                    </Card.Text>
                {/* <hr /> */}
                <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://s1.tchkcdn.com/i/13/1/321064_a04102cc_1a482b7143b5280f21a10acd97535223_pizza_okhotnichiya_dsc_1031.jpg" /><Card.Title className='text-center'> <h1 className='titlePizza'>Пицца охотничья</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>440 cом</h2>
                    </Card.Text>
                {/* <hr /> */}
                <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://www.gastronom.ru/binfiles/images/20150218/bad725b7.jpg" /><Card.Title className='text-center'> <h1 className='titlePizza'>Пицца с колбасой</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>440 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="http://pizzarini.info/wp-content/uploads/2020/02/3067.jpg" /> <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца мясная</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>400/500 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://pizzarini.info/wp-content/uploads/2018/03/pitstsa-tsezar-1024x682.jpg" />
                <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца цезарь</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>440 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/278223/rRJhEupTNnRjYOX8lMnA.jpg" />                <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца чизбургер
                </h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>350/440 cом</h2>
                    </Card.Text>
                    {/* <hr /> */}
                    <div className='borderPhoto footer'></div>
                </Card.Body>
                <Card.Img variant="top" src="https://www.jacks.ru/f/product/Picca-paj_40-sm_92.jpg" />
                <Card.Title className='text-center'> <h1 className='titlePizza'>Пицца пай</h1></Card.Title>

                <Card.Body>
                    <Card.Text className='text-center'><h2 className='pricePizza'>540 cом</h2>
                    </Card.Text>
                </Card.Body>

            </Card>

        </div>

    );
}

export default Pizza;