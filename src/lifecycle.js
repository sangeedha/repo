import React from "react";
import ReactDOM from 'react-dom';
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
          }, 1000)
    }
    render() {
      return (
          <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
       
          </div>
      );
      
    }
  }
  
  
  export default Header;