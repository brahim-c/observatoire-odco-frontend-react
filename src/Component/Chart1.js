import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Chart1 = () => {
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
          pourcentageslist.push(element.pourcentage);
        }
        setData({
          labels: secteurslist,
          datasets: [
            {
              data: pourcentageslist,
              backgroundColor: [
                "rgba(252, 92, 101,1.0)",
                "rgba(254, 202, 87,1.0)",
                "rgba(72, 219, 251,1.0)",
                "rgba(238, 82, 83,1.0)",
                "rgba(179, 55, 113,1.0)",
                "rgba(26, 188, 156,1.0)",
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
            text: "Les coopératives et leur unions par secteur",
            fontFamily: "Trebuchet MS",
            fontSize: 15,
          },
        }}
      />
    </div>
  );
};

export default Chart1;
