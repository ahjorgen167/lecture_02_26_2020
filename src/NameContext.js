import {createContext, useReducer} from 'react';

export const NameContext = createContext()

function exclamationReducer(state, action) {
    if (action.type === "EXCLAIM") {
        return state + "!"
    } else if (action.type === "QUESTION") {
        return state  + "?"
    } else {
        return state;
    }
}

export function NameContextComponent(props) {
    const [nameState, nameDispatch] = useReducer(exclamationReducer, "Isidora")

    return (
        <NameContext.Provider value={[nameState, nameDispatch]}>
            {props.children}
        </NameContext.Provider>
    )
} 