/*
import myData from './response.json'

function displayJson(){
    console.log(myData);
}


export {displayJson}
*/
/* -------------- */
/*
function GeneralInfo(teamName = "XFactor", sprintName = "Sprint5: Locked and Loaded", currDay = "7", totalDay = "4"){
    this.teamName = teamName;
    this.sprintName = sprintName;
    this.currDay = currDay;
    this.totalDay = totalDay;
}

var genInfo = new GeneralInfo();

export {GeneralInfo, genInfo};
*/
/* -------------- */
/*
var avatarImages = [
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=14",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=15",
    "https://i.pravatar.cc/150?img=28",
    "https://i.pravatar.cc/150?img=53",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=24",
    "https://i.pravatar.cc/150?img=60",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=20",
    "https://i.pravatar.cc/150?img=52",
    "https://i.pravatar.cc/150?img=47",
    "https://i.pravatar.cc/150?img=32",
    "https://i.pravatar.cc/150?img=13",
    "https://i.pravatar.cc/150?img=27",
];

function Employee(empID, fName, sName, photo, calls = 3, isResponsible = false){
    this.empID = empID;
    this.fName = fName;
    this.sName = sName;
    this.photo = photo;
    this.calls = calls;
    this.isResponsible = isResponsible;
}

var employeeArr = [];

function parseName(fullName){
    
    var result = [];

    var index = -1;

    for(let i = 0; i < fullName.length; i++){
        if(fullName[i] === " "){
            index = i;
        }
    }

    if(index === -1){
        result.push(fullName);
        result.push("");
    }
    else{
        result.push(fullName.substring(0, index));
        result.push(fullName.substring(index + 1));
    }

    return result;

}

function createEmployeeList(){

    var upper = avatarImages.length;

    for(let i = 0; i < myData.Calisanlar.length; i++){

        var parsedName = parseName(myData.Calisanlar[i].TamAd);

        if(i >= upper){
            employeeArr.push(new Employee( myData.Calisanlar[i].Sicil, parsedName[0], parsedName[1], avatarImages[0]));
        }
        else{
            employeeArr.push(new Employee( myData.Calisanlar[i].Sicil, parsedName[0], parsedName[1], avatarImages[i]));
        }
    }

}

createEmployeeList();

export {Employee, employeeArr};
*/
/* -------------- */
/*
function Task(taskID, taskDescription, subTaskList){
    this.taskID = taskID;
    this.taskDescription = taskDescription;
    this.subTaskList = subTaskList;
*/
    /*
    this.makeAssignment = function(emp, desc, assignedHour, doneHour, stateOfTask, lastLoggedTime){
        this.subTaskList.push(new SubTask(this.taskID + (subTaskIDCounter++), emp, desc, this, assignedHour, doneHour, stateOfTask, lastLoggedTime));
    };
    */
   /*
    this.isGivenEmployeeAssigned = function (emp){

        for(let i = 0; i < this.subTaskList.length; i++){
            if(this.subTaskList[i].assignee === emp){
                return true;
            }
        }
        return false;
    };

    this.progress = function(){
        var sum1 = 0.0;
        var sum2 = 0.0001;

        this.subTaskList.forEach(element => {
            sum1 += element.doneHour;
            sum2 += element.assignedHour;
        });

        return Math.round(100 * sum1 / sum2);
    };

    this.findSubTasksOfGivenEmployee = function(emp){

        var result = [[], [], [], []];

        for(let i = 0; i < this.subTaskList.length; i++){
            if(subTaskList[i].assignee === emp ){

                if(subTaskList[i].stateOfTask === 0){
                    result[0].push(subTaskList[i]);
                }
                else if(subTaskList[i].stateOfTask === 1){
                    result[1].push(subTaskList[i]);
                }
                else if(subTaskList[i].stateOfTask === 2){
                    result[2].push(subTaskList[i]);
                }
                else{
                    result[3].push(subTaskList[i]);
                }

            }
        }

        return result;

    };

    this.findResponsibilityRatio = function(emp){

        var count = 0;

        for(let i = 0; i < this.subTaskList.length; i++){
            
            if(subTaskList[i].assignee === emp ){
                count++;
            }
        }

        return [count, this.subTaskList.length];

    };

    this.findOtherMembers = function(emp){

        var result = [];
        
        for(let i = 0; i < this.subTaskList.length; i++){
            
            if(subTaskList[i].assignee !== emp ){
                if(result.includes(subTaskList[i].assignee) === false){
                    result.push(subTaskList[i].assignee);
                }
                
            }
        }
        return result;
    };

}


function SubTask(taskID, assignee, taskDescription, parentTask, assignedHour, doneHour, stateOfTask, lastLoggedTime = null){ 
    this.taskID = taskID;
    this.assignee = assignee;
    this.taskDescription = taskDescription;
    this.parentTask = parentTask;
    this.assignedHour = assignedHour;
    this.doneHour = doneHour;
    this.stateOfTask = stateOfTask;
    this.lastLoggedTime = lastLoggedTime;
}

var tasksArr = [];

function findEmpGivenId(id){

    for(let i = 0; i < employeeArr.length; i++){
        if(employeeArr[i].empID === id){
            return employeeArr[i];
        }
    }
    return null;
}

function createTaskArrList(){

    for(let i = 0; i < myData.Tasklar.length; i++){

        tasksArr.push(new Task(myData.Tasklar[i].key, myData.Tasklar[i].summary, []));

        for(let j = 0; j < myData.Tasklar[i].subtasks.length; j++){
            
            let rand1 = Math.floor(Math.random() * 64) + 1;

            if(myData.Tasklar[i].subtasks[j].status[0] === 'T' || myData.Tasklar[i].subtasks[j].status[0] === 't'){
                tasksArr[i].subTaskList.push(new SubTask(myData.Tasklar[i].subtasks[j].key, findEmpGivenId(myData.Tasklar[i].subtasks[j].assignee), myData.Tasklar[i].subtasks[j].summary, tasksArr[i], rand1, 0, 0));
            }
            else if(myData.Tasklar[i].subtasks[j].status[0] === 'O' || myData.Tasklar[i].subtasks[j].status[0] === 'o'){
                let rand2 = Math.floor(Math.random() * rand1);
                tasksArr[i].subTaskList.push(new SubTask(myData.Tasklar[i].subtasks[j].key, findEmpGivenId(myData.Tasklar[i].subtasks[j].assignee), myData.Tasklar[i].subtasks[j].summary, tasksArr[i], rand1, rand2, 1));
            }
            else if(myData.Tasklar[i].subtasks[j].status[0] === 'I' || myData.Tasklar[i].subtasks[j].status[0] === 'i'){
                let rand2 = Math.floor(Math.random() * rand1);
                tasksArr[i].subTaskList.push(new SubTask(myData.Tasklar[i].subtasks[j].key, findEmpGivenId(myData.Tasklar[i].subtasks[j].assignee), myData.Tasklar[i].subtasks[j].summary, tasksArr[i], rand1, rand2, 2));
            }
            else if(myData.Tasklar[i].subtasks[j].status[0] === 'D' || myData.Tasklar[i].subtasks[j].status[0] === 'd'){
                tasksArr[i].subTaskList.push(new SubTask(myData.Tasklar[i].subtasks[j].key, findEmpGivenId(myData.Tasklar[i].subtasks[j].assignee), myData.Tasklar[i].subtasks[j].summary, tasksArr[i], rand1, rand1, 3));
            }

            
        }
        
    }

}

createTaskArrList();

var sumTotalDone = 0.0;
var sumTotalAssigned = 0.001;

for(let k = 0; k < tasksArr.length; k++){

    for(let m = 0; m < tasksArr[k].subTaskList.length; m++){
        sumTotalDone += tasksArr[k].subTaskList[m].doneHour;
        sumTotalAssigned += tasksArr[k].subTaskList[m].assignedHour;
    }

}

var sprintRatio = Math.round(sumTotalDone * 100 / sumTotalAssigned);

export{Task, tasksArr, sprintRatio};

*/

   