import React from "react";

export default function Experience(props) {
    return (
        <form className="experience-form" onSubmit={props.experienceSubmit}>
            <label htmlFor="company">Company</label>
            <input 
                type="text"
                name="company"
                value={props.company}
                onChange={props.experienceChange}
            />
            <label htmlFor="position">Position</label>
            <input 
                type="text"
                name="position"
                value={props.position}
                onChange={props.experienceChange}
            />
            <label htmlFor="tasks">Tasks</label>
            <input 
                type="text"
                name="tasks"
                value={props.tasks}
                onChange={props.experienceChange}
            />
            <label htmlFor="startDate">Start Date</label>
            <input 
                type="date"
                name="startDate"
                value={props.startDate}
                onChange={props.experienceChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input 
                type="date"
                name="endDate"
                value={props.endDate}
                onChange={props.experienceChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}