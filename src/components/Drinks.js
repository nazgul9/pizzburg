import React from 'react';
import { Card, Table } from 'react-bootstrap';

function Drinks(props) {
    return (
        <div className='divs m-2 p-2'>
            
        <Card.Title className='text-center'> <h1 className='pricePizza fonts'> НАПИТКИ</h1></Card.Title>
        <Card.Img src='https://hochu.ua/uploads/89/91/87/89918732-2b7b-411f-a83e-3267b3b6388d_620x400_fit.jpg'/>
    <Table striped bordered hover>
<thead>
<tr>
  <th>№</th>
  <th> Напитки</th>
  <th>Цена</th>
</tr>
</thead>
<tbody>
<tr>
  <td>1</td>
  <td>облепиховый</td>
  <td>150 cом</td>
</tr>
<tr>
  <td>2</td>
  <td>смородиновый</td>
  <td>150 cом</td>
</tr>
<tr>
  <td>3</td>
  <td>чай черный</td>
  <td>10/20 cом</td>
</tr>
<tr>
  <td>4</td>
  <td>чай зеленый</td>
  <td>10/20 cом</td>
</tr>
<tr>
  <td>5</td>
  <td>чай с лимоном</td>
  <td>15/40 сом</td>
</tr>
</tbody>
</Table>
    </div>

    );
}

export default Drinks;