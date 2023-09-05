import React from 'react';
import { TotalPercentage } from './TotalPercentage';
import { Cozum } from './Cozum';
import { ZamanGirisi } from './ZamanGirisi';


function SecondRow(props){
    return <div className="row secondRow" >
        
                <div className="col-2 " >
                    <TotalPercentage
                        ratio = {props.ratio}
                        bRatio = {props.bRatio}
                        loading = {props.loading}
                    />
                </div>
                <div className="col-7" >
                    <Cozum
                        employees = {props.employees}
                        bCozum = {props.bCozum}
                        loading = {props.loading}
                    />
                    
                </div>
                <div className="col-3" >

                    <ZamanGirisi
                        employees = {props.employees}
                        bZaman = {props.bZaman}
                        loading = {props.loading}
                    />
                    
                </div>
            </div>;
}

export {SecondRow};