import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                    <input id="fName" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="text" placeholder="First Name" value={this.props.personalInfo.fName}/>
                    <input id="lName" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="text" placeholder="Last Name" value={this.props.personalInfo.lName}/>
                    <input id="title" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="text" placeholder="Title" value={this.props.personalInfo.title}/>
                    <input id="address" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="text" placeholder="Address" value={this.props.personalInfo.address}/>
                    <input id="phoneNumber" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="text" placeholder="Phone Number" value={this.props.personalInfo.phoneNumber}/>
                    <input id="email" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} type="email" placeholder="Email" value={this.props.personalInfo.email}/>
                    <textarea id="description" onChange={(e) => this.props.handleSectionChange(e, 'personalInfo')} name="description" placeholder="Description" value={this.props.personalInfo.description}></textarea>
            </section>
        );
    }
}

export default GeneralInfo;