import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleMoreButton, indexStart, indexEnd, allDaSushi, handleEatSushi, plateFull}) {


  const fourAtATime = allDaSushi.slice(indexStart, indexEnd);
  
  const renderSushi = fourAtATime.map((sushi) => {

      if (sushi.plateStatus === undefined) {
        sushi.plateStatus = plateFull;
      }

       return (
        <div key={sushi.id} name={sushi.name}>
          <Sushi sushi={sushi} handleEatSushi={handleEatSushi}/>
        </div>
       )
  })

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
}

export default SushiContainer;
