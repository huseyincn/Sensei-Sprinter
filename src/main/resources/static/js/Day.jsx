import React from "react";

function Day(props) {
    
    if(props.isCompact === false){

        if(props.currentDay === props.dayIndex){
            return <div className= "workDay rounded">
                        <h6 style={{margin: "0px", color: "#4b33e4", fontSize: "0.8vmax"}}> {props.dayNumber} </h6>
                    </div>

                     
                        {/*
                        <div style={{height: "2px"}}></div>
                        <div className="timeLines" style={{height: props.NumberOfSubtaskOfGivenEmployee * (114 + 25) + 25}} ></div> 
                        <div className="timeLinesSelected" style={{height: props.NumberOfSubtaskOfGivenEmployee * (114 + 25) + 25}} ></div> 
                        <div style={{height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#4b33e4", marginLeft: "35px"}}></div>
                        */}
                    
        }
        else{/*
            return <div style={{zIndex: 2, position: "relative"}}>
    
                        <div className= "workDay rounded">
                            <h6 style={{margin: "0px"}}> {props.dayNumber}</h6>
                        </div>
                        
                        <div className="timeLines" style={{height: props.NumberOfSubtaskOfGivenEmployee * (114 + 25) + 25}} ></div> // bu line comment out olacak
                        

                    </div>*/

            return <div className= "workDay rounded">
                        <h6 style={{margin: "0px", fontSize: "0.8vmax"}}> {props.dayNumber}</h6>
                    </div>
            

            
        }


    }
    else{

        if(props.currentDay === props.dayIndex){
            return  <div style={{/*zIndex: 2,*/ position: "relative"/*, opacity: "0.99"*/}}>   
            
                        <div className= "workDayCompact rounded">
                            <h6 style={{margin: "0px", color: "#4b33e4", fontSize: "0.8vmax"}}> {props.dayNumber} </h6>
                        </div>

                        <div style={{height: "0.1vmax", zIndex: 2}}></div>
                        <div className="timeLinesCompact" style={{height: props.numberOfEmployeesForCompactView * 3.7 + 1 + "vmax"}} ></div>
                        <div className="timeLinesCompactSelected" style={{height: props.numberOfEmployeesForCompactView * 3.7 + 1 + "vmax"}} ></div>
                        <div style={{height: "0.6vmax", width: "0.6vmax", borderRadius: "50%", backgroundColor: "#4b33e4", marginLeft: "2.405vmax", zIndex: 2}}></div>
                        
                    </div>
        }
        else{
            return  <div style={{/*zIndex: 2,*/ position: "relative"/*, opacity: "0.99"*/}} >

                        <div className= "workDayCompact rounded">
                            <h6 style={{margin: "0px", fontSize: "0.8vmax"}}> {props.dayNumber}</h6>
                        </div>

                        <div className="timeLinesCompact" style={{height: props.numberOfEmployeesForCompactView * 3.7 + 1 + "vmax"}} ></div>

                    </div>     
                   
        }

    }

    

    
}

export {Day};