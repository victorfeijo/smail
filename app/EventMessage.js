import { MessageState, MessageType, MessageStatus } from './Enum'
import EventQueue from './EventQueue'

class EventMessage {
  constructor(id, execTime, recepTime, servTime, enteredTime, type, status, sfaTaxs, state) {
    this.id = id
    this.execTime = execTime
    this.recepTime = recepTime
    this.servTime = servTime
    this.enteredTime = enteredTime
    this.type = type
    this.status = status
    this.sfaTaxs = sfaTaxs
    this.state = state
  }

  run(receptionCenter, localServiceCenter, remoteServiceCenter) {
    if (this.state === MessageState.RECEPTION) {
      receptionCenter.receive(this)
    }
    else if (this.state === MessageState.SERVICE) {
      if (this.type === MessageType.LL || this.type === MessageType.RL) {
        localServiceCenter.receive(this)
      }
      else {
        remoteServiceCenter.receive(this)
      }
    }
    else if (this.state === MessageState.FINISH) {
      if (this.type === MessageType.LL || this.type === MessageType.RL) {
        localServiceCenter.finish(this)
      }
      else {
        remoteServiceCenter.finish(this)
      }
    }
  }

  servTime() {
  }

  receptionTime() {

  }
}

export default EventMessage
