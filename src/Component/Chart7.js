import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Chart7 = () => {
  const [data, setData] = useState({});

  const chart = () => {
    let regionslist = [];
    let nbr_adherents = [];
    fetch("https://frozen-savannah-57040.herokuapp.com/regions")
      .then((res) => res.json())
      .then((res) => {
        for (const element of res) {
          regionslist.push(element.region);
          nbr_adherents.push(element.nombre_adherents);
        }
        setData({
          labels: regionslist,
          datasets: [
            {
              label: "<20",
              backgroundColor: "rgba(253, 167, 223,0.7)",
              data: nbr_adherents.map((item) => item.moins_20),
            },
            {
              label: "20-49",
              backgroundColor: "rgba(249, 127, 81,0.7)",
              data: nbr_adherents.map((item) => item.entre20_49),
            },
            {
              label: "50-249",
              backgroundColor: "rgba(196, 229, 56,1.0)",
              data: nbr_adherents.map((item) => item.entre50_249),
            },
            {
              label: "plus_250",
              backgroundColor: "rgba(237, 76, 103,1.0)",
              data: nbr_adherents.map((item) => item.plus_250),
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <Bar
        data={data}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Les coopératives par région et par effectif des adhérents",
            fontFamily: "Trebuchet MS",
            fontSize: 15,
          },
        }}
      />
    </div>
  );
};

export default Chart7;
