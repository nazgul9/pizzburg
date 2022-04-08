import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MenuOne(props) {
    return (
        <div className=' m-2 p-2'>
            {/* <Drinks/> */}
            <h1 className='inline-block m-2 text-center pricePizza'>МЕНЮ:</h1>
            <Card className=' m-2 texth1'as={Link} to='/Pizza' style={{borderRadius:"50px"}}>
                <h1 >Пицца</h1>
            </Card>
            <Card className=' m-2 texth1' as={Link} to="/SlisePizz"style={{borderRadius:"50px"}}><h1 >Слайсы</h1></Card>
            <Card className=' m-2 texth1' as={Link} to="/Burger"style={{borderRadius:"50px"}}><h1 >Бургеры</h1></Card>
             <Card className=' m-2 texth1' as={Link} to="/Salads"style={{borderRadius:"50px"}}><h1 >Салат</h1></Card> 
              <Card className=' m-2 texth1' as={Link} to='/Drinks'style={{borderRadius:"50px"}}>
                <h1>Горячие напитки</h1>
            </Card>
             <Card className=' m-2 texth1' as={Link} to="/ColdDrinks"style={{borderRadius:"50px"}}><h1 >Холодные напитки</h1></Card>
           
             <Card className=' m-2 texth1' as={Link} to="/Deserts"style={{borderRadius:"50px"}}><h1 >Десерты</h1></Card>
           
        </div>
    );
}

export default MenuOne;