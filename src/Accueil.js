import React,{Component} from 'react';
import Nav_bar from "./Component/Nav_bar.js"
import {Button} from "react-bootstrap"
import {Container} from "react-bootstrap"
import {Col} from "react-bootstrap"
import {Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Component/style.css"
import {ReactComponentProps} from "react-router-dom";


const Accueil :React.FC<Props> = ({ history }) => {


return(

 <div>
 <Nav_bar/>
 <div class="centering">
 <h1 class="text-center">Bienvenu à l'observatoire <br/> de <br/> l'Office du développement de la Coopération</h1>
 <p class="text-center" id="paragraphe"> Ce site est une référence statistique des coopératives marocaines. <br/>
  Des données dynamiques relatives à l'activité actuelle des <br/> coopératives au Maroc sont regroupées ici. </p>
 </div>

 <Container>
   <Row>
     <Col></Col>
     <Col>
     <div style={{display: 'flex', justifyContent: 'center'}}>
     <div style={{margin :'20px' }}>
     <Button class=".button-primary" as="input"  value="Explorer" variant="success" onClick={() => {
     history.push("/Stat");}}
      />{' '}
     </div>
     </div>
     </Col>

     <Col></Col>
   </Row>
 </Container>


 </div>

);
}

export default Accueil;
