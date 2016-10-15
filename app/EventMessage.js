import { MessageState } from './Enum'
import EventQueue from './EventQueue'

class EventMessage {
  constructor(execTime, servTime) {
    this.execTime = execTime
    this.servTime = servTime
    this.state = MessageState.RECEPTION
  }

  finishTime() {
    return this.execTime + this.servTime
  }

  run() {
  }
}

export default EventMessage
