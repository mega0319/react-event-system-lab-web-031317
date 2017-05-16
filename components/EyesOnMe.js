import React from 'react'

class EyesOnMe extends React.Component {
  constructor(props){
    super(props)
  }

  focusing(){
    console.log("Good!")
  }

  blurring(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return (
      <button onFocus={this.focusing} onBlur={this.blurring}></button>
    )
  }
}

export default EyesOnMe
