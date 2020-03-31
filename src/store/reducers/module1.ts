import { AnyAction } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const initialState: Module1State = {
  val1: 'xxx'
}

export default function module1Reducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case actionTypes.ACT_1:
      return state.val1 = action.payload
    default:
      return state
  }
}