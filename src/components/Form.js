import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { name, job } = this.state;

        return (
            <form className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Name and Job</span>
                </div>
                <input type="text"
                       name="name"
                       value={name}
                       onChange={this.handleChange}
                       className="form-control"
                       placeholder="Name"/>
                <input type="text"
                       name="job"
                       value={job}
                       onChange={this.handleChange}
                       className="form-control"
                       placeholder="Job"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.submitForm} >
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;
