var  myChartxz = echarts.init(document.getElementById('zhuzhuangtu'));
var option = {
    title: {
        text: '关键词top20',
        left: 'center',
    },
    tooltip: {
        trigger: 'item'
      },
    xAxis: {
      type: 'category',
      data: ['演员', '戏曲', '艺术', '文化', '喜欢', '中国', '北京','老师', '春晚', '传统', '演出', '舞台', '张云雷', '演唱','电影', '表演', '观众', '节目', '声声慢', '满江红'],
      axisLabel: {  
        interval:0,
        formatter:function(value)  
        {  
            return value.split("").join("\n");  
        }
    }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [1485,1380,1342,1307,1204,1195,1091,1049,1039,1030,1001,967,880,713,673,672,583,493,470,468],
        type: 'bar',
        color:'#E77471',
      }
    ]
  };
  myChartxz.setOption(option);
