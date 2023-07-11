"use client"

import Chart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import Bdata from "../Data/Bdata";

const Barchart = () => {
  const [cities, setCities] = useState([]);
  const [reach, setReach] = useState([]);

  useEffect(() => {
    const getCitiesData = async () => {
      setCities(Bdata.map((item) => item.city));
      setReach(Bdata.map((item) => parseFloat(item.reach)));
    };

    getCitiesData();
  }, []);

  return (
    <>
      <Chart
      style={{ marginTop: "60px" }}
        type="bar"
        width={650}
        height={350}
        series={[
          {
            name: "CITIES",
            data: reach,
          },
        ]}
        options={{
          theme: { mode: 'dark'},
          chart: {
            background: 'rgba(0, 0, 0, 0)',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: cities,
            title: { text: "CITIES" },
            hover: {
              filter: {
                  type: 'none',
              }
          },
          },
          colors: ["#F53463"],
          grid: {
            show: false,
          },
        }}
      ></Chart>
    </>
  );
};

export default Barchart;