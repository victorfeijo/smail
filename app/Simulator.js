import EventMessage from './EventMessage'
import EventQueue from './EventQueue'

class Simulator {
  constructor() {
    this.eventQueue = new EventQueue()
  }

  start() {
    this.eventQueue.add(new EventMessage(Math.random()*15, Math.random()*15))
    this.eventQueue.add(new EventMessage(Math.random()*15, Math.random()*15))
    this.eventQueue.add(new EventMessage(Math.random()*15, Math.random()*15))
    this.eventQueue.add(new EventMessage(Math.random()*15, Math.random()*15))

    console.log(this.eventQueue.queue)
    this.eventQueue.next()
    console.log(this.eventQueue.queue)
    this.eventQueue.next()
    this.eventQueue.next()
    console.log(this.eventQueue.queue)
    this.eventQueue.next()

    console.log(this.eventQueue.queue)
  }
}

export default Simulator
