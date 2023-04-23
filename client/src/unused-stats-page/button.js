import React, { useState } from "react";

const CollapsibleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const genres = [
    'acoustic', 'afrobeat', 'alt-rock', 'alternative', 'ambient', 'anime',
    'black-metal', 'bluegrass', 'blues', 'bossanova', 'brazil', 'breakbeat',
    'british', 'cantopop', 'chicago-house', 'children', 'chill', 'classical',
    'club', 'comedy', 'country', 'dance', 'dancehall', 'death-metal',
    'deep-house', 'detroit-techno', 'disco', 'disney', 'drum-and-bass', 'dub',
    'dubstep', 'edm', 'electro', 'electronic', 'emo', 'folk', 'forro', 'french',
    'funk', 'garage', 'german', 'gospel', 'goth', 'grindcore', 'groove',
    'grunge', 'guitar', 'happy', 'hard-rock', 'hardcore', 'hardstyle',
    'heavy-metal', 'hip-hop', 'holidays', 'honky-tonk', 'house', 'idm',
    'indian', 'indie', 'indie-pop', 'industrial', 'iranian', 'j-dance', 'j-idol',
    'j-pop', 'j-rock', 'jazz', 'k-pop', 'kids', 'latin', 'latino', 'malay',
    'mandopop', 'metal', 'metal-misc', 'metalcore', 'minimal-techno', 'movies',
    'mpb', 'new-age', 'new-release', 'opera', 'pagode', 'party', 'philippines-opm',
    'piano', 'pop', 'pop-film', 'post-dubstep', 'power-pop', 'progressive-house',
    'psych-rock', 'punk', 'punk-rock', 'r-n-b', 'rainy-day', 'reggae', 'reggaeton',
    'road-trip', 'rock', 'rock-n-roll', 'rockabilly', 'romance', 'sad', 'salsa',
    'samba', 'sertanejo', 'show-tunes', 'singer-songwriter', 'ska', 'sleep',
    'songwriter', 'soul', 'soundtracks', 'spanish', 'study', 'summer', 'swedish',
    'synth-pop', 'tango', 'techno', 'trance', 'trip-hop', 'turkish', 'work-out',
    'world-music'
  ];

  const getBackgroundColor = (genre) => {
    // Replace with your logic to get different colors for each genre
    // For simplicity, we will just return a fixed color based on genre name length
    return genre.length % 2 === 0 ? "#007bff" : "#28a745";
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={toggleCollapse}
      >
        {isOpen ? "Collapse" : "Expand Genres"}
  </button>
  {isOpen && (
    <div style={{ marginTop: "16px" }}>
      {genres.map((genre) => (
        <div
          key={genre}
          style={{
            backgroundColor: getBackgroundColor(genre),
            color: "#fff",
            padding: "8px 16px",
            margin: "4px 0",
            borderRadius: "4px",
          }}
        >
          {genre}
        </div>
      ))}
    </div>
  )}
</div>
);
};

export default CollapsibleButton;