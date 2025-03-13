var  myChartxz = echarts.init(document.getElementById('zcfs'));
var option = {
    backgroundColor: '#F5F5DC',
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
    xAxis: {
      type: 'category',
      data: ['京剧文创产品', '京剧相关公众号', '京剧相关影视作品', '线下京剧演出', '直播京剧演出', '网络推文', '学校相关课程','广播宣传','未曾接触京剧'],
  
  
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
        data: [394,353,330,283,283,272,256,222,24],
        type: 'bar',
        color:'#ECC5C0'
      }
    ]
  };
  myChartxz.setOption(option);
