import EventMessage from './EventMessage'
import { MessageState } from './Enum'

class ServiceCenter {
  constructor(eventQueue) {
    this.eventQueue = eventQueue
  }

  receive(eventMessage) {
    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.servTime + eventMessage.execTime,
                                         0,
                                         eventMessage.type,
                                         MessageState.FINISH
                                         ))
  }
}
export default ServiceCenter
