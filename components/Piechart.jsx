"use client"

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import data from "../Data/pdata";

const Piechart = () => {
  const [people, setPeople] = useState([]);
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    const getPeopleData = async () => {
      setPeople(data.map((item) => parseFloat(item.people_count)));
      setPdata(data.map((item) => item.gender));
    };

    getPeopleData();
  }, []);

  const getColors = () => {
    return pdata.map((gender) => {
      if (gender === "Male") {
        return "#FFAD4C";
      } else if (gender === "Female") {
        return "#F53463";
      }
    });
  };

  return (
    <>
      <Chart
      style={{ marginTop: "40px" }}
        type="pie"
        width={550}
        height={350}
        series={people}
        options={{
        theme: { mode: 'dark'},
        chart: {
            background: 'rgba(0, 0, 0, 0)',
            animations: {
              enabled: true
            }
          },
        fill: {
            opacity: 1
          },
          labels: pdata,
          colors: getColors(),
          style: {
            colors: ["#fff"]
          }
        }}
      ></Chart>
    </>
  );
};

export default Piechart;