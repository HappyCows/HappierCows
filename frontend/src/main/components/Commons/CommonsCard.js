import React from "react";
import { Card } from "react-bootstrap";

const CommonsCard = (props) => {

    return (
        <Card>
            {props.commons.id} - {props.commons.name}

            {props.buttonText != null && <button
                onClick={props.buttonLink}>{props.buttonText}</button>
            }
        </Card>
    )

    // return(
    //     <div style={{display:"inline-flex", flexDirection:"row", width:"500px", height:"75px", opacity:".85", borderTop:"1px solid lightGrey"}}>
    //         <h3 style={{width:"100px", padding:"10px", paddingTop:"20px", paddingBottom:"20px"}}>{props.commons.id}</h3>
    //         <h3 style={{width:"265px", padding:"10px", paddingTop:"20px", paddingBottom:"20px"}}>{props.commons.name}</h3>
    //         {props.buttonText != null && <button 
    //             style={{margin:"22.5px", 
    //                 width:"70px", 
    //                 height:"30px", 
    //                 backgroundColor:"red", 
    //                 borderWidth:"0px", 
    //                 color:"white", 
    //                 fontSize:"20px", 
    //                 fontWeight:"bold", 
    //                 borderRadius:"5px"}} 
    //         onClick={props.buttonLink}>{props.buttonText}</button>}
    //     </div>
    // );
};

export default CommonsCard;