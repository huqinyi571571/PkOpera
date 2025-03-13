var  myChartxz = echarts.init(document.getElementById('zhuanye'));
var option = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'horizontal',
      left: 'center'
    },
    series: [
      {
        name: '年级',
        type: 'pie',
        radius: '45%',
        data: [
          { value: 157, name: '经管类' },
          { value:192, name: '文史类' },
          { value: 258, name: '理工类' },
          { value:67, name: '农医类' },
          { value: 104, name: '艺术与教育类' },
          { value: 29, name: '其他' }
        
        ],
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
