import EventMessage from './EventMessage'
import { MessageState, MessageStatus } from './Enum'

class ServiceCenter {
  constructor(eventQueue) {
    this.eventQueue = eventQueue
    this.success = 0
    this.failure = 0
    this.delay = 0
  }

  receive(eventMessage) {
    const status = eventMessage.rate()

    if (status === MessageStatus.SUCCESS) {
      this.success++
    }
    if (status === MessageStatus.FAILURE) {
      this.failure++
    }
    if (status === MessageStatus.DELAY) {
      this.delay++

      this.eventQueue.add(new EventMessage(eventMessage.id,
                                           eventMessage.servTime + eventMessage.execTime,
                                           eventMessage.servTime,
                                           eventMessage.type,
                                           MessageState.SERVICE,
                                           eventMessage.statusRate
                                           ))

      return
    }

    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.servTime + eventMessage.execTime,
                                         0,
                                         eventMessage.type,
                                         MessageState.FINISH
                                         ))
  }
}
export default ServiceCenter
