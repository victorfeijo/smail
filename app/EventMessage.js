import { MessageState, MessageType } from './Enum'
import EventQueue from './EventQueue'

class EventMessage {
  constructor(id, execTime, servTime, type, state) {
    this.id = id
    this.execTime = execTime
    this.servTime = servTime
    this.type = type
    this.state = state
  }

  run(receptionCenter, localServiceCenter, removeServiceCenter) {
    if (this.state === MessageState.RECEPTION) {
      receptionCenter.receive(this)
    } else if (this.state === MessageState.SERVICE) {
      if (this.type === MessageType.LL ||
          this.type === Messagetype.RL) {
        localServiceCenter.receive(this)
      } else {
        remoteServiceCenter.receive(this)
      }
    } else if (this.state === MessageState.FINISH) {
    }
  }
}

export default EventMessage
