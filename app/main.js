class Event {
  constructor(execute, service) {
    this.execute = execute
    this.service = service
  }

  finishTime() {
    return this.execute + this.service
  }

  run() {
  }
}

class Simulator {
  constructor() {
    this.eventQueue = new Array()
  }

  generateEvents() {
    for(let i=0; i<100; i++) {
      this.eventQueue.push(new Event(Math.random()*15, Math.random()*15))
    }
  }

  start() {
    let currentTime = 0

    this.generateEvents()

    this.eventQueue.forEach((event, i) => {
      currentTime += event.finishTime()
      // $("#testanu").html( `Tempo Atual: ${currentTime}` )
    })

    $("#currentTime").html( `Tempo Atual: ${currentTime}` )
  }
}

$('#alert').click(() => { 
  let sim = new Simulator()
  sim.start()
})
