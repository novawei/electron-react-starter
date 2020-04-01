import * as actionTypes from './actionTypes'

// module1
export const doAct1 = (payload: string) => ({
  type: actionTypes.ACT_1,
  payload
})

// module2
export const doAct2 = (payload: number) => ({
  type: actionTypes.ACT_2,
  payload
})