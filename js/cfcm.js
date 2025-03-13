var  myChartxz = echarts.init(document.getElementById('cfcm'));
var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['付费型宣传', '内容型宣传','人际型宣传'],
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
        name: '付费型宣传',
        type: 'bar',
        data: [21.66,20.05,25.37,27.35,5.57],
        color:'#98AFC7'
      },
      {
        name: '内容型宣传',
        type: 'bar',
        data: [
          17.08,20.30,29.33,23.76,9.53
        ],
        color:'#B5EAAA'
      },
      {
        name: '人际型宣传',
        type: 'bar',
        data: [
         25.5,23.39,21.66,19.31,10.15
        ],
        color:'#E8ADAA'
      }
    ]
  };
  myChartxz.setOption(option);
