import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
  basketCounter: 0,
  basket: [],
}
function basketCounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT_BASKET":
      return {
        ...state,
        basketCounter: state.basketCounter + 1,
      }
    case "DECREMENT_BASKET":
      if (state > 0) {
        return {
          ...state,
          basketCounter: state.basketCounter - 1,
        }
      } else {
        return {
          ...state,
          basketCounter: (state.basketCounter = 0),
        }
      }
    case "CLEAR_BASKET":
      return {
        ...state,
        basketCounter: (state.basketCounter = 0),
      }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketCounterReducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
