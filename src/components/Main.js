import React from "react";
import CVData from "./CVData";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo"

export default function Main() {
    // Personal Data handling
    const [personalData, setPersonalData] = React.useState(
        JSON.parse(localStorage.getItem("personalData")) ||
        CVData.personalInfo)

    function personalChange(event) {
        const {name, value} = event.target
        setPersonalData(prevPersonalData => ({
            ...prevPersonalData,
            [name]: value})
        )
    }
        
    React.useEffect(() => {
        localStorage.setItem("personalData", JSON.stringify(personalData))}, [personalData])

    function personalSubmit(event) {
        event.preventDefault()
        setCV(prevCV => ({
            ...prevCV,
            personalInfo: personalData
        }))
        console.log(CV)
    }
    
    // Education Data handling

    const [educationData, setEducationData] = React.useState(
        JSON.parse(localStorage.getItem("educationData")) ||    
        CVData.education
    )

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
            educationList: prevCV.educationList.push(educationData)
        }))
        console.log(CV)
    }

    React.useEffect(() => {
        localStorage.setItem("educationData", JSON.stringify(educationData))}, [educationData]
    )

    // Experience Data handling

    const [experienceData, setExperienceData] = React.useState(
        CVData.experience
    )

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
            experienceList: prevCV.experienceList.push(experienceData)
        }))
        console.log(CV)
    }

    React.useEffect(() => {
        localStorage.setItem("experienceData", JSON.stringify(experienceData))}, [experienceData]
    )

    // Show CV info
    const [CV, setCV] = React.useState({
        personalInfo: "",
        educationList: [],
        experienceList: []
    })

    return (
        <main className="main">
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
        </main>
    )
}

