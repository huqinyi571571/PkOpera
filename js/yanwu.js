var  myChartxz = echarts.init(document.getElementById('yanwu'), 'light');
var option = {
    title: {
      text: '厌恶情绪下的高频词top10',
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
      data: ['疯狂', '退缩', '不好', '滑稽', '无聊', '离谱','丑角','麻烦','尴尬','单一'],
    //   inverse:true,
    //   position:"right"
    },
    series: [
      {
        name: '出现频数',
        type: 'bar',
        data: [16,15,15,15,14,14,14,14,14,12]
      },
  
    ]
  };
  myChartxz.setOption(option);