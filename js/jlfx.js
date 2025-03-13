var  myChartxz = echarts.init(document.getElementById('jlfx'));
var option = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
    //   orient: 'vertical',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 311, name: ' 类别1' },
          { value: 247, name: '类别2' },
          { value: 249, name: '类别3' },
    
        ],
        color:['#306EFF','pink','#FFA62F'],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChartxz.setOption(option);
