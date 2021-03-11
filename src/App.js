import React, {useState, useEffect, useReducer, useContext } from 'react';
import { NameContext } from './NameContext';



export default function(p) {
    
    const [name, dispatch] = useContext(NameContext)
    
    // const stateArr = useState("Disha")

    // function gradeCalculator(state, action) {
    //     if (action.type === "INCREASE") {
    //         return state + 2
    //     }
    //     return state;
    // }

    // const [grade, gradeDispatch] = useReducer(gradeCalculator, 100);
    // const state = stateArr[0]
    // const setState = stateArr[1]

    // function onClick() {
    //     setState(state + "!")
    // }

    // function improveGrade() {
    //     gradeDispatch({type: "INCREASE"})
    // }

    

    return (
        <div>
            <h1 >Hello, {name}</h1>
            <button onClick={() => dispatch({type: "EXCLAIM"})}>Exclamation Mark</button>
            <button onClick={() => dispatch({type: "QUESTION"})}>Question Mark</button>
        </div>
    )
}

// export default (p) => {

//     return (
//         <div>
//             <h1>Hello, {p.name}</h1>
//         </div>
//     )

// }

// export default (p) => <div> <h1>Hello, {p.name}</h1> </div>
    
// export default class App extends React.Component {


//         return (
//            <div>
//                <h1>Hello, {this.props.name} - You got a {number} on your homewor</h1>
//            </div>
//         )
//     }

// }

//<CounterIncreaser num="2" />