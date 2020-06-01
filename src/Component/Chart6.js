import React,{useState, useEffect} from "react";
import { HorizontalBar } from 'react-chartjs-2';

const Chart6 = () => {
  const [data, setData] = useState({});


  const chart = () => {
      let regionslist = [];
      let capital = [];
      fetch("http://localhost:3006/regions")
        .then(res => res.json())
        .then(res => {
          for (const element of res) {
            regionslist.push(element.region);
            capital.push(element.capital);
          }
          setData({
            labels: regionslist,
          datasets: [
              {
                label : "taux du capital",
                backgroundColor :"rgba(119, 140, 163,0.7)",
                data: capital
              }
          ],

        });
        })
          .catch(err => {
         console.log(err);
       });
   };


   useEffect(() => {chart();}, []);


   return(
     <div className="App">
     <HorizontalBar data = {data}
     options={{
       responsive: true,
       title: {
         display: true,
         text: 'Le capital des coopératives par région',
         fontFamily: "Trebuchet MS",
         fontSize: 15,

     }
     }}
     />
     </div>
   );


  };



export default Chart6;
