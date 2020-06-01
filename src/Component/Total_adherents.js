import React,{useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import "./style.css";

const Total_adherents = () => {
const [total_adherents,setnombre]= useState();

  const nombre_adherents = () => {
    let resultat;
    fetch("http://localhost:3006/totaladherents")
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

   useEffect(() => {nombre_adherents();});

   return (

   <div>
   <Card border="success" style={{ width: '18rem' }}>
   <Card.Body>
    <Card.Title>Le nombre total d'adhérents : </Card.Title>
    <Card.Text style={{fontSize: 30}}>
    {total_adherents}
    </Card.Text>
  </Card.Body>
   </Card>
   </div>




   );
}



export default Total_adherents;
