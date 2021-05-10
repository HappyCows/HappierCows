import React from "react";
import CommonsCard from "./CommonsCard";

const CommonsList = (props) => {
    return(
        <div style={{width:"500px", margin:"20px", borderRadius:"5px", backgroundColor:"white",}}>
            <div style={{width:"500px", display:"inline-flex", flexDirection:"row", opacity:".85"}}>
                <h5 style={{width:"100px", padding:"10px", paddingTop:"5px", paddingBottom:"5px"}}>ID #</h5>
                <h5 style={{width:"265px", padding:"10px", paddingTop:"5px", paddingBottom:"5px"}}>Common Name</h5>
            </div>
            <div>
                {props.commonList.map((c)=>(<CommonsCard key={c.id} commons={c} buttonText={props.buttonText} buttonLink={props.buttonLink}/>)) }
            </div>
        </div>
    );
};

export default CommonsList;