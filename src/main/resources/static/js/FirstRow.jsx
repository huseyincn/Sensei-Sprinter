import React from 'react';
import { FiSearch } from 'react-icons/fi';
import logo from './minimum.png'

function FirstRow(props){

    function handleSearchClick(event){

        var written = document.getElementById("searchTerm").value;
        document.getElementById("searchTerm").value = "";
        props.setNewTeam(written);

        if(!(props.sTeam === written)){
            props.setLoading(true);
        }

    }

    function handleLogoClick(event){
        window.location.reload();
    }

    return <div className="row firstRow" style={{padding: "0%"}}>
        
                <div className="col-5" style={{padding: "0%"}} >
                    <div id="teamName">
{/*
                    <button type="submit" className="searchButton">
                        <FiSearch color="rgb(204, 197, 243)" size="1.5em"/>
                    </button>
*/}                 
                    <div className='rounded' style={{display: "flex", position: "relative"/*, backgroundColor: "#D8D3F6"*/, backgroundColor: "white", alignItems: "center", justifyContent: "center", height: "2.5vmin", width: "4vmin", marginTop: "0.5vmin"}}> {/* height: "25px", width: "40px", marginTop: "4px" */}
                        <FiSearch color="#12065C" size="2.5vmin" style={{position: "relative"}} onClick={handleSearchClick}/>
                    </div>

                    <input id="searchTerm" type="text" placeholder={ props.bGenInfo === null ? "BoardName | Sprint 1 - SprintName" : props.bGenInfo.boardName + " | Sprint " + props.bGenInfo.sprintName }/>
                    {/*
                    <h3 style = {{margin: "0%"}}> {props.bGenInfo === null ? "BoardName" : props.bGenInfo.boardName} </h3>
                    <h2 style = {{margin: "0%", paddingLeft: "1%", paddingRight: "1%", paddingBottom: "0.5%", paddingTop: "0px", display: "flex", textAlign: "center", justifyContent: "center" , alignItems: "center"}}> | </h2>
                    <h3 style = {{margin: "0%"}}> {"Sprint " + (props.bGenInfo === null ? "SprintName" : props.bGenInfo.sprintName)} </h3>
                    */}
                    </div>
                </div>

                <div className="col-2" style={{padding: "0%"}}>
                    <div id="appLogo">
                        <img src={logo} alt="appLogo" style={{height: "5vmin", width: "7.952vmin", backgroundColor: "#12065C"}} onClick={handleLogoClick}/> {/*132 / 83 = 1.59 */}
                    </div>
                </div>

                

                <div className="col-5" style={{padding: "0%"}} >
                    <div id="relevantTime">
                            <h3 style={{margin: "0%", fontSize: "2.5vmin"}}> {props.indexOfCurrDay + 1}.gün | </h3>
                            <p style={{margin: "0px", paddingLeft: "1vmin", paddingTop: "0.375vmin", fontSize: "1.75vmin"}}> Sprintin bitmesine son {props.period - props.indexOfCurrDay - 1} gün </p>
                    </div>
                </div>

            </div>;
}

export {FirstRow};