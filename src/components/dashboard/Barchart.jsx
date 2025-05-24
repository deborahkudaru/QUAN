import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "July", "Aug", "Sep"],
  datasets: [
    {
      label: "Visitors",
      data: [120, 190, 300, 250, 400, 350, 500, 600, 700],
      backgroundColor: "#6366F1", 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const BarChart = () => {
  return (
    <div className="bg-white p-4 mx-4 rounded-xl shadow-md w-full max-w-2xl font-playFair"> 
      <h2 className="text-lg font-semibold mb-4">Monthly Visitors</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
