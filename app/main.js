import Simulator from './Simulator'
import SimulatorConfig from './SimulatorConfig'
import { Distribution, parse } from './Calculus'

// Smooth Scoll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

let trafficVolumn = () => {
  return {
    ll: parseFloat($('#trafficVolumnLL').val()),
    rr: parseFloat($('#trafficVolumnRR').val()),
    lr: parseFloat($('#trafficVolumnLR').val()),
    rl: parseFloat($('#trafficVolumnRL').val())
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
    center1: parseFloat($('#serviceCenter1').val()),
    center2: parseFloat($('#serviceCenter2').val()),
  }
}

let arriveTime = () => {
  return {
    local: parseFloat($('#arriveTime1').val()),
    remote: parseFloat($('#arriveTime2').val()),
  }
}

let serviceTime = () => {
  return {
    reception: {
      lls: parseFloat($('#receptionCenterLLS').val()),
      llf: parseFloat($('#receptionCenterLLF').val()),
      lla: parseFloat($('#receptionCenterLLA').val()),
      lrs: parseFloat($('#receptionCenterLRS').val()),
      lrf: parseFloat($('#receptionCenterLRF').val()),
      lra: parseFloat($('#receptionCenterLRA').val()),
      rls: parseFloat($('#receptionCenterRLS').val()),
      rlf: parseFloat($('#receptionCenterRLF').val()),
      rla: parseFloat($('#receptionCenterRLA').val()),
      rrs: parseFloat($('#receptionCenterRRS').val()),
      rrf: parseFloat($('#receptionCenterRRF').val()),
      rra: parseFloat($('#receptionCenterRRA').val())
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
  $('#pause').click(() => {
    sim.stop()
  })

  $('#stop').click(() => {
    sim.finish()
  })

  sim.start()
})
