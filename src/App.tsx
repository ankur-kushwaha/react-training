import React, { Component } from 'react'

import './style.scss'

type AppProps={
  name:string
}

export default class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <div className="title">Insurance {this.props.name}</div>
      </div>
    )
  }
}
