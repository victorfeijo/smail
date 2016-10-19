import EventMessage from './EventMessage'
import EventQueue from './EventQueue'
import ServiceCenter from './ServiceCenter'
import Reception from './Reception'
import { Distribution, Sort, parseDistribution } from './Calculus'
import { MessageType, MessageState, MessageStatus } from './Enum'

class Simulator {
  constructor(config) {
    this.config = config
    this.eventQueue = new EventQueue()
    this.localServiceCenter = new ServiceCenter(this.eventQueue, this.config.serviceCenter.center1)
    this.remoteServiceCenter = new ServiceCenter(this.eventQueue, this.config.serviceCenter.center2)
    this.receptionCenter = new Reception(this.eventQueue)
    this.currentTime = 0
    this.inMessages = 0
    this.outMessages = 0
    this.ll = 0
    this.lr = 0
    this.rl = 0
    this.rr = 0
    this.eventsCount = 0
    this.speed = 100
    this.stopped = false
  }

  // Big method because theres a lot of options to choose on users interface
  // Returns a object {reception, service} within time based on the type and status
  messageTimes(type, status) {
    if (type === MessageType.LL) {
      if (status === MessageStatus.SUCCESS) {
        return {
          reception: this.config.serviceTime.reception.lls,
          service: parseDistribution(this.config.serviceTime.service.lls)
        }
      }
      if (status === MessageStatus.FAILURE) {
        return {
          reception: this.config.serviceTime.reception.llf,
          service: parseDistribution(this.config.serviceTime.service.llf)
        }
      }
      if (status === MessageStatus.DELAY) {
        return {
          reception: this.config.serviceTime.reception.lla,
          service: parseDistribution(this.config.serviceTime.service.lla)
        }
      }
    }
    if (type === MessageType.LR) {
      if (status === MessageStatus.SUCCESS) {
        return {
          reception: this.config.serviceTime.reception.lrs,
          service: parseDistribution(this.config.serviceTime.service.lrs)
        }
      }
      if (status === MessageStatus.FAILURE) {
        return {
          reception: this.config.serviceTime.reception.lrf,
          service: parseDistribution(this.config.serviceTime.service.lrf)
        }
      }
      if (status === MessageStatus.DELAY) {
        return {
          reception: this.config.serviceTime.reception.lra,
          service: parseDistribution(this.config.serviceTime.service.lra)
        }
      }
    }
    if (type === MessageType.RL) {
      if (status === MessageStatus.SUCCESS) {
        return {
          reception: this.config.serviceTime.reception.rls,
          service: parseDistribution(this.config.serviceTime.service.rls)
        }
      }
      if (status === MessageStatus.FAILURE) {
        return {
          reception: this.config.serviceTime.reception.rlf,
          service: parseDistribution(this.config.serviceTime.service.rlf)
        }
      }
      if (status === MessageStatus.DELAY) {
        return {
          reception: this.config.serviceTime.reception.rla,
          service: parseDistribution(this.config.serviceTime.service.rla)
        }
      }
    }
    if (type === MessageType.RR) {
      if (status === MessageStatus.SUCCESS) {
        return {
          reception: this.config.serviceTime.reception.rrs,
          service: parseDistribution(this.config.serviceTime.service.rrs)
        }
      }
      if (status === MessageStatus.FAILURE) {
        return {
          reception: this.config.serviceTime.reception.rrf,
          service: parseDistribution(this.config.serviceTime.service.rrf)
        }
      }
      if (status === MessageStatus.DELAY) {
        return {
          reception: this.config.serviceTime.reception.rra,
          service: parseDistribution(this.config.serviceTime.service.rra)
        }
      }
    }
  }

  generateMessage() {
    const messageType = Sort.messageType(this.config.trafficVolumn)
    const messageStatus = Sort.messageStatus(this.config.sfaTaxs, messageType)
    const messageTimes = this.messageTimes(messageType, messageStatus)

    let arrive = messageType.charAt(1) === 'L' ? Distribution.expo(this.config.arriveTime.local) : Distribution.expo(this.config.arriveTime.remote)
    let message = new EventMessage(++this.lastMessage.id,
                                   this.lastMessage.execTime + arrive,
                                   messageTimes.reception,
                                   messageTimes.service,
                                   messageType,
                                   messageStatus,
                                   this.config.sfaTaxs,
                                   MessageState.RECEPTION)
    this.eventQueue.add(message)
    this.lastMessage = message
  }

  stop() {
    this.stopped = !this.stopped

    if (!this.stopped) { this.run () }
  }

  updateSpeed() {
    const speed = $('input[name=optionsRadio]:checked').val()
    if (speed === 'slow') { this.speed = 1000 }
    if (speed === 'med') { this.speed = 100 }
    if (speed === 'fast') { this.speed = 10 }
  }

  start() {
   const messageType = Sort.messageType(this.config.trafficVolumn)
   const messageStatus = Sort.messageStatus(this.config.sfaTaxs, messageType)

   this.lastMessage = new EventMessage(0,
                                       0,
                                       Distribution.uniform(2, 4),
                                       Distribution.uniform(5, 9),
                                       messageType,
                                       messageStatus,
                                       this.config.sfaTaxs,
                                       MessageState.RECEPTION)

   this.eventQueue.add(this.lastMessage)
   this.inMessages++
   this.updateSpeed()
   this.run()
  }

  run() {
    if (this.eventQueue.isEmpty()) {
      this.finish()

      return
    }
    this.generateMessage()

    let nextEvent = this.eventQueue.next()
    this.currentTime = nextEvent.execTime
    this.eventsCount++

    if (nextEvent.state === MessageState.FINISH && nextEvent.status !== MessageStatus.DELAY) { this.outMessages++ }
    if (nextEvent.state === MessageState.RECEPTION) { this.inMessages++ }

    nextEvent.run(this.receptionCenter,
                  this.localServiceCenter,
                  this.remoteServiceCenter)

    setTimeout(() => {
      let simLog = `Mensagem ID: ${nextEvent.id} Estado: ${nextEvent.state} Tipo: ${nextEvent.type} Status: ${nextEvent.status}`

      $('#simulation').append(`<option>${simLog}</option>`)

      $('#currentTime').html(nextEvent.execTime.toFixed(3))
      $('#inMessages').html(this.inMessages)
      $('#outMessages').html(this.outMessages)
      $('#actualMessages').html(this.inMessages - this.outMessages)
      $('#events').html(this.eventsCount)
      $('#ocpLocal').html(this.localServiceCenter.busyServers)
      $('#ocpRemote').html(this.remoteServiceCenter.busyServers)

      $('#successMessages').html(this.localServiceCenter.success + this.remoteServiceCenter.success)
      $('#failedMessages').html(this.localServiceCenter.failure + this.remoteServiceCenter.failure)
      $('#delayedMessages').html(this.localServiceCenter.delay + this.remoteServiceCenter.delay)
      $('#llMessages').html(this.ll)
      $('#lrMessages').html(this.lr)
      $('#rlMessages').html(this.rl)
      $('#rrMessages').html(this.rr)

      $('#time').css('width', `${parseInt(nextEvent.execTime/10)}%`)

      if (!this.stopped) { this.run() }
    }, this.speed)
  }

  finish() {
    // just to make share that will stop the sim
    this.eventQueue = new EventQueue()

    console.log(`local -> success: ${this.localServiceCenter.success} failure: ${this.localServiceCenter.failure} delay: ${this.localServiceCenter.delay}`)
    console.log(`remote -> success: ${this.remoteServiceCenter.success} failure: ${this.remoteServiceCenter.failure} delay: ${this.remoteServiceCenter.delay}`)
  }
}

export default Simulator
