import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.educations.map(education => {
                    const length = this.props.educations;
                    return (
                        <section key={education.id}>
                                <input value={length <= 1 ? education.university : this.value} onChange={this.props.handleEducationChange} id="university" type="text" placeholder="University Name " />
                                <input value={length <= 1 ? education.city : this.value} onChange={this.props.handleEducationChange} id="city" type="text" placeholder="City" />
                                <input value={length <= 1 ? education.degree : this.value} onChange={this.props.handleEducationChange} id="degree" type="text" placeholder="Degree" />
                                <input value={length <= 1 ? education.subject : this.value} onChange={this.props.handleEducationChange} id="subject" type="text" placeholder="Subject" />
                                <input value={length <= 1 ? education.from : this.value} onChange={this.props.handleEducationChange} id="from" type="text" placeholder="From" />
                                <input value={length <= 1 ? education.to : this.value} onChange={this.props.handleEducationChange} id="to" type="text" placeholder="To" />

                                <button onClick={() => this.props.deleteExperience(education.id, 'educations')} type="button">Delete</button>
                        </section>
                    );
                })}
            </>
        );
    }
}

export default Education;