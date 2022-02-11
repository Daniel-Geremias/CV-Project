import React from "react";
import { nanoid } from "nanoid"

export default function PreviewCV(props) {

    const personalInfo = props.CV.personalInfo
    const education = props.CV.educationList
    const experience = props.CV.experienceList

    function showPersonalInfo() {
        return (
            <div className="personal-info">
                <h2>{personalInfo.name}</h2>
                <p>Location: {personalInfo.location}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
            </div>
        )
    }

    function showEducation(edItem) {
        return (
            <div className="education-info" key={nanoid()}>
                <p>{edItem.school}</p>
                <p>{edItem.course}</p>
                <p>{edItem.startDate}</p>
                <p>{edItem.endDate}</p>
            </div>
        )
    }

    function showExperience(exItem) {
        return (
            <div className="experience-info" key={nanoid()}>
                <p>{exItem.company}</p>
                <p>{exItem.position}</p>
                <p>{exItem.tasks}</p>
                <p>{exItem.startDate}</p>
                <p>{exItem.endDate}</p>
            </div>
        )
    }

    return (
        <div className="preview-cv">
            {personalInfo.length !== 0 && showPersonalInfo()}
            {education.length !== 0 && <h3>Education</h3>}
            {education.length !== 0 && education.map(edItem => showEducation(edItem))}
            {experience.length !== 0 && experience.map(exItem => showExperience(exItem))}
        </div>
    )
}