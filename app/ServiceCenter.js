import EventMessage from './EventMessage'
import { MessageState, MessageStatus } from './Enum'
import { Sort } from './Calculus'

class ServiceCenter {
  constructor(eventQueue, servers) {
    this.eventQueue = eventQueue
    this.servers = servers
    this.busyServers = 0
    this.success = 0
    this.failure = 0
    this.delay = 0
    this.waitingQueue = new Array()
  }

  receive(eventMessage) {
    if (this.busyServers < this.servers) {
      this.eventQueue.add(new EventMessage(eventMessage.id,
                                           eventMessage.execTime + eventMessage.servTime,
                                           eventMessage.recepTime,
                                           eventMessage.servTime,
                                           eventMessage.type,
                                           eventMessage.status,
                                           eventMessage.sfaTaxs,
                                           MessageState.FINISH,
                                           ))
      this.busyServers++
    }
    else {
      this.waitingQueue.push(eventMessage)
    }
  }

  finish(eventMessage) {
    this.busyServers--

    if (this.waitingQueue.length > 0) {
      let next = this.nextWaitingQueue()
      this.eventQueue.add(new EventMessage(next.id,
                                           eventMessage.execTime + next.servTime,
                                           next.recepTime,
                                           next.servTime,
                                           next.type,
                                           next.status,
                                           next.sfaTaxs,
                                           MessageState.FINISH,
                                           ))
      this.busyServers++
    }

    if (eventMessage.status === MessageStatus.DELAY) {
      this.delayMessage(eventMessage)
      return
    }

    if (eventMessage.status === MessageStatus.SUCCESS) { this.success++ }
    if (eventMessage.status === MessageStatus.FAILURE) { this.failure++ }
  }

  delayMessage(eventMessage) {
    this.delay++
    let status = Sort.messageStatus(eventMessage.sfaTaxs, eventMessage.type)

    let delayed = new EventMessage(eventMessage.id,
                                   eventMessage.execTime,
                                   eventMessage.recepTime,
                                   eventMessage.servTime,
                                   eventMessage.type,
                                   status,
                                   eventMessage.sfaTaxs,
                                   MessageState.SERVICE
                                   )

    this.eventQueue.add(delayed)
  }

  nextWaitingQueue() {
    return this.waitingQueue.shift()
  }
}
export default ServiceCenter
