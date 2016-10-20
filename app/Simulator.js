import EventMessage from './EventMessage'
import EventQueue from './EventQueue'
import ServiceCenter from './ServiceCenter'
import Reception from './Reception'
import { Distribution, Sort, Statistic, parseDistribution } from './Calculus'
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
    this.transitTimes = new Array()
    this.sysMsgTimes = {}
    this.localServTimes = {}
    this.remoteServTimes = {}
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

  // Creates one message, sorting the type, status and creating times based on then
  generateMessage() {
    const messageType = Sort.messageType(this.config.trafficVolumn)
    const messageStatus = Sort.messageStatus(this.config.sfaTaxs, messageType)
    const messageTimes = this.messageTimes(messageType, messageStatus)

    let arrive = messageType.charAt(1) === 'L' ? Distribution.expo(this.config.arriveTime.local) : Distribution.expo(this.config.arriveTime.remote)
    let message = new EventMessage(++this.lastMessage.id,
                                   this.lastMessage.execTime + arrive,
                                   messageTimes.reception,
                                   messageTimes.service,
                                   this.lastMessage.execTime + arrive,
                                   messageType,
                                   messageStatus,
                                   this.config.sfaTaxs,
                                   MessageState.RECEPTION)
    this.eventQueue.add(message)
    this.lastMessage = message
  }

  // distribute in a hash table the msg system by the time
  distributeSysTimes(nextTime) {
    const currentMessages = this.inMessages - this.outMessages
    if (this.sysMsgTimes[currentMessages] === undefined) {
      this.sysMsgTimes[currentMessages] = nextTime - this.currentTime
    }
    else {
      this.sysMsgTimes[currentMessages] += nextTime - this.currentTime
    }
  }

  // distribute in a hash table the serv local/remote by the time
  distributeServTimes(nextTime) {
    const currentLocalServ = this.localServiceCenter.busyServers
    const currentRemoteServ = this.remoteServiceCenter.busyServers
    if (this.localServTimes[currentLocalServ] === undefined) {
      this.localServTimes[currentLocalServ] = nextTime - this.currentTime
    }
    else {
      this.localServTimes[currentLocalServ] += nextTime - this.currentTime
    }
    if (this.remoteServTimes[currentRemoteServ] === undefined) {
      this.remoteServTimes[currentRemoteServ] = nextTime - this.currentTime
    }
    else {
      this.remoteServTimes[currentRemoteServ] += nextTime - this.currentTime
    }
  }

  // call when tap the stop/play button
  stop() {
    this.stopped = !this.stopped

    if (!this.stopped) { this.run () }
  }

  // update simulation speed based on radio button checked
  updateSpeed() {
    const speed = $('input[name=optionsRadio]:checked').val()
    if (speed === 'slow') { this.speed = 1000 }
    if (speed === 'med') { this.speed = 100 }
    if (speed === 'fast') { this.speed = 10 }
  }

  // create the initial message, init run simulation
  start() {
   const messageType = Sort.messageType(this.config.trafficVolumn)
   const messageStatus = Sort.messageStatus(this.config.sfaTaxs, messageType)
   const messageTimes = this.messageTimes(messageType, messageStatus)

   this.lastMessage = new EventMessage(0,
                                       0,
                                       messageTimes.reception,
                                       messageTimes.service,
                                       0,
                                       messageType,
                                       messageStatus,
                                       this.config.sfaTaxs,
                                       MessageState.RECEPTION)

   this.eventQueue.add(this.lastMessage)
   this.inMessages++
   this.updateSpeed()
   this.run()
  }

  // recursive run method, takes the next event and run, update the view
  run() {
    if (this.eventQueue.isEmpty()) {
      this.finish()

      return
    }

    this.generateMessage()
    let nextEvent = this.eventQueue.next()
    this.distributeSysTimes(nextEvent.execTime)
    this.distributeServTimes(nextEvent.execTime)
    this.currentTime = nextEvent.execTime
    this.eventsCount++

    // out messages
    if (nextEvent.state === MessageState.FINISH && nextEvent.status !== MessageStatus.DELAY) {
      this.transitTimes.push(this.currentTime - nextEvent.enteredTime)
      this.outMessages++
    }

    // in messages
    if (nextEvent.state === MessageState.RECEPTION) {
      this.inMessages++
      if (nextEvent.type === MessageType.LL) { this.ll++ }
      if (nextEvent.type === MessageType.LR) { this.lr++ }
      if (nextEvent.type === MessageType.RL) { this.rl++ }
      if (nextEvent.type === MessageType.RR) { this.rr++ }
    }


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

      $('#minTransitTime').html(Statistic.min(this.transitTimes).toFixed(3))
      $('#maxTransitTime').html(Statistic.max(this.transitTimes).toFixed(3))
      $('#medTransitTime').html(Statistic.med(this.transitTimes).toFixed(3))
      $('#minMsgTime').html(Statistic.min(Object.keys(this.sysMsgTimes).map((v,i) => parseInt(v))))
      $('#medMsgTime').html(Statistic.medPond(this.sysMsgTimes, this.currentTime).toFixed(3))
      $('#maxMsgTime').html(Statistic.max(Object.keys(this.sysMsgTimes).map((v,i) => parseInt(v))))
      $('#medLocalServTime').html(Statistic.medPond(this.localServTimes, this.currentTime).toFixed(3))
      $('#medRemoteServTime').html(Statistic.medPond(this.remoteServTimes, this.currentTime).toFixed(3))

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
