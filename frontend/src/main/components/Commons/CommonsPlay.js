import React from "react"; 



export default function CommonsPlay({_commons, currentUser}) {
    const firstName = currentUser.root ? currentUser.root.user.givenName : ""; 
  return (
      <div >
        <h1>Welcome Farmer {firstName}</h1>
      </div>
  );
};