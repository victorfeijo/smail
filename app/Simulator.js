import EventMessage from './EventMessage'
import EventQueue from './EventQueue'
import ServiceCenter from './ServiceCenter'
import Reception from './Reception'
import { Distribution } from './Calculus'
import { MessageType, MessageState } from './Enum'

class Simulator {
  constructor(config) {
    this.config = config
    this.eventQueue = new EventQueue()
    this.localServiceCenter = new ServiceCenter(this.eventQueue, this.config.serviceCenter.center1)
    this.remoteServiceCenter = new ServiceCenter(this.eventQueue, this.config.serviceCenter.center2)
    this.receptionCenter = new Reception(this.eventQueue)
    this.currentTime = 0
  }

  rateMessageType() {
    const ll = this.config.trafficVolumn.ll
    const lr = this.config.trafficVolumn.lr
    const rl = this.config.trafficVolumn.rl
    const rr = this.config.trafficVolumn.rr
    const rand = Math.random()*100

    if (rand <= ll) { return MessageType.LL }
    if (rand <= ll + lr) { return MessageType.LR }
    if (rand <= ll + lr + rl) { return MessageType.RL }

    return MessageType.RR
  }

  generateEvents(n) {
    let arrival = 0

    for (let i=0; i<n; i++) {
      this.eventQueue.add(new EventMessage(i,
                                           arrival,
                                           Distribution.uniform(5, 9),
                                           this.rateMessageType(),
                                           MessageState.RECEPTION,
                                           this.config.sfaTaxs))

      arrival += Distribution.uniform(0, 1)
    }
  }

  start() {
   this.generateEvents(120)

   this.run()
  }

  run() {
    if(this.eventQueue.isEmpty()) {
      this.finish()

      return
    }

    let nextEvent = this.eventQueue.next()

    nextEvent.run(this.receptionCenter,
                  this.localServiceCenter,
                  this.remoteServiceCenter)

    setTimeout(() => {
      console.log(`execTime: ${nextEvent.execTime} msgId: ${nextEvent.id} state: ${nextEvent.state} type: ${nextEvent.type} localBusy: ${this.localServiceCenter.busyServers} remoteBusy: ${this.remoteServiceCenter.busyServers} localQueue: ${this.localServiceCenter.waitingQueue.length} remoteQueue: ${this.remoteServiceCenter.waitingQueue.length}`)
      this.run()
    }, 1)
  }

  finish() {
    console.log(`local -> success: ${this.localServiceCenter.success} failure: ${this.localServiceCenter.failure} delay: ${this.localServiceCenter.delay}`)
    console.log(`remote -> success: ${this.remoteServiceCenter.success} failure: ${this.remoteServiceCenter.failure} delay: ${this.remoteServiceCenter.delay}`)
  }
}

export default Simulator
