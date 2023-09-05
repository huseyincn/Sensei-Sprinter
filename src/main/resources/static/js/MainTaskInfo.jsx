import React from "react";
/*import ReactDOM from 'react-dom/client';*/

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  /*import "react-circular-progressbar/dist/styles.css";*/

function MainTaskInfo(props) {
/*
    function createMembers(member){
        return <img key = {member.empID} className= "memberPhoto" style={{marginLeft: "-8px"}} src={member.photo} alt="avatar_img" /> 
    }
*/

    function findResponsibilityRatio(empID, task){

        var count = 0;

        for(let i = 0; i < task.subtasks.length; i++){
            
            if(task.subtasks[i].assignee === empID ){
                count++;
            }
        }

        return [count, task.subtasks.length];

    };

    function findEmp(empID, empList){

        for(let v = 0; v < empList.length; v++){
            if(empID === empList[v].sicil){
                return empList[v];
            }
        }
        return null;
    }

    function findOtherMembers(empID, task, empList){

        var result = [];
        
        for(let i = 0; i < task.subtasks.length; i++){
            
            if(task.subtasks[i].assignee !== empID ){

                var temp = findEmp(task.subtasks[i].assignee, empList);

                if(result.includes(temp) === false){
                    result.push(temp);
                }
                
            }
        }
        return result;
    };

    function createMembers(member){
        return <img key = {member.sicil} className= "memberPhoto" style={{marginLeft: "-0.45vmax"}} src={member.foto} alt="avatar_img" /> 
    }

    function progress(task){
        var sum1 = 0.0;
        var sum2 = 0.001;

        task.subtasks.forEach(element => {
            sum1 += element.timeSpent;
            sum2 += element.totalHour;
        });

        return Math.round(100 * sum1 / sum2);
    };

    return <div className="mainTaskInfo rounded" style={{height: 10.556 * findResponsibilityRatio(props.selectedID, props.task)[0] + "vmin", marginBottom: "0px"}}>

                <div className="container-fluid"> 

                    <div className="row"> 

                        <div className="col description">

                            <h6 style={{marginBottom: "5%", marginTop: "5%", fontSize: "0.73vmax"}}> {props.task.key + ": " + props.task.summary} </h6>
                            
                        </div>
                    
                    </div>

                    <div className="row" style={{paddingLeft: "3%"}}> 

                        <div className="col-9" style={{display: "flex"}}>

                            {findOtherMembers(props.selectedID, props.task, props.bEmployees).map(createMembers)}
                            
                        </div>

                        <div className="col-3" style={{textAlign: "right", display: "flex", justifyContent: "right" }} >
                            
                            <div style={{ width: "2.8vmax", height: "2.8vmax", textAlign: "center" }}>
                                
                                <CircularProgressbar value={progress(props.task)} text={`${progress(props.task)}%`} strokeWidth={5}  styles={buildStyles({
                                    // Text size
                                    textSize: '1.3vmax',
                                    // Colors
                                    pathColor: '#4b33e4',
                                    textColor: '#4b33e4',
                                    /*trailColor: '#FEFEFE',*/
                                    /*trailColor: '#ebebeb',*/
                                    /*trailColor: '#d6d6d6',*/
                                    
                                   /* backgroundColor: '#3e98c7'*/
                                   /*#4b33e4*/
                                })}/>
                            </div>
                                
                        </div>
                    
                    </div>

                </div>

                
            </div>;
}

export {MainTaskInfo};