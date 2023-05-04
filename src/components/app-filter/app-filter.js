import { Component } from "react";

import "./filter.css";


class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    buttonsData = [
        {name: 'all', lable: 'Все сотрудники'},
        {name: 'highJob', lable: 'На повышение'},
        {name: 'bigSalary', lable: 'З/П больше 1000$'}
    ];

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttonsData.map(({name, lable}) => {
            const isActive = filter === name;
            const clazz = isActive ? ' btn-light' : ' btn-outline-light'

                return (
                    <button 
                            className={`btn ${clazz}` }
                            type="button"
                            key={name}
                            onClick={() =>  onFilterChange(name)}>
                        {lable}
                    </button>
                );
        });

        return (
            <div className="btn-group">
               {buttons}
            </div>
        );

    }
}

export default AppFilter;
