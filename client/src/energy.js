import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EnergyChart from './EnergyChart.js';
import './energy.css'

const Energy = () => {
    const [energyData, setEnergyData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8888/toptracks', {withCredentials: true});
                setEnergyData(response.data.audioFeatures); 
            } catch(error) {
                console.error(error)
            }
        }

        fetchData();
    }, [])

    const energyString = energyData ? energyData.map((tracks) => tracks.energy).join(', ') : '';
    const energyArray = energyString.split(', ')
    const energyNumArray = energyArray.map(Number);
    const sum = energyNumArray.reduce((acc, val) => acc + val, 0); //setting acc to 0 then adding the val to it
    const average = sum / energyNumArray.length;

    return(
        <div>
            {energyData ? (
                <div className="energy-container">
                    <div className="chart"> 
                        <EnergyChart energyData={energyData} />
                    </div>
                    <div className="text">
                    <h2 className="title">Energy</h2>
                        <p>
                        Energy is a measurement from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.
                        </p>
                        <p>
                        Your average energy level based on your top twenty tracks on spotify is {average}.
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Energy;