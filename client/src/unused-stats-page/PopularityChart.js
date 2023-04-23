import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PopularityChart = ({ popularityData }) => {
    const chartRef = useRef(null); 

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'line', 
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [{
                    label: 'Popularity',
                    data: popularityData.map((tracks) => tracks.popularity),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true, // Make the chart responsive
                maintainAspectRatio: false, // Do not maintain aspect ratio
            }
        });
        return () => {
            chart.destroy();
        };
    }, [popularityData]);

    return (
        <div style={{ height: '250px', width: '300px' }}>
            <canvas ref={chartRef} id="popularityChart"></canvas>
        </div>
    );
}

export default PopularityChart;