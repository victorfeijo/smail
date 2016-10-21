import { MessageType, MessageStatus } from './Enum'

export const Distribution = {
  normal: (a, b) => {
    const u1 = Math.random()
    const u2 = Math.random()

    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2*3.1415*u2)

    return a + b*z
  },
  uniform: (a, b) => {
    const u = Math.random()

    return a + u*(b-a)
  },
  triangular: (a, b, c) => {
    const u = Math.random()

    if (u <= (b-a)/(c-a)) {
      return a + Math.sqrt(u * (b-a) * (c-a))
    }

    return c - Math.sqrt((1-u) * (c-b) * (c-a))
  },
  expo: (l) => {
    const u = Math.random()

    return (-1/l) * Math.log(1-u)
  },
}

export const Sort = {
  messageType: (trafficVolumn) => {
    const ll = trafficVolumn.ll
    const lr = trafficVolumn.lr
    const rl = trafficVolumn.rl
    const rr = trafficVolumn.rr
    const rand = Math.random()*100

    if (rand <= ll) { return MessageType.LL }
    if (rand <= ll + lr) { return MessageType.LR }
    if (rand <= ll + lr + rl) { return MessageType.RL }

    return MessageType.RR
  },
  messageStatus: (sfaTaxs, type) => {
    let success = 0, failure = 0, delay = 0

    if (type === MessageType.LL) {
      success = sfaTaxs.success.ll
      failure = sfaTaxs.failure.ll
      delay = sfaTaxs.delay.ll
    }
    if (type === MessageType.LR) {
      success = sfaTaxs.success.lr
      failure = sfaTaxs.failure.lr
      delay = sfaTaxs.delay.lr
    }
    if (type === MessageType.RL) {
      success = sfaTaxs.success.rl
      failure = sfaTaxs.failure.rl
      delay = sfaTaxs.delay.rl
    }
    if (type === MessageType.RR) {
      success = sfaTaxs.success.rr
      failure = sfaTaxs.failure.rr
      delay = sfaTaxs.delay.rr
    }

    const rand = Math.random()*100

    if (rand <= success) {
      return MessageStatus.SUCCESS
    }
    else if (rand <= success + failure) {
      return MessageStatus.FAILURE
    }
    else if (rand <= success + failure + delay) {
      return MessageStatus.DELAY
    }
  }
}

export const Statistic = {
  min: (list) => {
    if (list.length === 0) { return 0 }

    return Math.min(...list)
  },
  max: (list) => {
    if (list.length === 0) { return 0 }

    return Math.max(...list)
  },
  med: (list) => {
    if (list.length === 0) { return 0 }

    let sum = 0
    list.forEach((value, index) => {
      sum += value
    })
    return sum/list.length
  },
  medPond: (hash, totalTime) => {
    let sum = 0
    for (let key in hash) {
      sum += (key * hash[key])/totalTime
    }

    return sum
  }
}

export const parseDistribution = (expression) => {
  let match = /(\w+)\((.*)\)/i.exec(expression)

  if (match === null) { return Distribution.uniform(3, 7) }

  const distribution = match[1]
  const params = match[2].split(';')

  if (distribution.toLowerCase() === 'normal') {
    if (params.length !== 2) { return 0 }

    return Distribution.normal(parseFloat(params[0]), parseFloat(params[1]))
  }
  else if (distribution.toLowerCase() === 'uniform') {
    if (params.length !== 2) { return 0 }

    return Distribution.uniform(parseFloat(params[0]), parseFloat(params[1]))
  }
  else if (distribution.toLowerCase() === 'triangular') {
    if (params.length !== 3) { return 0 }

    return Distribution.triangular(parseFloat(params[0]), parseFloat(params[1]), parseFloat(params[2]))
  }
  else if (distribution.toLowerCase() === 'expo') {
    if (params.length !== 1) { return 0 }

    return Distribution.expo(parseFloat(params[0]))
  }

  return 0
}
