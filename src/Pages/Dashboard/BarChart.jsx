import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartHeight, setChartHeight] = useState("200px");
  // responsive bar thickness so bars don't touch on small screens
  const [barThickness, setBarThickness] = useState(() => {
    // Start at 90 on very large screens and step down as viewport shrinks
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w < 480) return 14;
    if (w < 768) return 20;
    if (w < 900) return 30;
    if (w < 1024) return 40;
    if (w < 1280) return 50;
    if (w < 1600) return 60;
    if (w < 1920) return 80;
    return 90;
  });

  // Effect to update chart height based on screen size
  useEffect(() => {
    const updateChartHeight = () => {
      if (window.innerWidth < 768) setChartHeight("150px");
      else if (window.innerWidth < 1024) setChartHeight("200px");
      else setChartHeight("250px");
      // update bar thickness responsively
      const w = window.innerWidth;
      if (w < 480) setBarThickness(14);
      else if (w < 768) setBarThickness(20);
      else if (w < 900) setBarThickness(30);
      else if (w < 1024) setBarThickness(40);
      else if (w < 1280) setBarThickness(50);
      else if (w < 1600) setBarThickness(60);
      else if (w < 1920) setBarThickness(80);
      else setBarThickness(90);
    };

    updateChartHeight();
    window.addEventListener("resize", updateChartHeight);
    return () => window.removeEventListener("resize", updateChartHeight);
  }, []);

  // Months labels (12 months)
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Selected year state (default: current year)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);
  const options2 = [
    new Date().getFullYear(),
    new Date().getFullYear() - 1,
    new Date().getFullYear() - 2,
  ];
  const [selected, setSelected] = useState(String(selectedYear));

  // Sample monthly data for each year (replace with real data as needed)
  const monthlyDataByYear = {
    [new Date().getFullYear()]: [
      100, 90, 120, 110, 95, 105, 130, 125, 115, 140, 135, 145,
    ],
    [new Date().getFullYear() - 1]: [
      90, 80, 110, 100, 85, 95, 120, 115, 105, 130, 125, 135,
    ],
    [new Date().getFullYear() - 2]: [
      95, 85, 115, 105, 90, 100, 125, 120, 110, 135, 130, 140,
    ],
  };

  // Build chart data for the selected year
  const chartData = {
    labels: monthLabels,
    datasets: [
      {
        label: `${selectedYear} Sales`,
        data: monthlyDataByYear[selectedYear] || new Array(12).fill(0),
        backgroundColor: "#3fae6a",
        borderRadius: 0,
        barThickness: barThickness,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // Show raw value only
          label: (context) => `${context.raw}`,
        },
        backgroundColor: "#3fae6a",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#181818",
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#eaeaea",
        },
        ticks: {
          color: "#181818",
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
        <div className="flex justify-between items-center text-white w-full mb-6">
          <h2 className="text-secondary mt-4 text-[24px] font-bold">
            Yearly Revenue
          </h2>
          <div className="relative inline-block w-[150px]">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full font-medium text-[14px] py-[8px] px-[16px] border border-primary text-secondary rounded-lg text-left flex justify-between items-center"
            >
              {selected}
              <span className="ml-2">▼</span>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
              <ul className="absolute z-10 w-full bg-white border border-primary rounded-lg mt-1 shadow-lg">
                {options2.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelected(String(option));
                      setSelectedYear(Number(option));
                      setIsOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-black hover:bg-primary/10"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: chartHeight }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
