import React from 'react'

class Keypad extends React.Component {
  constructor(props){
    super(props)
  }

  saySomething(){
    console.log("Entering password...")
  }

  render() {
    return (
      <input onKeyUp={this.saySomething} type="password">

      </input>
    )
  }
}

export default Keypad
