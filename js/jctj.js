var  myChartxz = echarts.init(document.getElementById('jctj'));
var option = {
    backgroundColor: '#F5F5DC',
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
    xAxis: {
      type: 'category',
      data: ['购买文创产品', '订阅相关媒体', '观看相关影视作品', '观看线下演出', '观看直播演出', 
      '京剧主题游戏', '参加相关课程','都不愿意'],
  
  
                axisLabel: {
                  interval: 0,
                  // 垂直显示
                  rotate: 25
                }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [396,296,309,378,363,292,339,20],
        type: 'bar',
        color:'#488AC7'
      }
    ]
  };
  myChartxz.setOption(option);
