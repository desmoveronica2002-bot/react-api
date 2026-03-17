import React, { useEffect, useState } from "react";

const CastList = () => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actresses/") 
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
      })
  }, []);

  return (
    <div>
      <h1>Attrici </h1>
    </div>
  );
};

export default CastList;