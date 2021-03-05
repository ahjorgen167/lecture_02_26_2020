import React from 'react';
import CounterIncreaser from './CounterIncreaser';
// import { infoMap } from './AgeTrackerCode';
import {connect} from 'react-redux';

import {incrementDispatch} from './MasterMapDispatch';

class App extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props)

        this.state = {
            count: 1,
            lastCount: 100
        }
    }

    incrementCount(amt = 1) {

        this.setState({
            count: this.state.count + amt
        })
        
    }

    render() {
        return (
            <div>
                <h1>The count is: {this.props.countFromState}</h1>
                <h2>The times you've clicked on these buttons: {this.props.timeButtonWasClicked}</h2>
                <button onClick={() => this.props.incrementFunc()}>Increment By 1</button>
                <button onClick={() => this.props.decrementFunc()}>Decrease By 1</button>
                <CounterIncreaser incFunc={(amt) => this.incrementCount(amt)}num={2}/>
            </div>
        )
    }
}

let mapDispatchToProps = function(dispatch, props) {
    return {
        incrementFunc: () => {
            dispatch({type: "INCREASE"})
        },
        decrementFunc: () => {
            dispatch({type: "DECREASE"})
        }
    }
}

let mapStateToProps = function(state, props) {
    return {
        countFromState: state.count,
        timeButtonWasClicked: state.timesClicked,
    }
}

export default connect(
    mapStateToProps,
    incrementDispatch
)(App)

// <CounterIncreaser num="2" />