import React from 'react';
import CounterIncreaser from './CounterIncreaser';
// import { infoMap } from './AgeTrackerCode';
import {connect} from 'react-redux';

import {incrementDispatch} from './MasterMapDispatch';

class App extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor")
        console.log(this.props.dispatch)
        
    }

    handleChange(action, event) {
        const value = event.target.value;
        this.props.dispatch({
            type: action,
            value: value,
        })
        // this.setState({
        //     [key]: Number(event.target.value),
            
        // })
    }

    onclick(action) {
        this.props.dispatch({type: action})

        // if ("add") {
        //     this.setState({
        //         result: this.state.value1 + this.state.value2
        //     })
        // }
    }

    render() {
        return (
            <div>
                <input value={this.props.value1} onChange={(e) => this.handleChange("SET_VALUE1", e)} />
                <input value={this.props.value2} onChange={(e) => this.handleChange("SET_VALUE2", e)}/>
                <h4>Result: {this.props.result} </h4>
                <button onClick={() => this.onclick("ADD")}>Add</button>
            </div>
        )

    }

}
//     constructor(props) {
//         super(props);

//         console.log(this.props)

//         this.state = {
//             count: 1,
//             lastCount: 100
//         }
//     }

//     incrementCount(amt = 1) {

//         this.setState({
//             count: this.state.count + amt
//         })
        
//     }

//     render() {
//         return (
//             <div>
//                 <h1>The count is: {this.props.countFromState}</h1>
//                 <h2>The times you've clicked on these buttons: {this.props.timeButtonWasClicked}</h2>
//                 <button onClick={() => this.props.incrementFunc()}>Increment By 1</button>
//                 <button onClick={() => this.props.decrementFunc()}>Decrease By 1</button>
//                 <CounterIncreaser incFunc={(amt) => this.incrementCount(amt)}num={2}/>
//             </div>
//         )
//     }
// }

let mapDispatchToProps = function(dispatch, props) {
    console.log(dispatch)
    return {
        dispatch: dispatch,
    }
}

let mapStateToProps = function(state, props) {
    return {
        value1: state.calculator.value1,
        value2: state.calculator.value2,
        result: state.calculator.result,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

// <CounterIncreaser num="2" />