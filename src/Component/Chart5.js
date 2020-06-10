import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";

const Chart5 = () => {
  const [data, setData] = useState({});

  const chart = () => {
    let regionslist = [];
    let pourcentage = [];
    fetch("https://frozen-savannah-57040.herokuapp.com/regions")
      .then((res) => res.json())
      .then((res) => {
        for (const element of res) {
          regionslist.push(element.region);
          pourcentage.push(element.pourcentage_adherents);
        }
        setData({
          labels: regionslist,
          datasets: [
            {
              label: "pourcentage d'adhérents",
              backgroundColor: "rgba(254, 211, 48,0.7)",
              data: pourcentage,
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
      <HorizontalBar
        data={data}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Les adhérents des coopératives par région",
            fontFamily: "Trebuchet MS",
            fontSize: 15,
          },
        }}
      />
    </div>
  );
};

export default Chart5;
