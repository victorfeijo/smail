import EventMessage from './EventMessage'
import { MessageState, MessageStatus } from './Enum'

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
                                           eventMessage.servTime + eventMessage.execTime,
                                           eventMessage.servTime,
                                           eventMessage.type,
                                           MessageState.FINISH,
                                           eventMessage.statusRate
                                           ))
      this.busyServers++
    }
    else {
      this.waitingQueue.push(eventMessage)
    }
  }

  finish(eventMessage) {
    const status = eventMessage.rate()

    this.busyServers--

    if (this.waitingQueue.length > 0) {
      let next = this.nextWaitingQueue()
      this.eventQueue.add(new EventMessage(next.id,
                                           eventMessage.execTime + next.servTime,
                                           next.servTime,
                                           next.type,
                                           MessageState.FINISH,
                                           next.statusRate
                                           ))
      this.busyServers++
    }

    if (status === MessageStatus.DELAY) {
      this.delayMessage(eventMessage)
      return
    }

    if (status === MessageStatus.SUCCESS) { this.success++ }
    if (status === MessageStatus.FAILURE) { this.failure++ }
  }

  delayMessage(eventMessage) {
    this.delay++
    this.eventQueue.add(new EventMessage(eventMessage.id,
                                         eventMessage.execTime,
                                         eventMessage.servTime,
                                         eventMessage.type,
                                         MessageState.SERVICE,
                                         eventMessage.statusRate
                                         ))

  }

  nextWaitingQueue() {
    return this.waitingQueue.shift()
  }
}
export default ServiceCenter
