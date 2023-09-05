import React from "react";
import { Sub_Task } from "./Sub_Task";
import { MainTaskInfo } from "./MainTaskInfo";

function Task(props) {

    function findSubTasksOfGivenEmployee(empID, task){

        var result = [];

        for(let i = 0; i < task.subtasks.length; i++){
            
            if(task.subtasks[i].assignee === empID ){
                
                result.push(task.subtasks[i]);
                
            }
        
        }

        return [...result].sort((a, b) => a.startDate - b.startDate);

    };
/*
    function createSubTask(sub_task, type){

        return <Sub_Task
                    key = {sub_task.taskID}
                    kind = {type}
                    subTask = {sub_task}
                    currentDay = {props.currentDay}
                />

    }
*/
    function createSubTask(sub_task){

        return <Sub_Task
                    key = {sub_task.id}
                    subTask = {sub_task}
                    currentDay = {props.currentDay}
                />

    }

    return <div className="mainTask rounded" style={{width: (4.42  * props.totalDay + 17.09) + "vmax"}}>
                
                <MainTaskInfo
                    task = {props.task}
                    /*emp = {props.emp}*/

                    selectedID = {props.selectedID}
                    bEmployees = {props.bEmployees}
                />
                
                <div className="Tail">

                    {findSubTasksOfGivenEmployee(props.selectedID, props.task).map(createSubTask)}

                    {/*
                    {props.task.findSubTasksOfGivenEmployee(props.emp)[3].map( function(x) { return createSubTask(x, "progress-bar bg-success"); } )}
                    {props.task.findSubTasksOfGivenEmployee(props.emp)[2].map( function(x) { return createSubTask(x, "progress-bar"); } )}
                    {props.task.findSubTasksOfGivenEmployee(props.emp)[1].map( function(x) { return createSubTask(x, "progress-bar bg-warning"); } )}
                    {props.task.findSubTasksOfGivenEmployee(props.emp)[0].map( function(x) { return createSubTask(x, "progress-bar bg-danger"); } )}
                    */}
                </div>

                
        
                
            </div>;
}

export {Task};