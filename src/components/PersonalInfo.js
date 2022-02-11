import React from "react";

export default function PersonalInfo(props) {
    
    return (
        <form className="personal-form" onSubmit={props.personalSubmit} >
            <div className="form-item">
                <label htmlFor="name">Full Name</label>
                <input 
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={props.personalChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    value={props.location}
                    onChange={props.personalChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={props.personalChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="location">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={props.phone}
                    onChange={props.personalChange}
                />
            </div>
            <div className="form-item">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}