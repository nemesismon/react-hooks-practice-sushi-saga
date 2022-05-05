import React , {useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [masterSushi, setMasterSushi] = useState([])
  const [allDaSushi, setAllDaSushi] = useState([])
  const [wallet, setWallet] = useState(100);
  const [indexStart, setIndexStart] = useState(0)
  const [indexEnd, setIndexEnd] = useState(4)
  const [plateFull, setPlateFull] = useState(true);
  const [plateEmpty, setPlateEmpty] = useState(false);
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => setAllDaSushi(data))
  }, [])

  const handleMoreButton = () => {
    if (indexStart === 0) {
      setMasterSushi(allDaSushi)
      setIndexStart(indexEnd)
      setIndexEnd(indexEnd+4)
    }
    else if (indexStart > 0 && indexStart < 93) {
    setIndexStart(indexEnd)
    setIndexEnd(indexEnd+4)
    }
    else if (indexStart > 94) {
      setIndexStart(0)
      setIndexEnd(4);
      setAllDaSushi(masterSushi)
    }
  }  

  const handleEatSushi = (event) => {
    const sushiPlateEaten = parseInt(event.target.alt);
    allDaSushi.filter((sushi) => {
      if (sushi.id === sushiPlateEaten) {
        sushi.plateStatus = plateEmpty;
        setPlates([...plates, "_"])
        if (sushi.price <= wallet) {
          setWallet(wallet - sushi.price)
      }}
    })}

  return (
    <div className="app">
      <SushiContainer handleMoreButton={handleMoreButton} indexStart={indexStart} indexEnd={indexEnd} allDaSushi={allDaSushi} handleEatSushi={handleEatSushi} plateFull={plateFull}/>
      <Table wallet={wallet} plates={plates}/>
    </div>
  );
}

export default App;
