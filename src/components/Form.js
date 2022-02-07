import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

export default class Form extends React.Component {
    render(){
        return (
            <div className="form">
                <GeneralInfo />
                <Education />
                <Experience />
            </div>
        )
    }
}

