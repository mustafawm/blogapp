import React from 'react'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <h4>App component here </h4>
        {this.props.children}
      </div>
    )
  }
}
