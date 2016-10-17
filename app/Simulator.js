import EventMessage from './EventMessage'
import EventQueue from './EventQueue'
import ServiceCenter from './ServiceCenter'
import Reception from './Reception'
import { Distribution } from './Calculus'
import { MessageType, MessageState } from './Enum'

class Simulator {
  constructor(config) {
    this.eventQueue = new EventQueue()
    this.localServiceCenter = new ServiceCenter(this.eventQueue)
    this.remoteServiceCenter = new ServiceCenter(this.eventQueue)
    this.receptionCenter = new Reception(this.eventQueue)
    this.currentTime = 0
    this.config = config
  }

  generateEvents(n) {
    let arrival = 0

    for (let i=0; i<n; i++) {
      this.eventQueue.add(new EventMessage(i, arrival, Distribution.uniform(5, 9), MessageType.LL, MessageState.RECEPTION))
      arrival += Distribution.uniform(7, 12)
    }
  }

  start() {
    this.generateEvents(5)

    this.run()
  }

  run() {
    if(this.eventQueue.isEmpty()) { return }

    let nextEvent = this.eventQueue.next()

    nextEvent.run(this.receptionCenter,
                  this.localServiceCenter,
                  this.remoteServiceCenter)

    setTimeout(() => {
      console.log(nextEvent.execTime)
      this.run()
    }, 1000)
  }
}

export default Simulator
