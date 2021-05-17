import React from "react"; 
import image from "assets/PlayPageBackground.png";


export default function CommonsPlay({_commons, currentUser}) {
    const firstName = currentUser.root ? currentUser.root.user.givenName : ""; 
  return (
      <div style={{backgroundImage: `url(${image})`, height: 896, width: 1592}}>
        <h1>Welcome Farmer {firstName}</h1>
      </div>
  )
}