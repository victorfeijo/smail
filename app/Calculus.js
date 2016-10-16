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

    return a - Math.sqrt((1-u) * (c-b) * (c-a))
  },
  expo: (l) => {
    const u = Math.random()

    return (-1/l) * Math.log(1-u)
  },
}
