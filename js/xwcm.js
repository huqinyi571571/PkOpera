var  myChartxz = echarts.init(document.getElementById('xwcm'));
var option = {
    tooltip: {
      trigger: 'axis',

    },
    legend: {
      data: ['愿意接触京剧', '愿意付费看京剧','愿意购买京剧文创产品'],
      left:'center',
      orient: 'vertical'
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
        data: ['完全不同意', '不太同意','不清楚','比较同意','完全同意']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '愿意接触京剧',
        type: 'bar',
        data: [3.84,11.88,15.84,49.63,18.81],
        color:'#98AFC7'
      },
      {
        name: '愿意付费看京剧',
        type: 'bar',
        data: [
          3.71,13.12,19.18,43.81,20.17
        ],
        color:'#B5EAAA'
      },
      {
        name: '愿意购买京剧文创产品',
        type: 'bar',
        data: [
        3.22,10.02,19.8,48.39,18.56
        ],
        color:'#E8ADAA'
      }
    ]
  };
  myChartxz.setOption(option);
