import React from 'react';


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "red"};
    }

    componentDidMount(){
        setTimeout(() => {this.setState({color: "yellow"})}, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before the update, the color was" + prevState.color;
    }
    
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "Updated color is" + this.state.color;
    }

    render(){
        
        return (<div><h1>My favourite color is {this.state.color}</h1>
        <div id="div1"></div><div id="div2"></div></div>);

    }
} export default Car;