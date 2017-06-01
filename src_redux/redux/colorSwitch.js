// Actions
const CHANGE_COLOR = 'CHANGE_COLOR'
const defaultState = {color: 'red'}

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {...state, color: action.color}
    default: return state
  }
}

// Action Creators
export function changeColor(newColor) {
  return {type: CHANGE_COLOR, color: newColor}
}
