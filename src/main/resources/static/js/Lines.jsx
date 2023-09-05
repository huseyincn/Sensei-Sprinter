import React from "react";

function Lines(props) {
    
    if(props.isCompact === false){

        if(props.currentDay === props.dayIndex){
            return  <div style={{position: "relative", width: "4.17vmax", marginRight: "0.25vmax"}}>
                        <div className="timeLines" style={{height: (props.NumberOfSubtaskOfGivenEmployee * (10.556 + 2.32) + 2.32) + "vmin"}} ></div> 
                        <div className="timeLinesSelected" style={{height: (props.NumberOfSubtaskOfGivenEmployee * (10.556 + 2.32) + 2.32) + "vmin"}} ></div> 
                        <div style={{height: "0.55vmax", width: "0.55vmax", borderRadius: "50%", backgroundColor: "#4b33e4", marginLeft: "1.85vmax"}}></div>
                    </div>
        }
        else{
            return <div style={{position: "relative", width: "4.17vmax", marginRight: "0.25vmax"}}>
                        <div className="timeLines" style={{height: (props.NumberOfSubtaskOfGivenEmployee * (10.556 + 2.32) + 2.32) + "vmin"}} ></div>
                    </div>
            
        }

    }
    else{
        return null;
    }
    
}

export {Lines};