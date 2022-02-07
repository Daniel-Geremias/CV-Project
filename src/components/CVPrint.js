import React from "react";


function EducationList(props) {
    const education = props.education
        return (
            <div className="education-list">
                <h2>Education</h2>
                {education.map(educationItem => {
                    return (
                        <div 
                            className="education-item"
                            key={education.indexOf(educationItem)}
                        >
                            <h4 className="school-name">{educationItem.school}</h4>
                            <h4 className="course-name">{educationItem.course}</h4>
                            <h4 className="start-date">Starting date: {educationItem.startDate}</h4>
                            <h4 className="end-date">Ending date: {educationItem.endDate}</h4>
                        </div>
                    )
                })
            }
            </div>
        )
    }

function ExperienceList(props) {
    const experience = props.experience
    return (
        <div className="experience-list">
            <h2>Experience</h2>
            {experience.map(experienceItem => {
                    return (
                        <div 
                            className="experience-item"
                            key={experience.indexOf(experienceItem)}
                        >
                            <h4 className="company-name">{experienceItem.company}</h4>
                            <h4 className="position">{experienceItem.position}</h4>
                            <h4 className="tasks">{experienceItem.tasks}</h4>
                            <h4 className="start-date">Starting date: {experienceItem.startDate}</h4>
                            <h4 className="end-date">Ending date: {experienceItem.endDate}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default class CVPrint extends React.Component {

    render() {
        const cv = this.props.cv

        return (
            <div className="cv-body">
                <h1>{cv.name}</h1>
                <h3>{cv.location}</h3>
                <h3>{cv.email}</h3>
                <h3>{cv.phone}</h3>
                {cv.education.length !== 0 && <EducationList education={cv.education} />}
                {cv.experience.length !== 0 && <ExperienceList experience={cv.experience} />}
            </div>
        )
    }
}

