import React from "react";
import { WaitingCall } from "./WaitingCall";
import { PieChart, pieChartDefaultProps, PieChartProps } from 'react-minimal-pie-chart';
import ClipLoader from "react-spinners/ClipLoader";

function Cozum(props) {
/*
    function createWaitingCall(emp){
        return < WaitingCall
                    key = {emp.empID}
                    empName = {emp.fName}
                    empNum = {emp.calls}
                    empPhoto = {emp.photo}
                />;
    }
*/
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

    // const charAscending = props.bCozum === null ? [] : [...props.bCozum.cagrilar].sort((a, b) => a.isim - b.isim);
    const callDescending = props.bCozum === null ? [] : [...props.bCozum.cagrilar].sort((a, b) => b.cagriSayisi - a.cagriSayisi);
    
    function createWaitingCall(emp){
        return < WaitingCall
                    key = {emp.isim}
                    empName = {emp.isim}
                    empNum = {emp.cagriSayisi}
                    empPhoto = {emp.foto}
                />;
    }

    /*console.log(pieChartDefaultProps.radius);*/

    if(props.loading === true){
        return <div id="cozumMerkezi"  className= "rounded" style={{padding: "0"}}>
                    <div style={{position: "relative", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <ClipLoader
                            color={"#12065C"}
                            loading={props.loading}
                            size={"4vmin"}
                        />
                    </div> 
                </div>
    }

    return <div id="cozumMerkezi"  className= "rounded">

                <div className="container">
                    <div className="row">
                        <div className="col" style={{paddingRight: "0px", display: "flex"}} >

                            <div className="cozumLeftLeft" style={{height: "100%", width: "50%"}}> 
                                <h4 style={{textAlign: "left", paddingTop: "15%", paddingBottom: "5%", fontSize: "1.25vmax"}} >Çözüm Merkezi</h4> {/* 2.5vh */}
                                <h6 style = {{display: "flex", fontSize: "0.8vmax"}} > <div className="rounded" style = {{backgroundColor: "#8C7FE1", height: "1.05vmax", width: "1.05vmax", marginRight: "0.28vmax"}} > </div> {props.bCozum === null ? 0 : Math.round(props.bCozum.bekleyenCagri / 5)} açık kayıt  </h6> {/* font 1.6vh, height 2vh, marginRight 0.5vh */}
                                <h6 style = {{display: "flex", fontSize: "0.8vmax"}} > <div className="rounded" style = {{backgroundColor: "#CCC5F3", height: "1.05vmax", width: "1.05vmax", marginRight: "0.28vmax"}} > </div> {props.bCozum === null ? 0 : props.bCozum.bekleyenCagri} talep çözülmeyi bekliyor </h6>
                            </div> 
                               
                            <div className="cozumLeftRight" style={{height: "70%", width: "50%", marginTop: "5%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}> 
                                {/*<div className="progressBarCozum" style={{background: "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#eeeeee " + props.bCozum.acikCagri * 100.0 / (props.bCozum.bekleyenCagri + props.bCozum.acikCagri) + "%, #f8df4e 0"}}>
                                    <progress value={props.bCozum.acikCagri * 100.0 / (props.bCozum.bekleyenCagri + props.bCozum.acikCagri)} min="0" max="100" style={{visibility:"hidden", height:"0", width:"0"}}>(props.bCozum.acikCagri * 100.0 / (props.bCozum.bekleyenCagri + props.bCozum.acikCagri))%</progress>
                                </div>*/}
                                <PieChart
                                    data={[
                                        { title: 'Bekliyor', value: props.bCozum === null ? 2 : props.bCozum.bekleyenCagri, color: '#CCC5F3' },
                                        { title: 'Açık', value: props.bCozum === null ? 1 : Math.round(props.bCozum.bekleyenCagri / 5), color: '#8C7FE1' },
                                    ]}
                                    style={{
                                        fontFamily:
                                          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                        fontSize: '8px',
                                      }}
                                      radius={pieChartDefaultProps.radius - 6}
                                      lineWidth={60}
                                      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                      segmentsShift={(index) => (index === 0 ? 6 : 1)}
                                      /*boxShadow= {"0px 5px 15px rgb(151, 150, 150)"}*/
                                    />
                            </div>  
                            

                        </div>
                        <div className="col-1" id="verticalLine">
                        
                        </div>
                        <div className="col" style={{paddingLeft: "0px", paddingRight: "0.75%", paddingTop: "0.5%"}} > 

                            <h6 style={{textAlign: "center", marginBottom: "3%", fontSize: "0.8vmax"}}> Çözülmeyi Bekleyen Çağrılar </h6>

                            <div className="scrollbar" id="style-2">

                                {/*{props.bCozum === null ? [] : props.bCozum.cagrilar?.map(createWaitingCall)}*/} {/* cagrilar? */} {/* https://stackoverflow.com/questions/69080597/×-typeerror-cannot-read-properties-of-undefined-reading-map */}
                                {/*{props.bCozum === null ? [] : charAscending.map(createWaitingCall)}*/}
                                {props.bCozum === null ? [] : callDescending.map(createWaitingCall)}
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
}

export {Cozum};