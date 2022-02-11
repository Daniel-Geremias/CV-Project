import React from "react";

export default function Experience(props) {
    return (
        <form className="experience-form" onSubmit={props.experienceSubmit}>
            <div className="form-item">
                <label htmlFor="company">Company</label>
                <input 
                    type="text"
                    name="company"
                    value={props.company}
                    onChange={props.experienceChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="position">Position</label>
                <input 
                    type="text"
                    name="position"
                    value={props.position}
                    onChange={props.experienceChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="tasks">Tasks</label>
                <input 
                    type="text"
                    name="tasks"
                    value={props.tasks}
                    onChange={props.experienceChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="startDate">Start Date</label>
                <input 
                    type="date"
                    name="startDate"
                    value={props.startDate}
                    onChange={props.experienceChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="endDate">End Date</label>
                <input 
                    type="date"
                    name="endDate"
                    value={props.endDate}
                    onChange={props.experienceChange}
                />
            </div>
            <div className="form-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}