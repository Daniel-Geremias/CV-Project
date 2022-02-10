import React from "react";
import CVData from "./CVData";
import PersonalInfo from "./PersonalInfo"

export default function Main() {
    const [personalData, setPersonalData] = React.useState(
        JSON.parse(localStorage.getItem("personalData")) ||
        CVData.personalInfo)

    function handleChange(event) {
        const {name, value} = event.target
        setPersonalData(prevPersonalData => ({
            ...prevPersonalData,
            [name]: value})
        )
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    React.useEffect(() => {
        localStorage.setItem("personalData", JSON.stringify(personalData))}, [personalData])

    return (
        <main className="main">
            <PersonalInfo
                PersonalInfo={personalData}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
        </main>
    )
}

