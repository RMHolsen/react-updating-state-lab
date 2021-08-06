// Code DigitalClicker Component Here
import React from 'react';

// remember that it is in fact 'onClick' and not 'onclick'
// remember that when you're setting the state based on the previous state
// it is stateKey: previousState.stateKey + change
// the stateKey must be on there.

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        };
    }

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked+1
            }
        })
    }

    render() {
        return(
                <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker