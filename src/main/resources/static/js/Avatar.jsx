import React from "react";
/*img = "../public/avatarPhotos/person1.jpg" */

function Avatar(props) {

  return <img className={props.isSelected ? "circleImg circleSelected" : "circleImg"} src={props.photo} alt="avatar_img"/>;
  
}

export {Avatar};