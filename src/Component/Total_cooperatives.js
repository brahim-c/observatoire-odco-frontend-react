import React,{useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import "./style.css";

const Total_cooperatives = () => {
const [total_cooperatives,setnombre]=useState();

  const nombre_cooperatives = () => {
    let resultat;
    fetch("http://localhost:3006/totalcooperatives")
      .then(res => res.json())
      .then( res => {
      console.log(res[0].total);
      resultat = res[0].total;
      setnombre(resultat);
  })
  .catch(err => {
   console.log(err);
   });

 };

   useEffect(() => {nombre_cooperatives();});

   return (

   <div>
   <Card border="success" style={{ width: '18rem' }}>
   <Card.Body>
    <Card.Title>Le nombre total de coopératives : </Card.Title>
    <Card.Text style={{fontSize: 30}}>
    {total_cooperatives}
    </Card.Text>
  </Card.Body>
   </Card>
   </div>




   );
}



export default Total_cooperatives;
