import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto'

const GenrePieChart = ({ genreData }) => {
  const chartRef = useRef(null);
  const aviablegenres = ["acoustic","afrobeat","alt-rock","alternative","ambient","anime","black-metal","bluegrass","blues","bossanova","brazil","breakbeat","british","cantopop","chicago-house","children","chill","classical","club","comedy","country","dance","dancehall","death-metal","deep-house","detroit-techno","disco","disney","drum-and-bass","dub","dubstep","edm","electro","electronic","emo","folk","forro","french","funk","garage","german","gospel","goth","grindcore","groove","grunge","guitar","happy","hard-rock","hardcore","hardstyle","heavy-metal","hip-hop","holidays","honky-tonk","house","idm","indian","indie","indie-pop","industrial","iranian","j-dance","j-idol","j-pop","j-rock","jazz","k-pop","kids","latin","latino","malay","mandopop","metal","metal-misc","metalcore","minimal-techno","movies","mpb","new-age","new-release","opera","pagode","party","philippines-opm","piano","pop","pop-film","post-dubstep","power-pop","progressive-house","psych-rock","punk","punk-rock","r-n-b","rainy-day","reggae","reggaeton","road-trip","rock","rock-n-roll","rockabilly","romance","sad","salsa","samba","sertanejo","show-tunes","singer-songwriter","ska","sleep","songwriter","soul","soundtracks","spanish","study","summer","swedish","synth-pop","tango","techno","trance","trip-hop","turkish","work-out","world-music"]

  useEffect(() => {
    const genreCount = {};

    genreData.forEach((name) => {
      name.genres.forEach((genre) => {
        const matchingGenre = aviablegenres.find(
          (aviableGenre) => genre.toLowerCase().includes(aviableGenre)
        );

        if (matchingGenre) {
          if (genreCount[matchingGenre]) {
            genreCount[matchingGenre]++;
          } else {
            genreCount[matchingGenre] = 1;
          }
        }
      });
    });

    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        datasets: [{
          data: Object.values(genreCount),
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }],
        labels: Object.keys(genreCount),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        legend: {
        display: true,
        position: 'left',
        align: 'end',
        labels: {
        padding: 5,
        }
        }
        }
        }
    });

    return () => {
      chart.destroy();
    };
  }, [genreData]);

  return (
    <div style={{ height: '250px', width: '300px' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default GenrePieChart;
