var  myChartxz = echarts.init(document.getElementById('fennu'), 'light');
var option = {
    title: {
      text: '愤怒情绪下的高频词top10',
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
      inverse:true,
      position:"right"
    },
    yAxis: {
      type: 'category',
      data: ['变脸', '活该', '出气', '狠劲', '脾气', '报仇','疾恶如仇','逼上梁山','气愤','宣泄'],
      inverse:true,
      position:"right"
    },
    series: [
      {
        name: '出现频数',
        type: 'bar',
        data: [11,3,3,3,2,1,1,1,1,1]
      },
  
    ]
  };
  myChartxz.setOption(option);