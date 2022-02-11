import React from "react";

export default function PreviewCV(props) {

    const personalInfo = props.CV.personalInfo
    const education = props.CV.educationList
    const experience = props.CV.experienceList

    function showPersonalInfo() {
        return (
            <div className="personal-info">
                <p>{personalInfo.name}</p>
                <p>{personalInfo.location}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
            </div>
        )
    }

    function showEducation(edItem) {
        return (
            <div className="education-info">
                <p>{edItem.school}</p>
                <p>{edItem.course}</p>
                <p>{edItem.startDate}</p>
                <p>{edItem.endDate}</p>
            </div>
        )
    }

    function showExperience(exItem) {
        return (
            <div className="experience-info">
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
            {education.length !== 0 && education.map(edItem => showEducation(edItem))}
            {experience.length !== 0 && experience.map(exItem => showExperience(exItem))}
        </div>
    )
}