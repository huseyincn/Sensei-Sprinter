import React from "react";
import { EksikGiren } from "./EksikGiren";
import { BsPerson } from 'react-icons/bs';
import ClipLoader from "react-spinners/ClipLoader";

function ZamanGirisi(props) {
/*
    function createEksikGiren(emp){
        if(emp.isResponsible !== 0){
            return < EksikGiren
                    key = {emp.empID}
                    empName = {emp.fName}
                    empPhoto = {emp.photo}
                    lack = {emp.isResponsible}
                />;
        }
        else{
            return null;
        }
        
    }
*/

   const numDescending = props.bZaman === null ? [] : [...props.bZaman.kisiler].sort((a, b) => b.hours - a.hours);
/*
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
*/
    function createEksikGiren(emp){
        
        return < EksikGiren
                key = {emp.name}
                empName = {emp.name}
                empPhoto = {emp.foto}
                lack = {emp.hours}
            />;
        
        
        
    }

    if(props.loading === true){
        return <div id="zamanGirisi" className="rounded" style={{padding: "0"}}>
                    <div style={{position: "relative", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <ClipLoader
                            color={"#12065C"}
                            loading={props.loading}
                            size={"4vmin"}
                        />
                    </div> 
                </div> 
    }

    return  <div id="zamanGirisi" className="rounded"> 

                <div style={{display: "flex", width: "100%", margin: "1%", alignItems: "center", justifyContent: "center"}}>

                    <h5 style={{fontSize: "1.1vmax", margin: "0px"}} >Eksik Zaman Girişleri </h5>
                    <div style={{position: "relative", marginLeft: "0.75vmax"}} >
                        <BsPerson size="1.2vmax" /*style={{position: "relative"}}*//>
                        <h6 style={{marginLeft: "1.2vmax", fontSize: "0.75vmax"}} > { props.bZaman === null ? 0 : props.bZaman.kisiler.length } </h6>
                    </div>
                    
                </div>
                
                <div className="scrollbar" id="style-3">
                    
                    {/*{props.bZaman.map(createEksikGiren)}*/}
                    {numDescending?.map(createEksikGiren)}
                    
                    
                </div>
                

            </div> ;
}

export {ZamanGirisi};