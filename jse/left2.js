// 初始化echart实例对象
//
var left2Chart = echarts.init(document.getElementById('left2'), 'dark');

// 指定图表的配置项和数据
// ----------左2的配置项-------------------
// var option = {
//     title: {
//       text: '全国京剧演出城乡观众比例',
//       left: 'center'
//     },
    // tooltip: {
    //   trigger: 'item'
    // },
//     legend: {
//       orient: 'vertical',
//       left: 'left'
//     },
//     series: [
//       {
//         name: '京剧演出观众',
//         type: 'pie',
//         radius: '50%',
//         data: [
//           { value: 273.87, name: '城镇观众/万' },
//           { value: 526.2, name: '农村观众/万' }
//         ],
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           }
//         },
//         left: 0,
//         right: '66.6667%',
//         top: 0,
//         bottom: 0
//       },
//       {
//         name: '京剧演出观众',
//         type: 'pie',
//         radius: '70%',
        // data: [
        //   { value: 273.87, name: '城镇观众/万' },
        //   { value: 526.2, name: '农村观众/万' }
        // ],
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           }
//         },
//         left: '33.3333%',
//       right: '33.3333%',
//       top: 0,
//       bottom: 0
//       }
//     ]
//   };
// var chinaDayAddList = data.chinaDayAddList


// for (var day of chinaDayAddList) {
//     // 将每个省的累计确诊病例数添加到配置项的data中
//     option.xAxis[0].data.push(day.date)
//     option.series[0].data.push(day.confirm)
//     option.series[1].data.push(day.suspect)
// }

// 使用刚指定的配置项和数据显示图表。
var 
option = {
  title: [
    {
      text: '全国京剧演出场次及观众人次',
      left: 'center'
    },
    {
      subtext: '演出场次',
      left: '23.67%',
      top: '75%',
      textAlign: 'center'
    },

    {
      subtext: '观众人数/万人次',
      left: '75.33%',
      top: '75%',
      textAlign: 'center'
    }
  ],
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: [
              { value: 5400, name: '城镇' },
              { value: 7400, name: '农村' }
            ],
      left: 0,
      right: '50%',
      top: 0,
      bottom: 0
    },
    {
      type: 'pie',
      radius: '25%',
      center: ['50%', '50%'],
      data: [
              { value: 273.87, name: '城镇' },
              { value: 526.2, name: '农村' }
            ],
      left: '50%',
      right: 0,
      top: 0,
      bottom: 0
    }
  ]
};
left2Chart.setOption(option);
