import * as actionTypes from './actionTypes'

export const doAct1 = (payload: string) => ({
  type: actionTypes.ACT_1,
  payload
})

export const doAct2 = (payload: number) => ({
  type: actionTypes.ACT_2,
  payload
})