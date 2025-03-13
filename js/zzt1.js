var  myChartxz = echarts.init(document.getElementById('zhuzhuangtu1'));
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
      data: ['喜欢','戏曲','电影','素素','好听','春晚','红娘','老师','好看','锁麟囊','国粹','文化','演员','艺术','游戏','舞台','传统','同光十三绝','戏剧','穆桂英'],
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
        data: [405,294,214,183,153,150,123,122,118,106,98,93,93,90,89,87,83,82,82,81],
        type: 'bar',
        color:'#3B9C9C'
      }
    ]
  };
  myChartxz.setOption(option);
