import React,{Component,useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {ReactComponentProps} from "react-router-dom";
import {Link} from "react-router-dom";


const Test :React.FC<Props> = ({history}) => {
  const [input, setInput] = useState('');
  return (
    <div>
        <Link to='/'>GO TO </Link>
        <button onClick={() => {history.push('/')}}></button>
    </div>
  );
}

  export default Test;
