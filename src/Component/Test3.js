import React,{useState,useEffect} from "react";

const Test3 = () => {

const [total_capital,setcapital]=useState(5);

  const chart = () => {
    let resultat;
        fetch("http://localhost:3006/totalcapital")
        .then(res => res.json())
        .then( res => {
        console.log(res[0].total);
        resultat = res[0].total;
      console.log(resultat);
       setcapital(resultat);
    })
}

useEffect(() => {chart();});

return(
  <div>
  <div>
  Le capital total :
  <div>{total_capital}</div>
  </div>
  </div>
);


};



export default Test3;
