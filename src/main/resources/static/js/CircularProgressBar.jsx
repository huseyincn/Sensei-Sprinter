import React from "react";

function CircularProgressBar(props) {

    return <div className="totalProg">

                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            {props.bRatio + "%"}
                        </div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="6.3vmax" height="6.3vmax"> {/* 160 */} {/* 12.5vh */}
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#9262DF" />
                            <stop offset="100%" stopColor="#281790" />
                            </linearGradient>
                        </defs>
                        <circle cx="3.15vmax" cy="3.15vmax" r="2.62vmax" strokeLinecap="round" strokeDashoffset={((2 * 3.14 * 2.62) - ((2 * 3.14 * 2.62) * 0.01 * props.bRatio)) + "vmax"} strokeDasharray={2 * 3.14 * 2.62 + "vmax"}/> {/* 2 pi r=50 */}
                </svg>

            </div>;
}
/*#4b33e4
#5b05fc*/

/*
#ad84fa
#4b33e4
*/
export {CircularProgressBar};