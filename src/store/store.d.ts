declare interface Module1State {
  val1: string
}

declare interface Module2State {
  val2: number
}

declare interface AppState {
  module1: Module1State,
  module2: Module2State
}