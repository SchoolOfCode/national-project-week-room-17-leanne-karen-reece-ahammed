import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./index.css"
export default function DoughnutChart({happinessData}) {
    console.log(happinessData)
    const data = {
        labels: [ "😟", "😐", "😀"],
        datasets: [
            {
                label: "Happiness",
                data: happinessData,
                borderColor: [ "rgba(255,206,86,0.2)" ],
                backgroundColor: [
                    "rgba(137, 105, 120,1)",
                    "rgba(153, 172, 255,1)",
                    "rgba(170, 250, 200,1)",
                ],
                pointBackgroundColor: "rgba(255,206,86,0.2)"
            }
        ]
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: "The Happy Doughnut",
                color: "black",
                font: {
                    size: 50,
                    family: 'Amatic SC',
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