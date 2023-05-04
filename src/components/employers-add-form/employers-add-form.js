import { Component } from "react";


import "./employers-add-form.css";

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length >= 6 && this.state.salary.length >= 2) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: false
            });
        } else {
            this.setState({
                error: true,
            });
        }
    }

    render() {
        const { name, salary, error } = this.state;
        let className = "form-control new-post-label";
        if (error) {
            className += ' red';
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className={className}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className={className}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;