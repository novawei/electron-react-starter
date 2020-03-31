import { AnyAction } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const initialState: Module2State = {
  val2: 0
}

export default function module2Reducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case actionTypes.ACT_2:
      return state.val2 = action.payload
    default:
      return state
  }
}