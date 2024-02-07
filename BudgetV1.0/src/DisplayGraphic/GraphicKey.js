import React from 'react'
import Row from './Row'
function GraphicKey() { // no idea how to make it efficient
    //const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF', '#33FFFF', '#FF5733'];
  //  const sizes = [Groceries, Gas, Resteraunts, Clothes, Suppliments, LivingExpenses, Other];
  //there has got to be a way to use a for loop here
  return (
 
    <table>
        <thead>
            <tr>
                <Row data="Data" Category="Category"> </Row>
            </tr>
        </thead>
        <tbody>
            <tr>
            <Row data='#2233ff' Category="Groceries"> </Row>
            </tr>
            <tr>
            <Row data='#33FF57' Category="Gas"> </Row>
            </tr>
            <tr>
            <Row data='#5733FF' Category="Resteraunts"> </Row>
            </tr>
            <tr>
            <Row data='#FFFF33' Category="Clothes"> </Row>
            </tr>
            <tr>
            <Row data='#FF33FF' Category="Suppliments"> </Row>
            </tr>
            <tr>
            <Row data='#33FFFF' Category="LivingExpenses"> </Row>
            </tr>
            <tr>
            <Row data='#FF5733'Category="Other"> </Row>
            </tr>
        </tbody>
    </table>
  )
}


export default GraphicKey