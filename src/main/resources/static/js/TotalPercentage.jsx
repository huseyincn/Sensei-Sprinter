import React from "react";
import { CircularProgressBar } from "./CircularProgressBar";
import ClipLoader from "react-spinners/ClipLoader";

function TotalPercentage(props) {

    if(props.loading === true){
        return <div id="totalPercentage" className="rounded" style={{padding: "0"}}>
                    <div style={{position: "relative", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <ClipLoader
                            color={"#12065C"}
                            loading={props.loading}
                            size={"4vmin"}
                        />
                    </div> 
                </div>
    }

    return <div id="totalPercentage" className="rounded">
                 
                <CircularProgressBar
                    ratio = {props.ratio}
                    bRatio= {props.bRatio}
                />

                <div style={{marginLeft: "0.52vmax"}}> {/* 1vh */}

                <h4 style={{paddingTop: "15%", paddingBottom: "8%", fontSize: "1.25vmax"}}> Sprint Status </h4>

                    <div style={{display: "flex"}}>

                        <div className="rounded" style={{height: "1.05vmax", width: "1.05vmax", marginRight: "0.28vmax",  backgroundColor: "#7164BE"}} ></div>
                        <h6 style={{fontSize: "0.8vmax"}} > girilen saatler </h6>

                    </div>

                    <div style={{display: "flex"}}>

                        <div className="rounded" style={{height: "1.05vmax", width: "1.05vmax", marginRight: "0.28vmax", backgroundColor: "#DAE8EA"}} ></div>
                        <h6 style={{fontSize: "0.8vmax"}} > kalan saatler </h6>

                    </div>

                </div>

                
                
            </div>;
}

export {TotalPercentage};