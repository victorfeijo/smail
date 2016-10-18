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

  sortMessageType() {
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

  generateMessage() {
    const messageType = this.sortMessageType()
    let arrive = messageType.charAt(1) === 'L' ? Distribution.expo(this.config.arriveTime.local) : Distribution.expo(this.config.arriveTime.remote)
    let message = new EventMessage(++this.lastMessage.id,
                                   this.lastMessage.execTime + arrive,
                                   Distribution.uniform(2, 4),
                                   Distribution.uniform(5, 9),
                                   messageType,
                                   MessageState.RECEPTION,
                                   this.config.sfaTaxs)
    this.eventQueue.add(message)
    this.lastMessage = message
  }

  start() {
   this.lastMessage = new EventMessage(0,
                                       0,
                                       Distribution.uniform(2, 4),
                                       Distribution.uniform(5, 9),
                                       this.sortMessageType(),
                                       MessageState.RECEPTION,
                                       this.config.sfaTaxs)

   this.eventQueue.add(this.lastMessage)
   this.run()
  }

  run() {
    if(this.eventQueue.isEmpty() || this.currentTime > 1000) {
      this.finish()

      return
    }

    this.generateMessage()

    let nextEvent = this.eventQueue.next()
    this.currentTime = nextEvent.execTime

    nextEvent.run(this.receptionCenter,
                  this.localServiceCenter,
                  this.remoteServiceCenter)

    setTimeout(() => {
      let simLog = `ID: ${nextEvent.id} Estado: ${nextEvent.state} Tipo: ${nextEvent.type}`

      $('#simulation').append(`<option>${simLog}</option>`)

      let percent = `${parseInt(nextEvent.execTime/10)}%`
      $('#time').css('width', percent)

      this.run()
    }, 1)
  }

  finish() {
    console.log(`local -> success: ${this.localServiceCenter.success} failure: ${this.localServiceCenter.failure} delay: ${this.localServiceCenter.delay}`)
    console.log(`remote -> success: ${this.remoteServiceCenter.success} failure: ${this.remoteServiceCenter.failure} delay: ${this.remoteServiceCenter.delay}`)
  }
}

export default Simulator
