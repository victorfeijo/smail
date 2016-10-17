import SeviceCenter from './ServiceCenter'
import EventMessage from './EventMessage'
import { MessageType, MessageState } from './Enum'

class Reception {
  constructor(eventQueue, success, fail, delay) {
    this.eventQueue = eventQueue
    this.success = success
    this.fail = fail
    this.delay = delay
  }

  receive(eventMessage) {
    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.execTime + eventMessage.servTime,
                                         eventMessage.servTime,
                                         eventMessage.type,
                                         MessageState.SERVICE
                                         ))
  }
}

export default Reception
