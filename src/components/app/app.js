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
                {name: 'Abdurahimov Muhammadmahdi',  salary: 10000, increase: false, id: 1},
                {name: 'Abdurahimov Aliakbar',       salary: 9000,  increase: false, id: 2},
                {name: 'Abdurahimov Muhammadhuseyn', salary: 7000,  increase: false, id: 3},
            ]

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
                id: uuidv4
            }
            const newArr = [...data, newItem];

            return{
                data: newArr
            }

        })
    }

   






    render() {

        const {data} = this.state

        return (
            <div className="app">
                <AppInfo />
    
            <div className="search-pannel">
                <SearchPannel />
    
                <AppFilter />
            </div>
            <div>
                <EmployersList 
                        data={data}
                        onDelete={this.deleteItem}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
            
            </div>
        );
    }

    }


export default App;