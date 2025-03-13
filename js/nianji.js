var  myChartxz = echarts.init(document.getElementById('nianji'));
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
          { value: 98, name: '大一' },
          { value:230, name: '大二' },
          { value: 298, name: '大三' },
          { value:135, name: '大四' },
          { value: 46, name: '研究生' },
        
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
