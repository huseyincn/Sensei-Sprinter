import React from "react";
import { CompactSubTask } from "./CompactSubTask";

function CompactData(props) {

   /*var prevDay = 0;*/
/*
   function update_prevDay(val){
      
      prevDay = val;
      console.log(prevDay);
      return null;
  }

   function createSubtaskCompact(subtask){

      return <CompactSubTask
               key = {subtask.taskID}
               subTask = {subtask}
               currentDay = {props.currentDay}
               prevDay = {prevDay}
               update_prevDay = {update_prevDay}
            />

   }
*/

   function findEmployeeCompact(){

      for(let i = 0; i < props.bEmployees.length; i++){

         if(props.element.sicilNo === props.bEmployees[i].sicil){
            return props.bEmployees[i];
         }

      }

      return {sicil: "U000017", isim: "Kerem Kul", foto: "https://media.licdn.com/dms/image/C5103AQHAH0sbkdg9TQ/profile-displayphoto-shrink_200_200/0/1517543184551?e=1698278400&v=beta&t=yCaB5DUcofP41GIT4-Afg6V0wmZE5Mf7snvC0UPpDvY"};

   }

/*
   function createSubtasksCompact(){

      var res = [];

      var prevDay = 0;

      for(let i = 0; i < props.element.subtasks.length; i++){

         res.push(<CompactSubTask
                     key = {props.element.subtasks[i].taskID}
                     subTask = {props.element.subtasks[i]}
                     currentDay = {props.currentDay}
                     prevDay = {prevDay}
                  />)

         prevDay = props.element.subtasks[i].endDate;

      }

      return res;

   }
*/

   

   function createSubtasksCompact(){

      /*console.log(props.element.subtasks);*/

      const numAscending = [...props.element.subtasks].sort((a, b) => a.startDate - b.startDate);
      /*console.log(numAscending);*/
      var res = [];

      var prevDay = 0;

      for(let i = 0; i < numAscending.length; i++){

         res.push(<CompactSubTask
                     key = {numAscending[i].id}
                     subTask = {numAscending[i]}
                     currentDay = {props.currentDay}
                     prevDay = {prevDay}
                  />)

         prevDay = numAscending[i].endDate;

      }

      return res;

   }

    return <div className= "compactData rounded" style={{backgroundColor: props.isBackgroundDark ? "#F6F6F6" : "white"}}>
                 
                 <div className="compactEmployee rounded" style={{backgroundColor: props.isBackgroundDark ? "#F6F6F6" : "white"}} >

                    <img src={findEmployeeCompact().foto} alt="avatar" />
                    <h6> {findEmployeeCompact().isim} </h6>

                 </div>

                 {/*{props.element.subtasks.map(createSubtaskCompact)}*/}

                 {createSubtasksCompact()}
                
            </div>;  
}

/* "#e4e4e4" : "rgb(248, 248, 248)" */

export {CompactData};