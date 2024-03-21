import React from 'react';
import Car from './Car';

class Garage extends React.Component{

    render(){
        const carinfo = {carname: "Ford", carmodel: 1992};
        return (<div> <h2>Welcome to my Garage </h2> <Car brand = {carinfo}/></div>);

    }
} export default Garage;