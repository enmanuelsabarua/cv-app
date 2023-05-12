import React, { Component } from "react";
import '../styles/Resume.css'

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="resume">
                <h2>Name</h2>
                <h3>Profession</h3>
            </div>
        );
    }
}

export default Resume;