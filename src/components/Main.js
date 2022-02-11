import React from "react";
import CVData from "./CVData";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo"
import PreviewCV from "./PreviewCV";

export default function Main() {
    // Personal Data handling
    const [personalData, setPersonalData] = React.useState(CVData.personalInfo)

    function personalChange(event) {
        const {name, value} = event.target
        setPersonalData(prevPersonalData => ({
            ...prevPersonalData,
            [name]: value})
        )
    }

    function personalSubmit(event) {
        event.preventDefault()
        setCV(prevCV => ({
            ...prevCV,
            personalInfo: personalData
        }))
    }
    
    // Education Data handling

    const [educationData, setEducationData] = React.useState(CVData.education)

    function educationChange(event) {
        const {name, value} = event.target
        setEducationData(prevEducationData => ({
            ...prevEducationData,
            [name]: value
        }))
    }

    function educationSubmit(event) {
        event.preventDefault()
        setCV(prevCV => ({
            ...prevCV,
            educationList: [
                ...prevCV.educationList,
                educationData
            ]
        }))
    }

    // Experience Data handling

    const [experienceData, setExperienceData] = React.useState(CVData.experience)

    function experienceChange(event) {
        const {name, value} = event.target
        setExperienceData(prevExperienceData => ({
            ...prevExperienceData,
            [name]: value
        }))
    }

    function experienceSubmit(event) {
        event.preventDefault()
        setCV(prevCV => ({
            ...prevCV,
            experienceList: [
                ...prevCV.experienceList,
                experienceData
            ]
        }))
    }

    // Show CV info
    const [CV, setCV] = React.useState({
        personalInfo: "",
        educationList: "",
        experienceList: "",
        showCV: false
    })

    function previewCV() {
        setCV(prevCV => ({
            ...prevCV,
            showCV: !prevCV.showCV
        }))
    }

    return (
        <main className="main">
            <div className="cv-form">
                <PersonalInfo
                    personalData={personalData}
                    personalChange={personalChange}
                    personalSubmit={personalSubmit}
                />
                <Education
                    educationData={educationData}
                    educationChange={educationChange}
                    educationSubmit={educationSubmit}
                />
                <Experience 
                    experienceData={experienceData}
                    experienceChange={experienceChange}
                    experienceSubmit={experienceSubmit}
                />
                <button onClick={previewCV}>{CV.showCV ? "Hide" : "Preview"}</button>
            </div>
            {CV.showCV && <PreviewCV CV={CV} />}
        </main>
    )
}

