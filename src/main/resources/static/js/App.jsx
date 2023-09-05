import React, { useState, useEffect } from 'react';
import {FirstRow} from './FirstRow.jsx';
import {SecondRow} from './SecondRow.jsx';
import {ThirdRow} from './ThirdRow.jsx';
import { SecondAHalfRow } from './SecondAHalfRow.jsx';

import axios from 'axios'

import { GeneralInfo, genInfo } from './data.js';
import { Employee, employeeArr } from './data.js';
import { Task, tasksArr, sprintRatio } from './data.js';
import { compactData, compactDataList } from './data.js'


// startDate ve endDate array index'i cinsinden ama 1 den basliyor.

function App(){

    function findIndexOfCurrDay(workdays){

      /*console.log(today.getUTCDate());*/

      var dayNumber = new Date().getUTCDate();

      return workdays.indexOf(dayNumber);

    }

    const [loading, set_loading] = useState(true);

    const [searchedTeam, set_searchedTeam] = useState("");

    // console.log(searchedTeam);

    const [backGenInfo, set_backGenInfo] = useState(null);

    useEffect(() => {
      axios
        .get("mock/sprint?team=" + searchedTeam) /* http://localhost:8080/mock/sprint?team= */
        .then((result) => {
          console.log("General Info:");
          console.log(result.data);
          set_backGenInfo(result.data);
          // console.log(searchedTeam);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.

    var indexOfCurrentDay = backGenInfo === null ? 0 : findIndexOfCurrDay(backGenInfo.workdays);
    var totalPeriodOfSprint = backGenInfo === null ? 0 : backGenInfo.workdays?.length;

    if(indexOfCurrentDay === -1){
      indexOfCurrentDay = 5;
    }
/*
    console.log(indexOfCurrentDay);
    console.log(totalPeriodOfSprint);
*/
/*    
    const [backSprintStatus, set_backSprintStatus] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:8080/mock/task-status?team=" + searchedTeam)
        .then((result) => {
          console.log("Sprint Status:");
          console.log(result.data);
          set_backSprintStatus(result.data);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.
*/
    const [backCozum, set_backCozum] = useState(null);

    useEffect(() => {
      axios
        .get("mock/cozum-merkezi?team=" + searchedTeam)  /* http://localhost:8080/mock/cozum-merkezi?team= */
        .then((result) => {
          console.log("Cozum:");
          console.log(result.data);
          set_backCozum(result.data);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.

    const [backZaman, set_backZaman] = useState(null);

    useEffect(() => {
      axios
        .get("mock/time-log?team=" + searchedTeam) /* http://localhost:8080/mock/time-log?team= */
        .then((result) => {
          console.log("Zaman:");
          console.log(result.data);
          set_backZaman(result.data);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.


    const [backEmployees, set_backEmployees] = useState([]);

    useEffect(() => {
      axios
        .get("mock/team?team=" + searchedTeam) /* http://localhost:8080/mock/team?team= */
        .then((result) => {
          console.log("Employees:");
          console.log(result.data);
          set_backEmployees(result.data);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.

    const [backTasks, set_backTasks] = useState([]);

    useEffect(() => {
      axios
        .get("mock/tasks?team=" + searchedTeam) /* http://localhost:8080/mock/tasks?team= */
        .then((result) => {
          console.log("Tasks:");
          console.log(result.data);
          set_backTasks(result.data);
          set_loading(false);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.
    /*
    var indexOfCurrentDay = backTasks === null ? 0 : findIndexOfCurrDay(backTasks.workdays);
    var totalPeriodOfSprint = backTasks === null ? 0 : backTasks.workdays?.length;

    if(indexOfCurrentDay === -1){
      indexOfCurrentDay = 5;
    }
    */

    var sumTotalDoneBack = 0.0;
    var sumTotalAssignedBack = 0.001;

    if(backTasks !== []){

      for(let k = 0; k < backTasks.length; k++){

          for(let m = 0; m < backTasks[k].subtasks.length; m++){
            sumTotalDoneBack += backTasks[k].subtasks[m].timeSpent;
            sumTotalAssignedBack += backTasks[k].subtasks[m].totalHour;
          }

      }

    }

    var sprintRatioBack = Math.round(sumTotalDoneBack * 100 / sumTotalAssignedBack);
    /*console.log(sprintRatioBack);*/

    const [backcompactDataList, set_backcompactDataList] = useState([]);

    useEffect(() => {
      axios
        .get("mock/tasks-compact?team=" + searchedTeam) /* http://localhost:8080/mock/tasks-compact?team= */
        .then((result) => {
          console.log("Compact:");
          console.log(result.data);
          set_backcompactDataList(result.data);
        })
        .catch((error) => console.log(error));
    }, [searchedTeam]); // this array was originally empty but to rerender this when the searchedTeam is selected, i had to add this.

    const [compactView, setCompactView] = useState(false); // default mode is not the compactView.

    return <div className="container-fluid">
                
                <FirstRow
                    info = {genInfo}
                    bGenInfo = {backGenInfo}
                    indexOfCurrDay = {indexOfCurrentDay}
                    period = {totalPeriodOfSprint}
                    sTeam = {searchedTeam}
                    setNewTeam = {set_searchedTeam}
                    setLoading = {set_loading}
                />
                <SecondRow 
                    ratio = { sprintRatio }
                    bRatio = {sprintRatioBack}
                    employees = {employeeArr}
                    bCozum = {backCozum}
                    bZaman = {backZaman}
                    loading = {loading}
                />
                <SecondAHalfRow
                    view = {compactView}
                    setView = {setCompactView}
                />
                <ThirdRow 
                    employees = {employeeArr}
                    bEmployees = {backEmployees}
                    tasks = {tasksArr}
                    bTasks = {backTasks}
                    currentDay = {indexOfCurrentDay}
                    totalDay = {totalPeriodOfSprint}
                    view = {compactView}
                    compactDataList = {compactDataList}
                    bCompactDataList = {backcompactDataList}
                    dayArray = {backGenInfo === null ? [] : backGenInfo.workdays}
                    loading = {loading}
                />
                
            </div>;
}

/*
import { useState, useEffect } from "react";

function App(){

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );

    }
*/
export {App};