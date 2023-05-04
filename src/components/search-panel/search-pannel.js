import { Component } from "react";

import "./search-pannel.css";

class SearchPannel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }


   updateSearchPannel = (e) => {
        const inputValue = e.target.value;

         this.setState({term: inputValue});
         this.props.onUpdateSearch(inputValue)       
   }
    

   
    

    render() {
        
        return (
            <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.updateSearchPannel} />
        );
    }
}

export default SearchPannel;