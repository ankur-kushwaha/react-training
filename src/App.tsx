import React, { Component } from 'react'

import './style.scss'

type AppProps = {
  name?:string
}

type AppState = {
  name:string
}

function test(){
  alert(1)
}

export {
  test
}

export default class App extends Component<AppProps, AppState> {
  constructor(props){
    super(props);
    this.state={
      name:"ankur"
    }
  }

  render() {
    return (
      <div>
        {this.state.name}
        <div className="red">Insurance {this.props.name}</div>
      </div>
    )
  }
}
