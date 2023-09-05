import React from "react";

function Sub_Task(props) {

    if(props.subTask.timeSpent === 0){

        return <div className="subTask rounded" style={{marginLeft: (4.17 + 0.25) * (props.subTask.startDate - 1) + "vmax", width: ((4.17 + 0.25) * (props.subTask.endDate - props.subTask.startDate + 1) - 0.25) + "vmax"/*, border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed rgb(192, 192, 192)" : null*/, border: (props.subTask.endDate < (props.currentDay + 1)) ? "3px solid red" : (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed #4b33e4" : null}}>
                
                <p > {props.subTask.key + ": " + props.subTask.summary}</p>
                
                <div style={{display: "flex", justifyContent: "center"}}>

                    <div className="progress" style={{height: "2.1vmin", width: "90%", border: "1px solid #979797"}}>
                        <div className="progress-bar" role="progressbar" style={{width: 15 /*(props.subTask.endDate < (props.currentDay + 1) ? 7 : 0)*/ + "%", textAlign: "left", fontSize: "1.6vmin", backgroundColor: "#e9ecef", paddingLeft: "3px"}}> {props.subTask.timeSpent + "h"} </div> 
                        <div className="progress-bar" role="progressbar" style={{width: 85 + "%", textAlign: "right", fontSize: "1.6vmin", backgroundColor: "#e9ecef", paddingRight: "3px", color: "black"}}> {props.subTask.totalHour +  "h"} </div>
                    </div>
                    {/*<div> {props.subTask.totalHour +  "h"} </div>*/}

                </div>
                
            </div>;

    }
    else if(props.subTask.timeSpent < props.subTask.totalHour){

        return <div className="subTask rounded" style={{marginLeft: (4.17 + 0.25) * (props.subTask.startDate - 1) + "vmax", width: ((4.17 + 0.25) * (props.subTask.endDate - props.subTask.startDate + 1) - 0.25) + "vmax"/*, border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2.5px dashed rgb(192, 192, 192)" : null*/, border: (props.subTask.endDate < (props.currentDay + 1)) ? "3px solid red" : (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed #4b33e4" : null}}>
                
                <p > {props.subTask.key + ": " + props.subTask.summary}</p>
                
                <div style={{display: "flex", justifyContent: "center"}}>

                    <div className="progress" style={{height: "2.1vmin", width: "90%", border: "1px solid #979797"}}>
                        <div className={(props.subTask.endDate < (props.currentDay + 1) ? "progress-bar bg-danger" : "progress-bar")} role="progressbar" style={{width: (props.subTask.timeSpent * 100.0 / props.subTask.totalHour) + "%", textAlign: "right", fontSize: "1.6vmin", backgroundColor: "#44c8da"}}> {props.subTask.timeSpent + "h"} </div> 
                        <div className="progress-bar" role="progressbar" style={{width: ( 100 - (props.subTask.timeSpent * 100.0 / props.subTask.totalHour) )+ "%", textAlign: "right", fontSize: "1.6vmin", backgroundColor: "#e9ecef", paddingRight: "3px", color: "black"}}> {props.subTask.totalHour +  "h"} </div>
                    </div>
                    {/*<div> {props.subTask.totalHour +  "h"} </div>*/}

                </div>
                
            </div>;
    }
    else{

        return <div className="subTask rounded" style={{marginLeft: (4.17 + 0.25) * (props.subTask.startDate - 1) + "vmax", width: ((4.17 + 0.25) * (props.subTask.endDate - props.subTask.startDate + 1) - 0.25) + "vmax", border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed #4b33e4" : null/*, border: "2px solid green"*//*, backgroundColor: "#dcfcdc"*/}}>
                
                <p > {props.subTask.key + ": " + props.subTask.summary}</p>
                
                <div style={{display: "flex", justifyContent: "center"}}>

                    <div className="progress" style={{height: "2.1vmin", width: "90%"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "100%", textAlign: "right", fontSize: "1.6vmin"/*, backgroundColor: "#00A300"*/}}> {props.subTask.totalHour + "h"} </div> 
                    </div>

                </div>
                
            </div>;

    }
             
}

export {Sub_Task};