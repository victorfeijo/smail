export const Distribution = {
  normal: (a, b) => {
    const u1 = Math.random()
    const u2 = Math.random()

    const z = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2*180*u2)

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

export const parseDistribution = (expression) => {
  let match = /(\w+)\((.*)\)/i.exec(expression)
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
