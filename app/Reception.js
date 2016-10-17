import SeviceCenter from './ServiceCenter'
import EventMessage from './EventMessage'
import { MessageType, MessageState } from './Enum'

class Reception {
  constructor(eventQueue) {
    this.eventQueue = eventQueue
  }

  receive(eventMessage) {
    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.execTime + eventMessage.servTime,
                                         eventMessage.servTime,
                                         eventMessage.type,
                                         MessageState.SERVICE,
                                         eventMessage.statusRate
                                         ))
  }
}

export default Reception
