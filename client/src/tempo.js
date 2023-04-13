import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TempoChart from './tempoChart';
import './tempo.css'

const Tempo = () => {
    const [tempoData, setTempoData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/toptracks', {withCredentials: true});
                setTempoData(response.data.audioFeatures); 
            } catch(error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])

    const tempoString = tempoData ? tempoData.map((tracks) => tracks.tempo).join(', ') : '';
    const tempoArray = tempoString.split(', ')
    const tempoNumArray = tempoArray.map(Number);
    const sum = tempoNumArray.reduce((acc, val) => acc + val, 0);
    const average = sum / tempoNumArray.length;

    return(
        <div>
            {tempoData ? (
                <div className="tempo-container">
                    <div className="chart">
                        <TempoChart tempoData={tempoData} />
                    </div>
                        <div className="text">
                            <h2 className="title">Tempo</h2>
                            <p>
                            Information  {average}
                            </p>
                        </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Tempo;