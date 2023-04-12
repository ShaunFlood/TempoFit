import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <h1>Energy Values</h1>
            {energyData ? (
                <div>
                    <p>
                    {energyData.map((tracks) => tracks.energy).join(', ')}
                     </p>
                    <p>
                    {average}
                     </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Energy;