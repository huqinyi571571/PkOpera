var  myChartxz = echarts.init(document.getElementById('ffyy'));
var option = {

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['类别1','类别2','类别3']
    },
    series: [
      {
        name: '1',
        type: 'bar',
        data: [6.11,0,4.42]
      },
      {
        name: '2',
        type: 'bar',
        data:[13.5,2.02,23.69]
      },
          {
        name: '3',
        type: 'bar',
        data: [23.15,11.34,21.69]
      },
      {
        name: '4',
        type: 'bar',
        data:[23.79,68.83,44.18]
      },
          {
        name: '5',
        type: 'bar',
        data:[33.44,17.81,6.02]
      },
    ]
  };
  myChartxz.setOption(option);
