import Simulator from './Simulator'
import { Distribution } from './Calculus'

let trafficVolumn = () => {
  return {
    ll: $('#trafficVolumnLL').val(),
    rr: $('#trafficVolumnRR').val(),
    lr: $('#trafficVolumnLR').val(),
    rl: $('#trafficVolumnRL').val()
  }
}

let sfaTaxs = () => {
  return {
    sucess: {
      ll: $('#sTaxsLL').val(),
      rr: $('#sTaxsRR').val(),
      lr: $('#sTaxsLR').val(),
      rl: $('#sTaxsRL').val(),
    },
    failure: {
      ll: $('#fTaxsLL').val(),
      rr: $('#fTaxsRR').val(),
      lr: $('#fTaxsLR').val(),
      rl: $('#fTaxsRL').val(),
    },
    indentation: {
      ll: $('#aTaxsLL').val(),
      rr: $('#aTaxsRR').val(),
      lr: $('#aTaxsLR').val(),
      rl: $('#aTaxsRL').val(),
    }
  }
}

let serviceCenter = () => {
  return {
    center1: $('#serviceCenter1').val(),
    center2: $('#serviceCenter2').val()
  }
}

let arriveTime = () => {
  return {
    local: $('#arriveTime1').val(),
    remote: $('#arriveTime2').val()
  }
}

let serviceTime = () => {
  return {
    reception: {
      lls: $('#receptionCenterLLS').val(),
      llf: $('#receptionCenterLLF').val(),
      lla: $('#receptionCenterLLA').val(),
      lrs: $('#receptionCenterLRS').val(),
      lrf: $('#receptionCenterLRF').val(),
      lra: $('#receptionCenterLRA').val(),
      rls: $('#receptionCenterRLS').val(),
      rlf: $('#receptionCenterRLF').val(),
      rla: $('#receptionCenterRLA').val(),
      rrs: $('#receptionCenterRRS').val(),
      rrf: $('#receptionCenterRRF').val(),
      rra: $('#receptionCenterRRA').val(),
    },
    service: {
      lls: $('#serviceCenterLLS').val(),
      llf: $('#serviceCenterLLF').val(),
      lla: $('#serviceCenterLLA').val(),
      lrs: $('#serviceCenterLRS').val(),
      lrf: $('#serviceCenterLRF').val(),
      lra: $('#serviceCenterLRA').val(),
      rls: $('#serviceCenterRLS').val(),
      rlf: $('#serviceCenterRLF').val(),
      rla: $('#serviceCenterRLA').val(),
      rrs: $('#serviceCenterRRS').val(),
      rrf: $('#serviceCenterRRF').val(),
      rra: $('#serviceCenterRRA').val(),
    }
  }
}

$('#alert').click(() => {
  let sim = new Simulator()
  sim.start()

  console.log(trafficVolumn())
  console.log(sfaTaxs())
  console.log(serviceCenter())
  console.log(arriveTime())
  console.log(serviceTime())

  console.log(Distribution.normal(5, 15))
  console.log(Distribution.uniform(5, 15))
  console.log(Distribution.triangular(5, 10, 15))
  console.log(Distribution.expo(15))
})
