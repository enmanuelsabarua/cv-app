import React, { Component } from "react";

class PracticalExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.experiences.map((experience, index) => {
                    return (
                        <section key={experience.id}>
                                <input value={index >= 1 ? experience.position : this.value} onChange={(e) => this.props.handleSectionChange(e, 'experience')} id="position" type="text" placeholder="Position" />
                                <input value={index >= 1 ? experience.company : this.value} onChange={(e) => this.props.handleSectionChange(e, 'experience')} id="company" type="text" placeholder="Company" />
                                <input value={index >= 1 ? experience.city : this.value} onChange={(e) => this.props.handleSectionChange(e, 'experience')} id="city" type="text" placeholder="City" />
                                <input value={index >= 1 ? experience.from : this.value} onChange={(e) => this.props.handleSectionChange(e, 'experience')} id="from" type="text" placeholder="From" />
                                <input value={index >= 1 ? experience.to : this.value} onChange={(e) => this.props.handleSectionChange(e, 'experience')} id="to" type="text" placeholder="To" />

                                {index !== 0 && <button onClick={() => this.props.deleteExperience(experience.id, 'experiences')} type="button">Delete</button>}
                        </section>
                    );
                })}
            </>
        );
    }
}

export default PracticalExp;