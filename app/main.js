import Simulator from './Simulator'

$('#alert').click(() => { 
  let sim = new Simulator()
  sim.start()
})
