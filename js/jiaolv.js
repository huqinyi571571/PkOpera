var  myChartxz = echarts.init(document.getElementById('jiaolv'), 'light');
var option = {
    title: {
      text: '焦虑情绪下的高频词top10',
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
      data: ['脸红', '害羞', '吓人', '震惊', '可怕', '恐怖','困难','小心','翻来覆去','害怕'],
      inverse:true,
      position:"right"
    },
    series: [
      {
        name: '出现频数',
        type: 'bar',
        data: [11,10,8,6,6,6,4,3,3,3]
      },
  
    ]
  };
  myChartxz.setOption(option);