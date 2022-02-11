import React from "react";

export default function Education(props) {
    return (
        <form className="education-form" onSubmit={props.educationSubmit}>
            <div className="form-item">
                <label htmlFor="school">School</label>
                <input 
                    type="text"
                    name="school"
                    value={props.school}
                    onChange={props.educationChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="course">Course</label>
                <input 
                    type="text"
                    name="course"
                    value={props.course}
                    onChange={props.educationChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="startDate">Start Date</label>
                <input 
                    type="date"
                    name="startDate"
                    value={props.startDate}
                    onChange={props.educationChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="endDate">End Date</label>
                <input 
                    type="date"
                    name="endDate"
                    value={props.endDate}
                    onChange={props.educationChange}
                />
            </div>
            <div className="form-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}