import React from 'react';
import Switch from "react-switch";

function SecondAHalfRow(props){
    return <div className="row secondAHalfRow">
        
                <div className="col" style={{display: "flex", alignItems: "center"}}>
                
                    <Switch
                        checked={props.view}
                        onChange={props.setView}
                        onColor="#d3cdf8"
                        onHandleColor="#4b33e4"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={12}
                        width={35}
                    />

                    <h6 style={{margin: "0px", marginLeft: "0.3vmax", fontSize: "0.65vmax", opacity: props.view ? "1" : "0.3", color: props.view ? "#4b33e4" : "black"}}> Ekip Görünümü </h6>

                </div>
                
            </div>;
}

export {SecondAHalfRow};