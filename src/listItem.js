import React, {Component} from "react";
import "./listItem.css";

export default class ListItem extends Component{
  removeItem(id){
    this.props.removeItem(id);
  }

  render(){
    return(
      <div className="wrapper">
        <p className="wrapper-text">{this.props.item.text}</p>
        <button className="remove" onClick={(e) => this.removeItem(this.props.id)}>-</button>
      </div>
    )
  }
}
