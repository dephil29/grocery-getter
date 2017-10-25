import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Input from "./input";
import ListItem from "./listItem";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      nextId: 0
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(itemText){
    let items = this.state.items.slice();
    items.push({id: this.state.nextId, text: itemText});
    this.setState({
      items: items,
      nextId: ++this.state.nextId
    })
  }

  removeItem(id){
    this.setState({
      items: this.state.items.filter((item, index) => item.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Input itemText="" addItem={this.addItem}/>
          <ul>
            {
              this.state.items.map((item) => {
                return <ListItem item={item} key={item.id} id={item.id} removeItem={this.removeItem} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
