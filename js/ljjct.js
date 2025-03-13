var  myChartxz = echarts.init(document.getElementById('ljjct'));
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
        data: [8.04,0.4,6.02]
      },
      {
        name: '2',
        type: 'bar',
        data:[10.29,4.86,20.88]
      },
          {
        name: '3',
        type: 'bar',
        data: [10.29,14.17,55.82]
      },
      {
        name: '4',
        type: 'bar',
        data:[61.09,19.84,14.46]
      },
          {
        name: '5',
        type: 'bar',
        data:[10.29,60.73,2.81]
      },
    ]
  };
  myChartxz.setOption(option);
