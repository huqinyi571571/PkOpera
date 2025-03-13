var  myChartxz = echarts.init(document.getElementById('shanggan'), 'light');
var option = {
    title: {
      text: '伤感情绪下的高频词top10',
      left:"center"
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    //   inverse:true,
    //   position:"right"
    },
    yAxis: {
      type: 'category',
      data: ['可惜', '朝思暮想', '纪念', '逝世', '缅怀', '回忆','难受','回顾','遗憾','眼泪'],
    //   inverse:true,
    //   position:"right"
    },
    series: [
      {
        name: '出现频数',
        type: 'bar',
        data: [25,24,18,14,14,12,9,9,8,7]
      },
  
    ]
  };
  myChartxz.setOption(option);