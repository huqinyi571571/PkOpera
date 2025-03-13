// 初始化echart实例对象
//
var right1Chart = echarts.init(document.getElementById('right1'), 'dark');


// ----------右1的配置项-------------------
var option = {
    title: [{
      text: '国家大剧院年报数据（2021）',
      left: 'center',
    },
          {
          subtext: '各剧场场次比例',
          left: '25%',
          top: '75%',
          textAlign: 'center',
        },
        {
          subtext: '各艺术门类场次比例',
          left: '70%',
          top: '75%',
          textAlign: 'center'
        },
    ],
    
    tooltip: {
      trigger: 'axis'
    },
    radar: [
      {
        indicator: [
          { text: '歌剧院', max: 35 },
          { text: '音乐厅', max: 35 },
          { text: '戏剧场', max: 35 },
          { text: '小剧场', max: 35 }
        ],
        center: ['25%', '40%'],
        radius: 45
      },
      {
        indicator: [
          { text: '歌剧', max: 50 },
          { text: '音乐会', max: 50 },
          { text: '舞蹈', max: 50 },
          { text: '话剧', max: 50 },
          { text: '戏曲', max: 50 }
        ],
        radius: 50,
        center: ['70%', '40%']
      },
   
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        areaStyle: {},
        data: [
          {
            value: [19.6, 31.8, 23.4, 25.3],
            name: '场次比例'
          }
        ]
      },
      {
        type: 'radar',
              tooltip: {
          trigger: 'item'
        },
        radarIndex: 1,
        areaStyle: {},
        data: [
          {
            value: [10.6, 41.3, 11.6, 27.7, 8.8],
            name: '场次比例'
          },
        ]
      },
     
    ]
  };
// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);
