var  myChartxz = echarts.init(document.getElementById('jgfcmx'));
var option = {
    // backgroundColor: '#FDEEF4',
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 50,

        label: {
          show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20
        },
        data: [
          {
            name: '行为',
            x: 720,
            y: 250
          },
          {
            name: '购买京剧文创产品',
            x: 850,
            y:220
          },
          {
            name: '付费观看京剧',
            x: 850,
            y: 300
          },
                 {
            name: '触发',
            x: 530,
            y:105
          },
                  {
            name: '人际型宣传',
            x: 320,
            y: 50,
          },
          {
            name: '内容型宣传',
            x: 320,
            y:100
          },
          {
            name: '付费型宣传',
            x: 320,
            y: 150
          },
          {
            name: '动机',
            x: 530,
            y: 250
          },
                  {
            name: '京剧相关课程或活动',
            x: 320,
            y:230
          },
          {
            name: '京剧氛围良好',
            x: 320,
            y: 280
          },
          {
            name: '能力',
            x: 530,
            y: 400
          },
                  {
            name: '有精力',
            x: 320,
            y: 340
          },
                  {
            name: '能负担费用',
            x: 320,
            y:390
          },
          {
            name: '有时间',
            x: 320,
            y: 440
          },
        ],
        // links: [],
        links: [
           {
            source: '能力',
            target: '有精力',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.734;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '能力',
            target: '能负担费用',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.748;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '能力',
            target: '有时间',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.721;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
           {
            source: '动机',
            target: '京剧相关课程或活动',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.699;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '动机',
            target: '京剧氛围良好',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.800;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '触发',
            target: '人际型宣传',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.814;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '触发',
            target: '内容型宣传',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.826;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '触发',
            target: '付费型宣传',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.860;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
           {
            source: '行为',
            target: '购买京剧文创产品',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.718;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
           {
            source: '行为',
            target: '付费观看京剧',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.768;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '动机',
            target: '行为',
       
            label: {
              show: true,
              formatter: function(params){
              return 0.276;}
              
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '触发',
            target: '行为',
            label: {
              formatter: function(params){
              return 0.206;
          },
              show: true
            },
            lineStyle: {
              curveness: 0.2
            }
          },
          {
            source: '能力',
            target: '行为',
            label: {
              formatter: function(params){
              return 1.049;
          },
              show: true
            },
            lineStyle: {
              curveness: 0.2
            }
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
      }
    ]
  };
  myChartxz.setOption(option);
