import React from 'react';
import './Task1.css'

export class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state = {buttonText: "Light", class: "button"}
        this.click = this.Func.bind(this);

    }
    Func(){
        if(this.state.buttonText==="Light"){
            this.setState({buttonText: "Dark", class: "Dark"})
        } else {
            this.setState({buttonText: "Light", class: "Light"})
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.click} className={this.state.class}>{this.state.buttonText}</button>
            </div>
        )
            
    }
}



