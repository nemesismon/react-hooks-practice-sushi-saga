import React from "react";

function Sushi({sushi, handleEatSushi}) {

return (
  <div className="sushi">
    <div className="plate" onClick={handleEatSushi}>
      {sushi.plateStatus === false ? null : (
        <img
          src={sushi.img_url}
          alt={sushi.id}
          width="100%"
        />
      )}
    </div>
    <h4 className="sushi-details">
      {sushi.name} - ${sushi.price}
    </h4>
  </div>
)}

export default Sushi;