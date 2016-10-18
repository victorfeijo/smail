import { MessageState, MessageType, MessageStatus } from './Enum'
import EventQueue from './EventQueue'

class EventMessage {
  constructor(id, execTime, recepTime, servTime, type, state, statusRate, status) {
    this.id = id
    this.statusRate = statusRate
    this.execTime = execTime
    this.recepTime = recepTime
    this.servTime = servTime
    this.type = type
    this.state = state

    this.status = this.state === MessageState.RECEPTION ? this.rate() : status
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

  rate() {
    let success = 0, failure = 0, delay = 0

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

    if (rand <= success) {
      return MessageStatus.SUCCESS
    }
    else if (rand <= success + failure) {
      return MessageStatus.FAILURE
    }
    else if (rand <= success + failure + delay) {
      return MessageStatus.DELAY
    }
  }

  servTime() {
  }

  receptionTime() {

  }
}

export default EventMessage
