import { MessageState, MessageType, MessageStatus } from './Enum'
import EventQueue from './EventQueue'

class EventMessage {
  constructor(id, execTime, servTime, type, state, statusRate) {
    this.id = id
    this.execTime = execTime
    this.servTime = servTime
    this.type = type
    this.state = state
    this.statusRate = statusRate
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

  rate() {
    let success = 0
    let failure = 0
    let delay = 0

    if (this.type === MessageType.LL) {
      success = this.statusRate.success.ll
      failure = this.statusRate.failure.ll
      delay = this.statusRate.delay.ll
    }
    if (this.type === MessageType.LR) {
      success = this.statusRate.success.lr
      failure = this.statusRate.failure.lr
      delay = this.statusRate.delay.lr
    }
    if (this.type === MessageType.RL) {
      success = this.statusRate.success.rl
      failure = this.statusRate.failure.rl
      delay = this.statusRate.delay.rl
    }
    if (this.type === MessageType.RR) {
      success = this.statusRate.success.rr
      failure = this.statusRate.failure.rr
      delay = this.statusRate.delay.rr
    }

    const rand = Math.random()*100

    if (rand < success) {
      return MessageStatus.SUCCESS
    } else if (rand >= success && rand < success + failure) {
      return MessageStatus.FAILURE
    } else if (rand >= success + failure && rand < success + failure + delay) {
      return MessageStatus.DELAY
    }
  }
}

export default EventMessage
