import Simulator from './Simulator'
import SimulatorConfig from './SimulatorConfig'
import { Distribution, parse } from './Calculus'

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
    success: {
      ll: parseFloat($('#sTaxsLL').val()),
      rr: parseFloat($('#sTaxsRR').val()),
      lr: parseFloat($('#sTaxsLR').val()),
      rl: parseFloat($('#sTaxsRL').val()),
    },
    failure: {
      ll: parseFloat($('#fTaxsLL').val()),
      rr: parseFloat($('#fTaxsRR').val()),
      lr: parseFloat($('#fTaxsLR').val()),
      rl: parseFloat($('#fTaxsRL').val()),
    },
    delay: {
      ll: parseFloat($('#aTaxsLL').val()),
      rr: parseFloat($('#aTaxsRR').val()),
      lr: parseFloat($('#aTaxsLR').val()),
      rl: parseFloat($('#aTaxsRL').val()),
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
  const config = new SimulatorConfig(trafficVolumn(),
                                     sfaTaxs(),
                                     serviceCenter(),
                                     arriveTime(),
                                     serviceTime())
  let sim = new Simulator(config)
  sim.start()
})
