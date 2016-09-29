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

export default Event
