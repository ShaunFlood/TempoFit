import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const EnergyChart = ({ energyData }) => {
    const chartRef = useRef(null); // reference to the chart canvas element

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'bar', 
            data: {
                labels: energyData.map((track) => track.energy),
                datasets: [{
                    label: 'Energy',
                    data: energyData.map((track) => track.energy),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1
                    }
                }
            }
        });
        return () => {
            chart.destroy();
        };
    }, [energyData]);

    return (
        <div style={{ height: '250px', width: '300px' }}>
            <canvas ref={chartRef} id="energyChart"></canvas>
        </div>
    );
}

export default EnergyChart;