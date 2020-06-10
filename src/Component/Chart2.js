import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Chart2 = () => {
  const [data, setData] = useState({});

  const chart = () => {
    let secteurslist = [];
    let pourcentageslist = [];
    fetch("https://frozen-savannah-57040.herokuapp.com/secteurs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        for (const element of res) {
          secteurslist.push(element.secteur);
          pourcentageslist.push(element.pourcentage_adherents);
        }
        setData({
          labels: secteurslist,
          datasets: [
            {
              data: pourcentageslist,
              backgroundColor: [
                "rgba(255, 204, 204,1.0)",
                "rgba(0, 210, 211,1.0)",
                "rgba(255, 159, 67,1.0)",
                "rgba(243, 104, 224,1.0)",
                "rgba(186, 220, 88,1.0)",
                "rgba(199, 236, 238,1.0)",
              ],
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
      <Doughnut
        data={data}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Les adhérents des coopératives par secteur",
            fontFamily: "Trebuchet MS",
            fontSize: 15,
          },
        }}
      />
    </div>
  );
};

export default Chart2;
