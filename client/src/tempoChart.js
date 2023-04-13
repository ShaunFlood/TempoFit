import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const TempoChart = ({ tempoData }) => {
    const chartRef = useRef(null); 

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'scatter', 
            data: {
                datasets: [{
                    label: 'Tempo compared to energy',
                    data: tempoData.map((tracks) => ({ x: tracks.tempo, y: tracks.energy })),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
        return () => {
            chart.destroy();
        };
    }, [tempoData]);

    return (
        <div style={{ height: '250px', width: '300px' }}>
            <canvas ref={chartRef} id="tempoChart"></canvas>
        </div>
    );
}

export default TempoChart;
