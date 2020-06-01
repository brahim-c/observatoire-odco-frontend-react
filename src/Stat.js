import React,{Component} from 'react';
import Nav_bar from "./Component/Nav_bar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {ReactComponentProps} from "react-router-dom";
import { withRouter } from 'react-router';
import "./Component/style.css";
import Chart1 from './Component/Chart1.js';
import Chart2 from './Component/Chart2.js';
import Chart3 from './Component/Chart3.js';
import Chart4 from './Component/Chart4.js';
import Chart5 from './Component/Chart5.js';
import Chart6 from './Component/Chart6.js';
import Chart7 from './Component/Chart7.js';
import Test3 from './Component/Test3.js';
import Total_capital from './Component/Total_capital.js';
import Total_cooperatives from './Component/Total_cooperatives.js';
import Total_adherents from './Component/Total_adherents.js';
import Test from "./Component/Test.js";

class Stat extends Component {

  constructor (props) {
    super(props)
    this.state = {
      viewForm : false,
      input : ''
    };
    this.chartSelection = null;
  }

    handleChange = (event) => {
      this.setState({input: event.target.value});
      }

 handleInput = (e) =>{
    console.log(e.target.value);
    switch (e.target.value) {
        case "1":
            this.chartSelection =
            <div>
            <Container>
            <Row>
            <Col >
            <Total_capital/>
            </Col>
            <Col >
            <Total_adherents/>
            </Col>
            <Col >
            <Total_cooperatives/>
            </Col>
            </Row>
            <Row >
            <Col style={{padding: 50,border:'#d1d8e0'}}>
            <Chart1 style={{backgroundColor:"#d1d8e0"}}/>
            </Col>
            <Col style={{padding: 50}}>
            <Chart2/>
            </Col>
            </Row>
            <Row>
            <Col style={{padding: 50}}>
            <Chart3/>
            </Col>
            <Col style={{padding: 50}}>
            <Chart4/>
            </Col>
            </Row>
            <Row>
            <Col style={{padding: 50}}>
            <Chart5/>
            </Col>
            </Row>
            <Row>
            <Col style={{padding: 50}}>
            <Chart6/>
            </Col>
            </Row>
            <Row>
            <Col style={{padding: 50}}>
            <Chart7/>
            </Col>
            </Row>
            </Container>
            </div>
            break;
        case "2":
            this.chartSelection = <div>
            <Container>
            <Row>
            <Col style={{padding: 50}}>
            <Chart1/>
            </Col>
            <Col style={{padding: 50}}>
            <Chart2/>
            </Col>
            </Row>
            <Row>
            <Col style={{padding: 50}}>
            <Chart3/>
            </Col>
            <Col style={{padding: 50}}>
            <Chart4/>
            </Col>
            </Row>
            </Container>

            </div>
            break;
        case "3":
             this.chartSelection = <div>
             <Container>
             <Row>
             <Col style={{padding: 50}}>
             <Chart5/>
             </Col>
             </Row>
             <Row>
             <Col style={{padding: 50}}>
             <Chart6/>
             </Col>
             </Row>
             <Row>
             <Col style={{padding: 50}}>
             <Chart7/>
             </Col>
              </Row>
             </Container>
             </div>
             break;

    }
    this.setState({ viewForm: true });
 }


  render(){
    const { history } = this.props;
return(
<div>
<Nav_bar/>


<div style={{display: 'flex', justifyContent: 'right',margin: 20}}>
<div>
<p id="filtre"> Filtrer par: </p>
</div>
<ButtonGroup  toggle id="togglebutton" style={{marginBottom: 30}}>
    <ToggleButton type="radio" name="radio" variant="success" defaultChecked value={"1"} onClick={this.handleInput}>
      Général
    </ToggleButton>
    <ToggleButton type="radio" name="radio" variant="success"  value={"2"} onClick={this.handleInput}>
       Secteur
    </ToggleButton>
    <ToggleButton  class="button button2" type="radio" name="radio" variant="success" value={"3"} onClick={this.handleInput}>
       Région
    </ToggleButton>
      <Form inline>
        <FormControl style={{marginLeft:15}} type="text" placeholder="Rechercher par coopérative.." className="mr-sm-2" value={this.state.input}  onInput = {this.handleChange}/>
        <Button class=".button-primary" as="input"  value="Explorer" variant="success" onClick={() => {
        history.push(`/coop/${this.state.input}`);}}
          />{' '}
      </Form>

  </ButtonGroup>

</div>

    <div className='form-container'>
      {(this.state.viewForm) ?
      this.chartSelection : ' '}
    </div>



</div>


);
}
}

export default Stat;
