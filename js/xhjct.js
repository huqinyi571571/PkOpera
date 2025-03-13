var  myChartxz = echarts.init(document.getElementById('xhjct'));
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
        data: [5.47,1.62,12.05]
      },
      {
        name: '2',
        type: 'bar',
        data:[18.01,4.05,19.68]
      },
          {
        name: '3',
        type: 'bar',
        data: [12.86,2.02,56.63]
      },
      {
        name: '4',
        type: 'bar',
        data:[8.68,79.76,8.84]
      },
          {
        name: '5',
        type: 'bar',
        data:[54.98,12.55,2.81]
      },
    ]
  };
  myChartxz.setOption(option);
