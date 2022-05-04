import React, {useState} from "react";

function Sushi({ allDaSushi, indexStart, indexEnd }) {

  const fourAtATime = allDaSushi.slice(indexStart, indexEnd);
  
  const renderSushi = fourAtATime.map((sushi) => {
    return (
    <div className="sushi">
      <div key={sushi.id} className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 key={sushi.id} className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
)})

return (
  <>
  {renderSushi}
  </>
)

}

export default Sushi;
