import React,{useState, useEffect} from "react";
import {Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import "./style.css";

const Total_capital = () => {
const [total_capital,setcapital]=useState();

  const capital = () => {
    let resultat;
    fetch("http://localhost:3006/totalcapital")
      .then(res => res.json())
      .then( res => {
      console.log(res[0].total);
      resultat = res[0].total;
      setcapital(resultat);
  })
  .catch(err => {
   console.log(err);
   });

 };

   useEffect(() => {capital();});

   return (

   <div>
   <Card border="success" style={{ width: '18rem' }}>
   <Card.Body>
    <Card.Title>Le capital total : </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">En Dirham</Card.Subtitle>
    <Card.Text style={{fontSize: 30}}>
    {total_capital}
    </Card.Text>
  </Card.Body>
   </Card>
   </div>

   );
}



export default Total_capital;
