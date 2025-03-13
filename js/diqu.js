var  myChartxz = echarts.init(document.getElementById('diqu'));
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
          { value: 45, name: '东北地区' },
          { value: 200, name: '华东地区' },
          { value: 293, name: '华北地区' },
          { value: 81, name: '华中地区' },
          { value: 118, name: '华南地区' },
          { value: 56, name: '西南地区' },
          { value:14, name: '西北地区' },
        ]
      }
    ]
  };
  myChartxz.setOption(option);
