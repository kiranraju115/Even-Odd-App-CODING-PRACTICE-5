// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const numberText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="header">Count {count}</h1>
        <p className="para">Count is {numberText}</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickIncrement}
        >
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
