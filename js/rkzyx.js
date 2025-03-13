var  myChartxz = echarts.init(document.getElementById('rkzyx'));
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
        data: [2.25,0.4,0]
      },
      {
        name: '2',
        type: 'bar',
        data:[7.72,2.43,4.82]
      },
          {
        name: '3',
        type: 'bar',
        data: [12.86,11.34,8.84]
      },
      {
        name: '4',
        type: 'bar',
        data:[55.63,55.47,12.05]
      },
          {
        name: '5',
        type: 'bar',
        data:[21.54,30.36,74.3]
      },
    ]
  };
  myChartxz.setOption(option);
