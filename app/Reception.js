import SeviceCenter from './ServiceCenter'
import EventMessage from './EventMessage'
import { MessageType, MessageState } from './Enum'

class Reception {
  constructor(eventQueue) {
    this.eventQueue = eventQueue
  }

  receive(eventMessage) {
    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.execTime + eventMessage.recepTime,
                                         eventMessage.recepTime,
                                         eventMessage.servTime,
                                         eventMessage.type,
                                         eventMessage.status,
                                         eventMessage.sfaTaxs,
                                         MessageState.SERVICE,
                                         ))
  }
}

export default Reception
