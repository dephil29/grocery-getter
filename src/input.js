import React, {Component} from "react";
import "./input.css"

export default class Input extends Component{
  constructor(props){
    super(props)

    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.onEnter = this.onEnter.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  addItem(item){
    if(item.length > 0){
      this.props.addItem(item);
      this.setState({value: ""});
    }
  }

  // onEnter(event){
  //   if(event.keyCode === 13){this.addItem(this.state.value)
  //   }
  // }

  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn primary" type="submit" onClick={() => this.addItem(this.state.value)}>+</button>
      </div>
    )
  }

}
