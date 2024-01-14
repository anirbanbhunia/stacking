import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
export default function Graph({ data, dateArr }) {
  const barData = {
    labels: dateArr,
    datasets: [
      {
        label: "Close",
        // data: [1, 2, 4, 9],
        borderColor: "#171517",
        backgroundColor: "#4c5749",
        data: dateArr.map(
          (x) => Math.round(Object.values(data[x])[3] * 100) / 100
        ),
      },
    ],
    fill: true,
    tension: 0.3,
  };

  //   const config = {
  //     type: "bar",
  //     data: data,
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         legend: {
  //           position: "top",
  //         },
  //         title: {
  //           display: true,
  //           text: "Chart.js Bar Chart",
  //         },
  //       },
  //     },
  //   };
  //   const config = {
  //     options: {
  //       responsive: true,
  //       layout: {
  //         padding: {
  //           top: 80,
  //         },
  //       },
  //       plugins: {
  //         title: {
  //           //   text: "Chart.js Combo Time Scale",
  //           display: true,
  //         },
  //       },
  //       scales: {
  //         x: {
  //           type: "time",
  //           display: true,
  //           offset: true,
  //           ticks: {
  //             source: "data",
  //           },
  //           time: {
  //             unit: "day",
  //           },
  //         },
  //       },
  //     },
  //   };

  //   ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="bg-slate-100 rounded-md">
      <Line data={barData} />
    </div>
  );
}
