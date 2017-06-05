// Actions
const CHANGE_COLOR = 'CHANGE_COLOR'

const defaultState = {color: 'green'}

// Action creator
export function changeColor(newColor) {
  return {type: CHANGE_COLOR, color: newColor}
}

// reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {...state, color: action.color}
    default:
      return state
  }
}
