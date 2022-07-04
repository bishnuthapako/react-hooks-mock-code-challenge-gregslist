import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [loadData, setLoadData]=useState([])



 useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data)
    setLoadData(data)

  })


 },[])


  return (
    <div className="app">
      <Header />
      <ListingsContainer loadData={loadData}/>
    </div>
  );
}

export default App;
