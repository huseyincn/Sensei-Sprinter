function GeneralInfo(teamName, sprintName, currDay, totalDay){
    this.teamName = teamName;
    this.sprintName = sprintName;
    this.currDay = currDay;
    this.totalDay = totalDay;
}

var genInfo = new GeneralInfo("XFactor", "Sprint5: Locked and Loaded", "6", "15");

export {GeneralInfo, genInfo};

/* -------------- */
/*
function TotalRatio(done, total){
    this.done = done;
    this.total = total;
}

var totalRatio = new TotalRatio("684", "960");

export {TotalRatio, totalRatio};
*/
/* -------------- */

function Employee(empID, fName, sName, photo, calls, isResponsible){
    this.empID = empID;
    this.fName = fName;
    this.sName = sName;
    this.photo = photo;
    this.calls = calls;
    this.isResponsible = isResponsible;
}

var empIDCounter = 1;

var employeeArr = [
    
    new Employee(empIDCounter++, "Atınç Mert", "Uz", "https://i.pravatar.cc/150?img=11", 2, 8),
    new Employee(empIDCounter++, "Batuhan", "Demir", "https://i.pravatar.cc/150?img=14", 4, 0),
    new Employee(empIDCounter++, "Can Deniz", "Önem", "https://i.pravatar.cc/150?img=12", 5, 16),
    new Employee(empIDCounter++, "Çağatay", "Molkoç", "https://i.pravatar.cc/150?img=15", 1, 16),
    new Employee(empIDCounter++, "Doğanay Öz", "Örüm", "https://i.pravatar.cc/150?img=28", 3, 40),
    new Employee(empIDCounter++, "Fatih", "Çetin", "https://i.pravatar.cc/150?img=53", 2, 24),
    new Employee(empIDCounter++, "Funda", "Bayraktar", "https://i.pravatar.cc/150?img=5", 5, 8),
    new Employee(empIDCounter++, "Gamze", "Gönül", "https://i.pravatar.cc/150?img=24", 3, 16),
    new Employee(empIDCounter++, "Murat", "Arslan", "https://i.pravatar.cc/150?img=60", 6, 16),
    new Employee(empIDCounter++, "Murat", "Yıldız", "https://i.pravatar.cc/150?img=8", 2, 24),
    new Employee(empIDCounter++, "Pınar", "Sırma", "https://i.pravatar.cc/150?img=20", 1, 32),
    new Employee(empIDCounter++, "Sarp", "Ok", "https://i.pravatar.cc/150?img=52", 3, 8),
    new Employee(empIDCounter++, "Sema", "Kaya", "https://i.pravatar.cc/150?img=47", 7, 16),
    new Employee(empIDCounter++, "Serenay", "Ay", "https://i.pravatar.cc/150?img=32", 1, 24),
    new Employee(empIDCounter++, "Tarık Halim", "Kutludere", "https://i.pravatar.cc/150?img=13", 2, 16),
    new Employee(empIDCounter++, "Tuğçe Naz", "Yaman", "https://i.pravatar.cc/150?img=27", 1, 0)
    
];

export {Employee, employeeArr};

/* -------------- */

var taskIDCounter = 0;
var subTaskIDCounter = 1;

function Task(taskID, taskDescription, subTaskList){
    this.taskID = taskID;
    this.taskDescription = taskDescription;
    this.subTaskList = subTaskList;

    this.makeAssignment = function(emp, desc, assignedHour, doneHour, stateOfTask, lastLoggedTime, sTime, eTime){
        this.subTaskList.push(new SubTask(this.taskID + (subTaskIDCounter++), emp, desc, this, assignedHour, doneHour, stateOfTask, lastLoggedTime, sTime, eTime));
    };

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
        var sum2 = 0.001;

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
            
            if(this.subTaskList[i].assignee === emp ){
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

function SubTask(taskID, assignee, taskDescription, parentTask, assignedHour, doneHour, stateOfTask, lastLoggedTime = null, startDate = 3, endDate = 4){ /* stateOfTask: 0->to-do, 1->parking, 2->in-progress, 3->done */
    this.taskID = taskID;
    this.assignee = assignee;
    this.taskDescription = taskDescription;
    this.parentTask = parentTask;
    this.assignedHour = assignedHour;
    this.doneHour = doneHour;
    this.stateOfTask = stateOfTask;
    this.lastLoggedTime = lastLoggedTime;
    this.startDate = startDate;
    this.endDate = endDate;
}

var tasksArr = [];

for(let j = 0; j < 30; j++){
    tasksArr.push(new Task(1000 + 100 * j, "Task Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", []));
}

tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnyyyynnnnnnnn", 16, 16, 3, null, 1, 3);
tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 15, 15, 3, null, 4, 5);
tasksArr[0].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 0, 0, null, 8, 11);
tasksArr[0].makeAssignment(employeeArr[5], "Sub-Task Description", 10, 10, 3, null, 1, 3);
tasksArr[0].makeAssignment(employeeArr[5], "Sub-Task Description", 28, 25, 1, null, 2, 5);
tasksArr[0].makeAssignment(employeeArr[7], "Sub-Task Description", 24, 24, 3, null, 1, 3);
tasksArr[0].makeAssignment(employeeArr[8], "Sub-Task Description", 6, 6, 3, null, 4, 7);
tasksArr[0].makeAssignment(employeeArr[10], "Sub-Task Description", 20, 7, 1, null, 8, 10);
tasksArr[0].makeAssignment(employeeArr[14], "Sub-Task Description", 64, 36, 2, null, 2, 7);

subTaskIDCounter = 1;

tasksArr[1].makeAssignment(employeeArr[1], "Sub-Task Description", 9, 8, 1, null, 1, 4);
tasksArr[1].makeAssignment(employeeArr[2], "Sub-Task Description", 18, 18, 3, null, 1, 3);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 2, 2, 3, null, 1, 1);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 8, 8, 3, null, 1, 3);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 4, 4, 3, null, 2, 2);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 30, 0, 0, null, 8, 12);
tasksArr[1].makeAssignment(employeeArr[3], "Sub-Task Description", 20, 18, 2, null, 4, 7);
tasksArr[1].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 14, 3, null, 1, 3);


subTaskIDCounter = 1;


tasksArr[2].makeAssignment(employeeArr[4], "Sub-Task Description", 12, 8, 1, null, 1, 2);

subTaskIDCounter = 1;

tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 15, 4, 1, null);
tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 6, 3, 2, null);
tasksArr[3].makeAssignment(employeeArr[9], "Sub-Task Description", 8, 0, 0, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 18, 16, 2, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 10, 10, 3, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 18, 1, null);
tasksArr[3].makeAssignment(employeeArr[12], "Sub-Task Description", 2, 2, 3, null);

subTaskIDCounter = 1;

tasksArr[4].makeAssignment(employeeArr[1], "Sub-Task Description", 12, 10, 2, null, 2, 5);
tasksArr[4].makeAssignment(employeeArr[2], "Sub-Task Description", 12, 12, 3, null, 2, 4);
tasksArr[4].makeAssignment(employeeArr[4], "Sub-Task Description", 5, 0, 0, null, 2, 3);
tasksArr[4].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 2, null,3, 5);
tasksArr[4].makeAssignment(employeeArr[10], "Sub-Task Description", 2, 2, 3, null);
tasksArr[4].makeAssignment(employeeArr[11], "Sub-Task Description", 20, 14, 2, null);
tasksArr[4].makeAssignment(employeeArr[15], "Sub-Task Description", 8, 0, 0, null);
tasksArr[4].makeAssignment(employeeArr[15], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[5].makeAssignment(employeeArr[11], "Sub-Task Description", 30, 22, 2, null);
tasksArr[5].makeAssignment(employeeArr[11], "Sub-Task Description", 24, 6, 2, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 9, 0, 0, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 6, 1, null);
tasksArr[5].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 12, 3, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 20, 16, 2, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 0, 0, null);
tasksArr[5].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[6].makeAssignment(employeeArr[3], "Sub-Task Description", 16, 12, 2, null, 5, 7);
tasksArr[6].makeAssignment(employeeArr[3], "Sub-Task Description", 15, 6, 2, null, 6, 9);
tasksArr[6].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 8, 3, null, 3, 4);
tasksArr[6].makeAssignment(employeeArr[4], "Sub-Task Description", 12, 9, 2, null, 4, 6);
tasksArr[6].makeAssignment(employeeArr[5], "Sub-Task Description", 10, 0, 0, null, 6, 7);
tasksArr[6].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 5, 2, null,4, 5);
tasksArr[6].makeAssignment(employeeArr[11], "Sub-Task Description", 24, 16, 2, null);
tasksArr[6].makeAssignment(employeeArr[13], "Sub-Task Description", 6, 6, 3, null);
tasksArr[6].makeAssignment(employeeArr[13], "Sub-Task Description", 20, 7, 1, null);
tasksArr[6].makeAssignment(employeeArr[15], "Sub-Task Description", 64, 36, 2, null);

subTaskIDCounter = 1;

tasksArr[7].makeAssignment(employeeArr[1], "Sub-Task Description", 9, 4, 1, null, 3, 6);
tasksArr[7].makeAssignment(employeeArr[1], "Sub-Task Description", 4, 4, 3, null);
tasksArr[7].makeAssignment(employeeArr[2], "Sub-Task Description", 2, 2, 3, null, 4, 5);
tasksArr[7].makeAssignment(employeeArr[2], "Sub-Task Description", 8, 8, 3, null, 4, 6);


subTaskIDCounter = 1;


tasksArr[8].makeAssignment(employeeArr[14], "Sub-Task Description", 12, 8, 1, null);

subTaskIDCounter = 1;

tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 15, 4, 2, null, 5, 6);
tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 6, 3, 1, null, 7, 8);
tasksArr[9].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 0, 0, null, 8, 9);
tasksArr[9].makeAssignment(employeeArr[7], "Sub-Task Description", 18, 16, 2, null, 4, 6);
tasksArr[9].makeAssignment(employeeArr[7], "Sub-Task Description", 10, 10, 3, null, 4, 5);
tasksArr[9].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 18, 1, null);
tasksArr[9].makeAssignment(employeeArr[12], "Sub-Task Description", 2, 2, 3, null);

subTaskIDCounter = 1;

tasksArr[10].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 6, 2, null, 5, 6);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 6, 6, 3, null, 4, 5);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 5, 0, 0, null, 11, 12);
tasksArr[10].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 1, null, 4, 6);
tasksArr[10].makeAssignment(employeeArr[9], "Sub-Task Description", 2, 2, 3, null);
tasksArr[10].makeAssignment(employeeArr[9], "Sub-Task Description", 20, 14, 2, null);
tasksArr[10].makeAssignment(employeeArr[10], "Sub-Task Description", 8, 0, 0, null);
tasksArr[10].makeAssignment(employeeArr[10], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[11].makeAssignment(employeeArr[7], "Sub-Task Description", 30, 22, 2, null, 6, 9);
tasksArr[11].makeAssignment(employeeArr[8], "Sub-Task Description", 24, 6, 2, null);
tasksArr[11].makeAssignment(employeeArr[8], "Sub-Task Description", 9, 0, 0, null);
tasksArr[11].makeAssignment(employeeArr[10], "Sub-Task Description", 12, 6, 1, null);
tasksArr[11].makeAssignment(employeeArr[11], "Sub-Task Description", 12, 12, 3, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 20, 16, 2, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 0, 0, null);
tasksArr[11].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[12].makeAssignment(employeeArr[0], "Sub-Task Description", 16, 12, 2, null, 6, 8);
tasksArr[12].makeAssignment(employeeArr[2], "Sub-Task Description", 15, 6, 2, null, 6, 9);
tasksArr[12].makeAssignment(employeeArr[4], "Sub-Task Description", 8, 8, 3, null, 10 , 11);
tasksArr[12].makeAssignment(employeeArr[6], "Sub-Task Description", 12, 0, 0, null,7, 9);
tasksArr[12].makeAssignment(employeeArr[8], "Sub-Task Description", 10, 0, 0, null);
tasksArr[12].makeAssignment(employeeArr[10], "Sub-Task Description", 8, 5, 1, null);
tasksArr[12].makeAssignment(employeeArr[12], "Sub-Task Description", 24, 16, 2, null);
tasksArr[12].makeAssignment(employeeArr[14], "Sub-Task Description", 6, 6, 3, null);

subTaskIDCounter = 1;

tasksArr[13].makeAssignment(employeeArr[0], "Sub-Task Description", 9, 4, 1, null, 6, 10);
tasksArr[13].makeAssignment(employeeArr[1], "Sub-Task Description", 4, 4, 3, null, 4, 4);
tasksArr[13].makeAssignment(employeeArr[2], "Sub-Task Description", 12, 0, 0, null, 8, 10);
tasksArr[13].makeAssignment(employeeArr[2], "Sub-Task Description", 8, 0, 0, null, 10, 12);


subTaskIDCounter = 1;


tasksArr[14].makeAssignment(employeeArr[13], "Sub-Task Description", 12, 8, 1, null);

subTaskIDCounter = 1;

tasksArr[15].makeAssignment(employeeArr[1], "Sub-Task Description", 30, 22, 2, null, 5 ,9);
tasksArr[15].makeAssignment(employeeArr[3], "Sub-Task Description", 6, 0, 0, null, 10, 11);
tasksArr[15].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 0, 0, null, 10, 12);
tasksArr[15].makeAssignment(employeeArr[5], "Sub-Task Description", 18, 16, 2, null, 6, 8);
tasksArr[15].makeAssignment(employeeArr[7], "Sub-Task Description", 10, 10, 3, null, 9, 10);
tasksArr[15].makeAssignment(employeeArr[11], "Sub-Task Description", 20, 18, 1, null);
tasksArr[15].makeAssignment(employeeArr[13], "Sub-Task Description", 2, 2, 3, null);
tasksArr[15].makeAssignment(employeeArr[15], "Sub-Task Description", 6, 2, 1, null);

subTaskIDCounter = 1;

tasksArr[16].makeAssignment(employeeArr[0], "Sub-Task Description", 12, 2, 2, null, 8, 10);
tasksArr[16].makeAssignment(employeeArr[3], "Sub-Task Description", 6, 0, 0, null, 11, 12);
tasksArr[16].makeAssignment(employeeArr[4], "Sub-Task Description", 5, 0, 0, null, 11, 12);
tasksArr[16].makeAssignment(employeeArr[6], "Sub-Task Description", 14, 11, 1, null, 9, 12);
tasksArr[16].makeAssignment(employeeArr[8], "Sub-Task Description", 2, 2, 3, null);
tasksArr[16].makeAssignment(employeeArr[9], "Sub-Task Description", 20, 14, 2, null);
tasksArr[16].makeAssignment(employeeArr[14], "Sub-Task Description", 8, 0, 0, null);
tasksArr[16].makeAssignment(employeeArr[15], "Sub-Task Description", 14, 14, 3, null);

subTaskIDCounter = 1;

tasksArr[17].makeAssignment(employeeArr[1], "Sub-Task Description", 8, 0, 0, null, 7, 10);
tasksArr[17].makeAssignment(employeeArr[1], "Sub-Task Description", 32, 0, 0, null, 8, 12);
tasksArr[17].makeAssignment(employeeArr[7], "Sub-Task Description", 9, 0, 0, null, 10, 12);
tasksArr[17].makeAssignment(employeeArr[7], "Sub-Task Description", 12, 6, 1, null, 10, 12);
tasksArr[17].makeAssignment(employeeArr[11], "Sub-Task Description", 12, 12, 3, null);
tasksArr[17].makeAssignment(employeeArr[12], "Sub-Task Description", 20, 16, 2, null);
tasksArr[17].makeAssignment(employeeArr[13], "Sub-Task Description", 6, 0, 0, null);
tasksArr[17].makeAssignment(employeeArr[14], "Sub-Task Description", 10, 10, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

tasksArr[18].makeAssignment(employeeArr[5], "Sub-Task Description", 30, 22, 2, null, 7, 11);
tasksArr[18].makeAssignment(employeeArr[5], "Sub-Task Description", 8, 6, 2, null, 9 , 10);
tasksArr[18].makeAssignment(employeeArr[8], "Sub-Task Description", 9, 0, 0, null);
tasksArr[18].makeAssignment(employeeArr[9], "Sub-Task Description", 12, 6, 1, null);
tasksArr[18].makeAssignment(employeeArr[9], "Sub-Task Description", 12, 12, 3, null);

subTaskIDCounter = 1;

/*----------------------------- */

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

/*----------------------------- */


function compactData(emp, subtasks){ 
    this.emp = emp;
    this.subtasks = subtasks;
    
}

var compactDataList = [

    new compactData(employeeArr[0], [new SubTask(1000, employeeArr[0], "Subtask Descriptionnnnnnnnnnnnnnnnnnnnnnnn", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 9), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[1], [new SubTask(1000, employeeArr[1], "Subtask Description", 0, 30, 24, null, null, 2, 4), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 14, null, null, 6, 7), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 0, null, null, 9, 11), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 16, 0, null, null, 13, 15)]),
    new compactData(employeeArr[2], [new SubTask(1000, employeeArr[2], "Subtask Description", 0, 10, 10, null, null, 1, 2), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 2, null, null, 3, 4), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 5, 6), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 80, 32, null, null, 7, 15)]),
    new compactData(employeeArr[3], [new SubTask(1000, employeeArr[3], "Subtask Description", 0, 8, 8, null, null, 1, 1), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 24, 24, null, null, 3, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 7, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[4], [new SubTask(1000, employeeArr[4], "Subtask Description", 0, 15, 15, null, null, 1, 2), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 8, 8, null, null, 4, 4), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 15, 0, null, null, 6, 8), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 0, null, null, 11, 12), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[5], [new SubTask(1000, employeeArr[5], "Subtask Description", 0, 6, 6, null, null, 1, 1), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 8, null, null, 3, 4), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 8, null, null, 6, 7), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 10, 12), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[6], [new SubTask(1000, employeeArr[6], "Subtask Description", 0, 15, 15, null, null, 1, 2), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 12, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[7], [new SubTask(1000, employeeArr[7], "Subtask Description", 0, 15, 0, null, null, 2, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[8], [new SubTask(1000, employeeArr[8], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[9], [new SubTask(1000, employeeArr[9], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[10], [new SubTask(1000, employeeArr[10], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[11], [new SubTask(1000, employeeArr[11], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[12], [new SubTask(1000, employeeArr[12], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[13], [new SubTask(1000, employeeArr[13], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[14], [new SubTask(1000, employeeArr[14], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)]),
    new compactData(employeeArr[15], [new SubTask(1000, employeeArr[15], "Subtask Description", 0, 15, 15, null, null, 1, 3), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 10, 10, null, null, 4, 5), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 30, 15, null, null, 6, 10), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 20, 0, null, null, 11, 13), new SubTask(1000, employeeArr[0], "Subtask Description", 0, 12, 0, null, null, 14, 15)])

];


export{compactData, compactDataList};