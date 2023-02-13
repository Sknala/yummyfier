import React, { useEffect } from "react";


export default function Fetching() {


  //Fetching meals filtered by first letter ex: f=a, f=b.
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>

    </div>
  );

}