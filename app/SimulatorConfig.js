class SimulatorConfig {
  constructor(trafficVolumn, sfaTaxs, serviceCentre, arriveTime, serviceTime) {
    this.trafficVolumn = trafficVolumn
    this.sfaTaxs = sfaTaxs
    this.serviceCentre = serviceCentre
    this.arriveTime = arriveTime
    this.serviceTime = serviceTime
  }

  parseExpression(expression) {
  }

}

export default SimulatorConfig
