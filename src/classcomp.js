
import React from 'react';
import ReactDOM from 'react-dom';

class Firstclass extends React.Component {
    constructor(props){
        super(props);
        this.state= {brand: this.props.name};
       
    }
    render() {
       let bname=this.state.brand;
        return <h1>Brandname= {bname}</h1>;
    }
}
export default Firstclass;
/*let brandName= this.props.name;
        this.state= {brand: brandName};*/