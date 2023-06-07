import { useEffect, useState } from "react";
import React from "react";

function App() {

const [data, setData] = useState ({
    artist: "",
    song: "",
    album: "",
});

useEffect(() => {
  fetch(data).then((res) =>
  res.json().then((data) => {
    setData({
      artist: ,
      song: ,
      album: ,
    });
  });
  );
}, []);

  return (
    <div>
      
    </div>
  );
};

export default App;
