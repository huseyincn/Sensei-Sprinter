import React from "react";

function CompactSubTask(props) {

    let ratio = props.subTask.timeSpent * 100.0 / props.subTask.totalHour;

    if(props.subTask.timeSpent < props.subTask.totalHour && props.subTask.endDate < (props.currentDay + 1)){

        if(props.subTask.timeSpent === 0){

            return <div className="subTaskCompact rounded" style={{marginLeft: 5.6 * (props.subTask.startDate - props.prevDay - 1) + "vmax", width: (5.6 * (props.subTask.endDate - props.subTask.startDate + 1) - 0.2) + "vmax", border: "0.2vmax solid red"}}>
                    <p> {props.subTask.key + ": " + props.subTask.summary}</p>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <div className="progress" style={{height: "0.8vmax", width: "90%", marginTop: "-0.1vmax", border: "1px solid #979797"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 25 + "%", textAlign: "left", fontSize: "0.8vmax", backgroundColor: "#e9ecef", paddingLeft: "0.2vmax"}}> {props.subTask.timeSpent + "h"} </div> 
                            <div className="progress-bar" role="progressbar" style={{width: 75 + "%", textAlign: "right", fontSize: "0.7vmax", backgroundColor: "#e9ecef", paddingRight: "0.2vmax", color: "black"}}> {props.subTask.totalHour +  "h"} </div>
                        </div>
                        {/*<p style={{fontSize: "0.6vw", margin: "0px"}}> {props.subTask.totalHour +  "h"} </p>*/}
                        
                    </div>
                    {/*{props.update_prevDay(props.subTask.endDate)}*/}
                </div>;

        }

        return <div className="subTaskCompact rounded" style={{marginLeft: 5.6 * (props.subTask.startDate - props.prevDay - 1) + "vmax", width: (5.6 * (props.subTask.endDate - props.subTask.startDate + 1) - 0.2) + "vmax", border: "0.2vmax solid red"}}>
                    <p > {props.subTask.key + ": " + props.subTask.summary}</p>
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <div className="progress" style={{height: "0.8vmax", width: "90%", marginTop: "-0.1vmax", border: "1px solid #979797"}}>
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: ratio + "%", textAlign: "right", fontSize: "0.8vmax"}}> {props.subTask.timeSpent + "h"} </div>
                            <div className="progress-bar" role="progressbar" style={{width: 100 - ratio + "%", textAlign: "right", fontSize: "0.7vmax", backgroundColor: "#e9ecef", paddingRight: "0.2vmax", color: "black"}}> {props.subTask.totalHour +  "h"} </div> 
                        </div>
                        {/*<p style={{fontSize: "0.6vw", margin: "0px"}}> {props.subTask.totalHour +  "h"} </p>*/}

                    </div>
                    {/*{props.update_prevDay(props.subTask.endDate)}*/}
                </div>; 

    }
    else{
        
        if(props.subTask.timeSpent === 0){

            return <div className="subTaskCompact rounded" style={{marginLeft: 5.6 * (props.subTask.startDate - props.prevDay - 1) + "vmax", width: (5.6 * (props.subTask.endDate - props.subTask.startDate + 1) - 0.2) + "vmax"/*, border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed rgb(192, 192, 192)" : null*/}}>
                    <p> {props.subTask.key + ": " + props.subTask.summary}</p>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <div className="progress" style={{height: "0.8vmax", width: "90%", border: "1px solid #979797"}}>
                            <div className="progress-bar" role="progressbar" style={{width: 25 + "%", textAlign: "left", fontSize: "0.8vmax", backgroundColor: "#e9ecef", paddingLeft: "0.2vmax"}}> {props.subTask.timeSpent + "h"} </div> 
                            <div className="progress-bar" role="progressbar" style={{width: 75 + "%", textAlign: "right", fontSize: "0.7vmax", backgroundColor: "#e9ecef", paddingRight: "0.2vmax", color: "black"}}> {props.subTask.totalHour +  "h"} </div>
                        </div>
                        {/*<p style={{fontSize: "0.6vw", margin: "0px"}}> {props.subTask.totalHour +  "h"} </p>*/}
                        
                    </div>
                    {/*{props.update_prevDay(props.subTask.endDate)}*/}
                </div>;

        }
        else if(props.subTask.timeSpent < props.subTask.totalHour){

            return <div className="subTaskCompact rounded" style={{marginLeft: 5.6 * (props.subTask.startDate - props.prevDay - 1) + "vmax", width: (5.6 * (props.subTask.endDate - props.subTask.startDate + 1) - 0.2) + "vmax"/*, border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed #4b33e4" : null*/}}>
                    <p> {props.subTask.key + ": " + props.subTask.summary}</p>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <div className="progress" style={{height: "0.8vmax", width: "90%", border: "1px solid #979797"}}>
                            <div className="progress-bar" role="progressbar" style={{width: ratio + "%", textAlign: "right", fontSize: "0.8vmax", backgroundColor: "#3DB6C7"}}> {props.subTask.timeSpent + "h"} </div> 
                            <div className="progress-bar" role="progressbar" style={{width: 100 - ratio + "%", textAlign: "right", fontSize: "0.7vmax", backgroundColor: "#e9ecef", paddingRight: "0.2vmax", color: "black"}}> {props.subTask.totalHour +  "h"} </div>
                        </div>
                        {/*<p style={{fontSize: "0.6vw", margin: "0px"}}> {props.subTask.totalHour +  "h"} </p>*/}

                    </div>
                    {/*{props.update_prevDay(props.subTask.endDate)}*/}
                </div>;

        }
        else{

            return <div className="subTaskCompact rounded" style={{marginLeft: 5.6 * (props.subTask.startDate - props.prevDay - 1) + "vmax", width: (5.6 * (props.subTask.endDate - props.subTask.startDate + 1) - 0.2) + "vmax"/*, border: (props.subTask.startDate <= (props.currentDay + 1) && props.subTask.endDate >= (props.currentDay + 1)) ? "2px dashed #4b33e4" : null*/}}>
                    <p> {props.subTask.key + ": " + props.subTask.summary}</p>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>

                        <div className="progress" style={{height: "0.8vmax", width: "90%"}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: ratio + "%", textAlign: "right", fontSize: "0.8vmax", paddingRight: "0.2vmax"}}> {props.subTask.timeSpent + "h"} </div> 
                        </div>

                    </div>
                    {/*{props.update_prevDay(props.subTask.endDate)}*/}
                </div>;

        }

        

    }
             
}

export {CompactSubTask};