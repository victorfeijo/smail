export const Charts = {
  medSysMsg: (data) => {
    let ctx = document.getElementById("medSysMsgChart");
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Tempo da Mensagem no Sistema',
          data: data,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Número de Mensagens no Sistema'
            },
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });
  },
  parseData: (hash) => {
    let data = new Array()

    for (let key in hash) {
      data.push({x: key, y: hash[key]})
    }

    return data
  }
}
