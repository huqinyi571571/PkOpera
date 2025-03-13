var  myChartxz = echarts.init(document.getElementById('sex'));
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
        name: '性别',
        type: 'pie',
        radius: '45%',
        data: [
          { value: 314, name: '男' },
          { value:493, name: '女' },
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
