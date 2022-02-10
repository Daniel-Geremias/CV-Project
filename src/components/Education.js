import React from "react";

export default function Education(props) {
    return (
        <form className="education-form">
            <label htmlFor="school">School</label>
            <input 
                type="text"
                name="school"
                value={props.school}
                onChange={props.educationChange}
            />
            <label htmlFor="course">Course</label>
            <input 
                type="text"
                name="course"
                value={props.course}
                onChange={props.educationChange}
            />
            <label htmlFor="startDate">Start Date</label>
            <input 
                type="date"
                name="startDate"
                value={props.startDate}
                onChange={props.educationChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input 
                type="date"
                name="endDate"
                value={props.endDate}
                onChange={props.educationChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}