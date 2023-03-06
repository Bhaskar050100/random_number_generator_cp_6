// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  getRandomNum = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNum: randomNumber})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="cont">
        <div className="small-cont">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.getRandomNum}>
            Generate
          </button>
          <p className="output">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
