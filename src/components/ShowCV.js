import React from "react";

export default function ShowCV(props) {
    return (
        <div className="show-cv">
            <p>{props.personalInfo.name}</p>
            <p>{props.personalInfo.location}</p>
            <p>{props.personalInfo.email}</p>
            <p>{props.personalInfo.phone}</p>
        </div>
    )
}