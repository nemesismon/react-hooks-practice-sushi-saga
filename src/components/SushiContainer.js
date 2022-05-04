import React, {useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({allDaSushi}) {

  const [indexStart, setIndexStart] = useState(0)
  const [indexEnd, setIndexEnd] = useState(4)

  const handleMoreButton = () => {
    if (indexStart < 97) {
    setIndexStart(indexEnd)
    console.log(indexEnd)
    setIndexEnd(indexEnd+4)
    console.log(indexEnd+4)
    }
    else if (indexStart > 97) {
      setIndexStart(0)
      setIndexEnd(4);
    }
  }

  return (
    <div className="belt">
      <Sushi allDaSushi={allDaSushi} indexStart={indexStart} indexEnd={indexEnd}/>
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
}

export default SushiContainer;
