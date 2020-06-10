import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Chart3 = () => {
  const [data, setData] = useState({});

  const chart = () => {
    let secteurslist = [];
    let capital = [];
    fetch("https://frozen-savannah-57040.herokuapp.com/secteurs")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        for (const element of res) {
          secteurslist.push(element.secteur);
          capital.push(element.capital);
        }
        setData({
          labels: secteurslist,
          datasets: [
            {
              data: capital,
              backgroundColor: [
                "rgba(186, 220, 88,1.0)",
                "rgba(248, 239, 186,1.0)",
                "rgba(252, 66, 123,1.0)",
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
            text: "Le capital des coopératives par secteur",
            fontFamily: "Trebuchet MS",
            fontSize: 15,
          },
        }}
      />
    </div>
  );
};

export default Chart3;
