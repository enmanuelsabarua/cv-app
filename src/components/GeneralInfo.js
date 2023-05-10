import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                    <input id="fName" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="First Name" value={this.props.personalInfo.fName}/>
                    <input id="lName" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Last Name" value={this.props.personalInfo.lName}/>
                    <input id="title" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Title" value={this.props.personalInfo.title}/>
                    <input id="address" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Address" value={this.props.personalInfo.address}/>
                    <input id="phoneNumber" onChange={this.props.handlePersonalInfoChange} type="text" placeholder="Phone Number" value={this.props.personalInfo.phoneNumber}/>
                    <input id="email" onChange={this.props.handlePersonalInfoChange} type="email" placeholder="Email" value={this.props.personalInfo.email}/>
                    <textarea id="description" onChange={this.props.handlePersonalInfoChange} name="description" placeholder="Description" value={this.props.personalInfo.description}></textarea>
            </section>
        );
    }
}

export default GeneralInfo;