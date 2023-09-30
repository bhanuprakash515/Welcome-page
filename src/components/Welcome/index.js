import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state
    let text = null
    if (isSubscribe) {
      text = 'Subscribed'
    } else {
      text = 'Subscribe'
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">ThankYou! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
