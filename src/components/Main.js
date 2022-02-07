import React from "react";
import Form from "./Form"
import CVPrint from "./CVPrint"

export default class Main extends React.Component {
            

    render() {
        return (
            <div className="main">
                <Form />
                <CVPrint />
            </div>
        )
    }
}

