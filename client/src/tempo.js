import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    const sum = tempoNumArray.reduce((acc, val) => acc + val, 0); //setting acc to 0 then adding the val to it
    const average = sum / tempoNumArray.length;

    return(
        <div>
            <h1>Tempo Values</h1>
            {tempoData ? (
                <div>
                <p>
                    {tempoData.map((tracks) => tracks.tempo).join(', ')}
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

export default Tempo;