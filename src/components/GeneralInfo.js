import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h2>Personal Information</h2>

                    <input id="fName" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="First Name"/>
                    <input id="lName" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Last Name"/>
                    <input id="title" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Title"/>
                    <input id="address" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Address"/>
                    <input id="phoneNumber" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Phone Number"/>
                    <input id="email" onChange={this.props.handlePersonalInfoChange} type="email" placeholder="Email"/>
                    <textarea id="description" onChange={this.props.handlePersonalInfoChange} name="description" placeholder="Description"></textarea>
            </section>
        );
    }
}

export default GeneralInfo;