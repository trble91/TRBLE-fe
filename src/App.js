import { useEffect, useState } from "react";
import React from "react";

function App() {

const [data, setData] = useState ({});

useEffect(() => {
  fetch("/data").then((res) =>
  res.json().then((data) => {
    setData({data});
    console.log(data)
  })
 );
}, [data])

  return (
    <div>
      
    </div>
  );
};

export default App;
