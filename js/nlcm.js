var  myChartxz = echarts.init(document.getElementById('nlcm'));
var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['有时间', '能承担费用','有精力'],
      left:'left'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['几乎没有', '较少','一般','较多','经常']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '有时间',
        type: 'bar',
        data: [3.47,12,23.27,50,11.26],
        color:'#98AFC7'
      },
      {
        name: '能承担费用',
        type: 'bar',
        data: [
         5.07,14.11,25,42.7,13.12
        ],
        color:'#B5EAAA'
      },
      {
        name: '有精力',
        type: 'bar',
        data: [
         3.59,15.72,20.54,45.17,14.98
        ],
        color:'#E8ADAA'
      }
    ]
  };
  myChartxz.setOption(option);
