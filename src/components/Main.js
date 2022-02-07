import React from "react";
import Form from "./Form"
import CVPrint from "./CVPrint"

export default class Main extends React.Component {
    render() {
        const cv = {
                name: "Joe",
                location: "Brazil",
                email: "joe@gmail.com",
                phone: "00000-0000",
                education: [
                        {
                            school: "Harvard",
                            course: "IT",
                            startDate: "Jan 5th, 2010",
                            endDate: "Dec 15th, 2014"
                        },
                        {
                            school: "Yale",
                            course: "IT",
                            startDate: "Jan 5th, 2010",
                            endDate: "Dec 15th, 2014"
                        }
                    ],
                experience: [
                    {
                        company: "IBM",
                        position: "Juniot IT",
                        tasks: "Fix problems and report fixes",
                        startDate: "Jan 10th, 2015",
                        endDate: "Dec 18th, 2019"
                    }
                    ]
            }
        return (
            <div className="main">
                <Form />
                <CVPrint cv={cv}/>
            </div>
        )
    }
}

