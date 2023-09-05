import React from "react";

function EksikGiren(props) {
    return <div id="zamanObject">

                <div style={{display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginTop: "1vmax"}}>
                    <h6 style={{margin: "0px", fontWeight: "bolder", fontSize: "0.8vmax"}}> {props.lack + 1 + "h"} </h6>
                    <img id="zamanPhoto" src={props.empPhoto } alt="aaa" style={{opacity: 0.25, position: "absolute"}} />
                </div>
                
                <p style={{marginTop: "15%"}}> {props.empName} </p>
            </div>;
}

export {EksikGiren};