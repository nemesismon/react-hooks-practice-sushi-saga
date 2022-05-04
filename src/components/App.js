import React , {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allDaSushi, setAllDaSushi] = useState([])
  const [wallet, setWallet] = useState(100);
  const [emptyPlates, setEmptyPlates] = useState(false);

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((sushis) => setAllDaSushi(sushis))
  }, [])

  

  return (
    <div className="app">
      <SushiContainer allDaSushi={allDaSushi}/>
      <Table allDaSushi={allDaSushi} wallet={wallet}/>
    </div>
  );
}

export default App;
