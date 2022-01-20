import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./index.css"
function DoughnutChart({happinessData}) {
    console.log(happinessData)
function DoughnutChart() {
    const data = {
        labels: [ ":😓:", "😐", "😀"],
        datasets: [
            {
                label: "Happiness",
                data: happinessData,
                borderColor: [ "rgba(255,206,86,0.2)" ],
                backgroundColor: [
                    "rgba(255,0,0,1)",
                    "rgba(251,201,98,1)",
                    "rgba(128,255,0,1)",
                ],
                pointBackgroundColor: "rgba(255,206,86,0.2)"
            }
        ]
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: "Happy Doughnut",
                color: "black",
                font: {
                    size: 30
                },
                padding: {
                    top: 30,
                    bottom: 30
                },
                responsive: true,
                animation: {
                    animateScale: true
                }
            }
        }
    };
    return (
        <div className="doughnut">
            <Doughnut data={data} options={options} />
        </div>
    );
}
export default DoughnutChart;