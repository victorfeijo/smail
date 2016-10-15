class EventQueue {
  constructor() {
    this.queue = new Array()
  }

  add(event) {
    for(let i = 0; i < this.queue.length; i++) {
      if (event.execTime < this.queue[i].execTime) {
        this.queue.splice(i, 0, event)

        return;
      }
    }

    this.queue.push(event);
  }

  next() {
    if (this.queue.length > 0) {
      return this.queue.pop()
    }
  }
}

export default EventQueue
