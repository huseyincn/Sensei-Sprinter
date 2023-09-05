import React from "react";
import {Employee} from './Employee.jsx';

function EmployeesSection(props) {
/*
    function createEmployee(emp){
        return <Employee
                    selectedID = {props.selectedID}
                    setID = {props.setID}
                    key = {emp.empID}
                    id = {emp.empID}
                    fName = {emp.fName}
                    sName = {emp.sName}
                    photo = {emp.photo}
                />;
    }
*/
    function createEmployee(emp){
        return <Employee
                    selectedID = {props.selectedID}
                    setID = {props.setID}
                    key = {emp.sicil} /* empID */
                    id = {emp.sicil}
                    fullName = {emp.isim}
                    photo = {emp.foto}
                />;
    }


    return <div id="employeesBar">
                <div className="scrollbar" id="style-1">
			        {/*<div className="force-overflow">*/}
                        
                        {props.bEmployees?.map(createEmployee)}

                    {/*</div>*/}
                </div>

            </div>;
}

export {EmployeesSection};