import React, { useState } from 'react';
import { EmployeesSection } from './EmployeesSection.jsx';
import {Task} from './Task.jsx';
import { Day } from './Day.jsx';
import { CompactData } from './CompactData.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import { Lines } from './Lines.jsx';

function ThirdRow(props){

    const [employeeID, setEmployeeID] = useState(null);

    /*setCount(id);*/

    // var tempEmp = null;
/*
    for(let i = 0; i < props.employees.length; i++){
        if(employeeID === props.employees[i].empID){
            tempEmp = props.employees[i];
            break;
        }
    }
*/
/*
    for(let i = 0; i < props.bEmployees.length; i++){
        if(employeeID === props.bEmployees[i].sicil){
            tempEmp = props.bEmployees[i].sicil;
            break;
        }
    }
*/
    /*console.log(tempEmp);*/

    function isGivenEmployeeAssigned(empID, task){

        for(let i = 0; i < task.subtasks.length; i++){
            if(task.subtasks[i].assignee === empID){
                return true;
            }
        }
        return false;
    };
/*
    function createTask(task){

        if(employeeID !== null){

            if(isGivenEmployeeAssigned(employeeID, task)){

                return <Task  
                            key = {task.id}
                            selectedID = {employeeID}
                            employees = {props.employees}
                            bEmployees = {props.bEmployees}
                            task = {task}
                            currentDay = {props.currentDay}
                            totalDay = {props.totalDay}
                        />;

            }  
            else{
                return null;
            }

        }
        else{
            return null;
        }

    }
*/

    function find_min_startDate(employeeID, task){

        var min = 100000;

        for(let v = 0; v < task.subtasks.length; v++){

            if(task.subtasks[v].assignee === employeeID){
                if(task.subtasks[v].startDate < min){
                    min = task.subtasks[v].startDate;
                }
            }

        }

        return min;

    }

    function createTasks(taskList){

        if(taskList === []){
            return null;
        }

        if(employeeID !== null){
            
            const result = [];

            for(let i = 0; i < taskList.length; i++){

                if(isGivenEmployeeAssigned(employeeID, taskList[i])){
                    result.push(taskList[i]);
                }

            }

            /*console.log(result);*/

            const sortedResult = [...result].sort((a, b) => find_min_startDate(employeeID, a) - find_min_startDate(employeeID, b));

            const elementsList = [];

            for(let i = 0; i < sortedResult.length; i++){

                elementsList.push(<Task  
                                        key = {sortedResult[i].id}
                                        selectedID = {employeeID}
                                        bEmployees = {props.bEmployees}
                                        task = {sortedResult[i]}
                                        currentDay = {props.currentDay}
                                        totalDay = {props.totalDay}
                                    />)

            }

            return elementsList;

        }
        else{
            return null;
        }

    }

    function computeNumberOfSubtaskOfGivenEmployee(empID, taskList){

        var count = 0;
        
        for(let i = 0; i < taskList.length; i++){
            
            for(let j = 0; j < taskList[i].subtasks.length; j++){
                if(taskList[i].subtasks[j].assignee === empID){
                    count++;
                }
            }

        }

        return count;

    }

    function createDays(totalDays){
        
        var result = [];

        for(let i = 0; i < totalDays; i++){
            result.push(<Day
                key = {i}
                dayIndex = {i} 
                dayNumber = {props.dayArray[i]}
                currentDay = {props.currentDay}
                isCompact = {props.view}
                NumberOfSubtaskOfGivenEmployee = {computeNumberOfSubtaskOfGivenEmployee(employeeID, props.bTasks)}
                numberOfEmployeesForCompactView = {props.employees.length}
            />);
        }

        return result;

    }

    function createLines(totalDays){
        
        var result = [];

        for(let i = 0; i < totalDays; i++){
            result.push(<Lines
                key = {i}
                dayIndex = {i} 
                dayNumber = {props.dayArray[i]}
                currentDay = {props.currentDay}
                isCompact = {props.view}
                NumberOfSubtaskOfGivenEmployee = {computeNumberOfSubtaskOfGivenEmployee(employeeID, props.bTasks)}
                numberOfEmployeesForCompactView = {props.employees.length}
            />);
        }

        return result;

    }

/*
    var isBackgroundDark = false;

    function createCompactData(cd){

        isBackgroundDark = !isBackgroundDark;

        return <CompactData
                    key = {cd.emp.empID}
                    element = {cd}
                    currentDay = {props.currentDay}
                    totalDay = {props.totalDay}
                    isBackgroundDark = {isBackgroundDark}
                    bEmployees = {props.bEmployees}
                />

    }
*/
    var isBackgroundDark = false;

    function createCompactData(cd){

        isBackgroundDark = !isBackgroundDark;

        return <CompactData
                    key = {cd.sicilNo}
                    element = {cd}
                    currentDay = {props.currentDay}
                    totalDay = {props.totalDay}
                    isBackgroundDark = {isBackgroundDark}
                    bEmployees = {props.bEmployees}
                />

    }

    if(props.loading === true){
        return <div className="row thirdRow" style={{padding: "0"}}>
                    <div style={{position: "relative", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <ClipLoader
                            color={"#12065C"}
                            loading={props.loading}
                            size={"4vmin"}
                        />
                    </div> 
                </div>
    }

    if(props.view === false){
        return <div className="row thirdRow" >

                <div className="col" style={{width: "13%", flex: "0 0 13%"/*,maxWidth: "13%"*/}}>
                
                    <EmployeesSection
                        
                        selectedID = {employeeID}
                        setID = {setEmployeeID}
                        employees = {props.employees}
                        bEmployees = {props.bEmployees}
                    />
                    
                </div>

                <div className="col" style={{paddingLeft: "1%", paddingRight: "1%", paddingBottom: "1%"}}>

                    <div className="scrollbar" id="style-4" style={{fontSize: "0"}}> 
                        <div className="daySection"> 
                            <div style={{height: "4vmin", width: "17.09vmax", zIndex: 5}}></div> {/*3.24 vh -- 35px and 328 px */} 
                            {createDays(props.totalDay)}
                        </div>
                        <div style={{width: "auto", display: 'inline-flex', backgroundColor: "white", zIndex: 2, marginBottom: "0"}}> 
                            <div style={{height: "1.2vmin", width: "17.09vmax", zIndex: 5}}></div> {/* 12px and 328 px */}
                            {createLines(props.totalDay)}
                        </div>
                         
                        {/*{props.bTasks?.map(createTask)}*/}
                        
                        {createTasks(props.bTasks)}
                        

                    </div>


                </div>

            </div>;
    }
    else{
        return <div className="row thirdRow" >

                    <div className="scrollbar" id="style-5">

                        <div className="daySectionCompact">
                            <div style={{height: "2.5vmax", width: "12vmax"/*, zIndex: 5*/}}></div> 
                            {createDays(props.totalDay)}
                        </div>

                        {/*{props.compactDataList.map(createCompactData)}*/}
                        {props.bCompactDataList?.map(createCompactData)}
                        
                    </div>
                </div>
    }

    
}
/*42 12*/
export {ThirdRow};