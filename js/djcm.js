var  myChartxz = echarts.init(document.getElementById('djcm'));
var option = {
    tooltip: {
      trigger: 'axis',

    },
    legend: {
      data: ['身边京剧氛围良好', '学校开展过京剧相关活动','认为京剧传承非常重要'],
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
        name: '身边京剧氛围良好',
        type: 'bar',
        data: [8.54,20.79,17.7,37.25,15.72],
        color:'#98AFC7'
      },
      {
        name: '学校开展过京剧相关活动',
        type: 'bar',
        data: [
          8.79,13.12,19.55,42.33,16.21
        ],
        color:'#B5EAAA'
      },
      {
        name: '认为京剧传承非常重要',
        type: 'bar',
        data: [
         0.99,5.2,11.14,42.08,40.59
        ],
        color:'#E8ADAA'
      }
    ]
  };
  myChartxz.setOption(option);
