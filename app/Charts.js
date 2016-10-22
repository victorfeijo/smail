export const Charts = {
  medSysMsg: (data) => {
    let ctx = document.getElementById("medSysMsgChart");
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Tempo no Sistema',
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
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
  servTime: (local, remote) => {
    let ctx = document.getElementById('servTimesChart');
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Tempo Servidor Local',
          backgroundColor: "rgba(211,23,23,0.4)",
          borderColor: "rgba(211,23,23,1)",
          borderCapStyle: 'butt',
          data: local,
        },{
          label: 'Tempo Servidor Remoto',
          backgroundColor: "rgba(37,37,202,0.4)",
          borderColor: "rgba(37,37,202,1)",
          borderCapStyle: 'butt',
          data: remote,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Número de Servidores'
            },
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });
  },
  sfaPie: (data) => {
    let ctx = document.getElementById("sfaPie");
    let myLineChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Sucesso', 'Falha', 'Adiantamento'],
        datasets: [{
          label: 'Taxa de Conclusão ',
          backgroundColor: ["rgba(23,211,23,0.5)","rgba(211,23,211,0.5)","rgba(23,211,211,0.5)"],
          hoverBackgroundColor: ["rgba(23,211,23,0.9)","rgba(211,23,211,0.9)","rgba(23,211,211,0.9)"],
          data: data
        }]
      }
    })
  },
  typePie: (data) => {
    let ctx = document.getElementById("typePie");
    let myLineChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['LL', 'LR', 'RL', 'RR'],
        datasets: [{
          label: 'Taxa de Direcionamento',
          backgroundColor: ["rgba(211,23,23,0.5)","rgba(139,71,3,0.5)","rgba(211,211,23,0.5)","rgba(23,122,221,0.5)"],
          hoverBackgroundColor: ["rgba(211,23,23,0.9)","rgba(139,71,3,0.9)","rgba(211,211,23,0.9)","rgba(23,122,221,0.9)"],
          data: data
        }]
      }
    })
  },
  parseData: (hash) => {
    let data = new Array()

    for (let key in hash) {
      data.push({x: key, y: hash[key]})
    }

    return data
  }
}
