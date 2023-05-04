import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


import AppInfo from '../app-header-info/app-header-info';
import SearchPannel from '../search-panel/search-pannel';
import AppFilter from '../app-filter/app-filter';
// import EmployersListItem from '../employers-list-item/employers-list-item';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data:  [
                {name: 'Abdurahimov MH', salary: 950,  increase: true, rise: true, id: 1},
                {name: 'Ivanov S',  salary: 1000, increase: false, rise: true, id: 2},
                {name: 'Kolonin A',  salary: 900,  increase: false, rise: false, id: 3},
                {name: 'Panin S', salary: 700,  increase: true, rise: false, id: 4},
                
            ],
            term: '',
            filter: 'all' //all, highJob, bigSalary 

        }
    }

        deleteItem = (id) => {
            this.setState(({data})=> {
                // const index = data.findIndex(elem => elem.id === id);
                // console.log(index)

                return {
                    data: data.filter(item => item.id !== id)
                }
            })
        }


        addItem = (name, salary) => {
            this.setState(({data}) => {
                const newItem = {
                    name,
                    salary,
                    increase: false,
                    rise: false,
                    id: uuidv4()
                }
                const newArr = [...data, newItem];

                return{
                    data: newArr
                }

            })
        }

    
        onToggleProp = (id, prop) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);

                const oldObject = data[index];
                const newObject = {...oldObject, [prop]: !oldObject[prop] };
                const newArr = [...data.slice(0, index), newObject, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            });
        }

        searchEmployee = (items, searchString) => {
            if(searchString.length === 0) {
                return items
            };

            return items.filter(item => {
                return item.name.indexOf(searchString) > -1
            });
    }

        onUpdateSearch = (inputString) => {
            this.setState({term: inputString})
    }

        filter = (items, filterStatus) => {
            switch(filterStatus) {
                case 'all' :
                    return items;
                case 'highJob' :
                    return items.filter((item) => item.rise)
                case 'bigSalary' :
                    return items.filter( (item) => item.salary >= 1000)
                default: 
                    return items; 

            }
        }

        onFilterChange = (filterChanged) => {
            this.setState({filter: filterChanged})
        }


    render() {

        const {data, term, filter} = this.state;

        const employees = this.state.data.length;
        const increasedSalary = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filter(this.searchEmployee(data, term), filter);



        return (
            <div className="app">
                <AppInfo 
                employees={employees} 
                increasedSalary={increasedSalary} />
    
            <div className="search-pannel">
                <SearchPannel onUpdateSearch={this.onUpdateSearch} />
    
                <AppFilter filter={filter} 
                           onFilterChange={this.onFilterChange} />
            </div>
            <div>
                <EmployersList 
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp ={this.onToggleProp} />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
            
            </div>
        );
    }

    }


export default App;