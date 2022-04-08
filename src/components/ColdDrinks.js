import React from 'react';
import { Card, Table } from 'react-bootstrap';

function ColdDrinks(props) {
    return (
        <div className='divs m-2 p-2'>
            
            <Card.Title className='text-center'> <h1 className='pricePizza fonts'> ХОЛОДНЫЕ НАПИТКИ</h1></Card.Title>
            <Card.Img src='https://imgtest.mir24.tv/uploaded/images/2020/January/7805d217824b14c4707ea6e98fe823d6565d207d19c2c5a76c0504ce2f0992b1.jpg'/>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>№</th>
      <th> Name</th>
      <th> litre</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>coca-cola</td>
      <td>0,5/1</td>
      <td>50/85 cом</td>
    </tr>
    <tr>
      <td>2</td>
      <td>fuse tea</td>
      <td>0,5/1</td>
      <td>50/85 cом</td>
    </tr>
    <tr>
      <td>3</td>
      <td>pico</td>
      <td>0,5/1</td>
      <td>65/110 cом</td>
    </tr>
    <tr>
      <td>4</td>
      <td>bon aque</td>
      <td>0,5/1</td>
      <td>30/40 cом</td>
    </tr>
    <tr>
      <td>5</td>
      <td>сок любимый</td>
      <td>0,2/1</td>
      <td>35/85 cом</td>
    </tr>
   
    <tr>
      <td>6</td>
      <td>компот</td>
      <td>1ст/1</td>
      <td>20/60 cом</td>
    </tr>





  </tbody>
</Table>
        </div>
    );
}

export default ColdDrinks;