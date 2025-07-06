import React from "react";
class Text extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return <p>{this.props.text}</p>
    }

}
export class MyDiv extends React.Component
{
    constructor()
    {
        super();
        this.state={class: "light"};

        this.change = this.change.bind(this);

    }
    change(ev)
    {
        if(ev.target.value == "light"){
            this.setState({class: "dark"});
        } else {
            this.setSatet({class: "light"});
        }

    }
    render()
    {
        return <div>
            <div id="topic">
                <span>Dark</span><input type="radio" name="topic" onChange={this.change}></input>
                <span>Light</span><input type="radio" name="topic" onChange={this.change}></input>
            </div>
            <Text text="Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением,
            что состояние определяется внутри компонента и доступно только из компонента.Если props представляет входные данные,
            которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью 
            зависят от компонента.Также в отличие от props значения в state можно изменять."></Text>
        </div>
    }
}