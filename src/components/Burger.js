import React from 'react';
import { Card, Table } from 'react-bootstrap';

function Burger(props) {
    return (
        <div className='divs m-2 p-2'>
            
        <Card.Title className='text-center'> <h1 className=' pricePizza fonts'>БУРГЕРЫ</h1></Card.Title>
        <Card.Img src='https://andychef.ru/wp-content/uploads/2014/02/main17.jpg'/>
    <Table striped bordered hover>
<thead>
<tr>
  <th>№</th>
  <th>Бургеры</th>
  <th>Цена</th>
</tr>
</thead>
<tbody>
<tr>
  <td>1</td>
  <td>Бургер классический</td>
  <td>150 cом</td>
</tr>
<tr>
  <td>2</td>
  <td>Чизбургер</td>
  <td>160 cом</td>
</tr>
<tr>
  <td>3</td>
  <td>Ход-дог</td>
  <td>70 cом</td>
</tr>
<tr>
  <td>4</td>
  <td>Ход-дог двойной</td>
  <td>85 cом</td>
</tr>
<tr>
  <td>5</td>
  <td>С колбасой и сыром</td>
  <td>70 сом</td>
</tr>

<tr>
  <td>6</td>
  <td>С курицей</td>
  <td>70 cом</td>
</tr>
</tbody>
</Table>
    </div>

    );
}

export default Burger;