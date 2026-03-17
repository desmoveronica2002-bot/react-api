import React, { useEffect, useState } from "react";

const CastList = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actresses/") 
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setCast(data); 
      })
  }, []);

  return (
    <div className="container">
      {cast.map((actor) => (
        <div key={actor.id} className="cast-card">
          <img src={actor.image} alt={actor.name} className="cast-image" />
          <h3>{actor.name}</h3>
          <p><strong>Anno di nascita:</strong> {actor.birth_year}</p>
          <p><strong>Nazionalità:</strong> {actor.nationality}</p>
          <p>{actor.biography}</p>
          <p><strong>Riconoscimenti:</strong> {actor.awards}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;