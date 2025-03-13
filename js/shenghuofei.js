var  myChartxz = echarts.init(document.getElementById('shf'));
var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {

      left: 'center'
    },
    series: [
      {
        name: '地区',
        type: 'pie',
        radius: ['35%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 113, name: '0~1000元' },
          { value: 588, name: '1500~3000元' },
          { value: 94, name: '3000~6000元' },
          { value: 12, name: '6000元以上' },
        ]
      }
    ]
  };
  myChartxz.setOption(option);
