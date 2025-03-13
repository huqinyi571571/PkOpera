// (function(){
//   // var myChartxz= echarts.init(document.querySelector('.mainx'));
//   var myChartxz = echarts.init(document.getElementById('right2'), 'dark');
//   option = {
//       xAxis: {
//         data: ['Animals', 'Fruits', 'Cars']
//       },
//       yAxis: {},
//       dataGroupId: '',
//       animationDurationUpdate: 500,
//       series: {
//         type: 'bar',
//         id: 'sales',
//         data: [
//           {
//             value: 5,
//             groupId: 'animals'
//           },
//           {
//             value: 2,
//             groupId: 'fruits'
//           },
//           {
//             value: 4,
//             groupId: 'cars'
//           }
//         ],
//         universalTransition: {
//           enabled: true,
//           divideShape: 'clone'
//         }
//       }
//     };
//     const drilldownData = [
//       {
//         dataGroupId: 'animals',
//         data: [
//           ['Cats', 4],
//           ['Dogs', 2],
//           ['Cows', 1],
//           ['Sheep', 2],
//           ['Pigs', 1]
//         ]
//       },
//       {
//         dataGroupId: 'fruits',
//         data: [
//           ['Apples', 4],
//           ['Oranges', 2]
//         ]
//       },
//       {
//         dataGroupId: 'cars',
//         data: [
//           ['Toyota', 4],
//           ['Opel', 2],
//           ['Volkswagen', 2]
//         ]
//       }
//     ];
//     myChartxz.on('click', function (event) {
//       if (event.data) {
//         var subData = drilldownData.find(function (data) {
//           return data.dataGroupId === event.data.groupId;
//         });
//         if (!subData) {
//           return;
//         }
//         myChartxz.setOption({
//           xAxis: {
//             data: subData.data.map(function (item) {
//               return item[0];
//             })
//           },
//           series: {
//             type: 'bar',
//             id: 'sales',
//             dataGroupId: subData.dataGroupId,
//             data: subData.data.map(function (item) {
//               return item[1];
//             }),
//             universalTransition: {
//               enabled: true,
//               divideShape: 'clone'
//             }
//           },
//           graphic: [
//             {
//               type: 'text',
//               left: 50,
//               top: 20,
//               style: {
//                 text: 'Back',
//                 fontSize: 18
//               },
//               onclick: function () {
//                 myChartxz.setOption(option);
//               }
//             }
//           ]
//         });
//       }
//     });
//   myChartxz.setOption(option);
// })();
// 初始化echart实例对象
var  myChartxz = echarts.init(document.getElementById('right2'), 'dark');
var  option = {
    title:{
        text: '各制度下京剧团体数量',
        left:'center'
    },
    tooltip: {
        trigger: 'axis'
      },
  xAxis: {
    data: ['公有制', '文化部门', '事业制度','企业制度','非公有制'],
    axisLabel: {  
      interval:0,
                rotate:-30  //倾斜的程度
            }
  },
  yAxis: {},
  dataGroupId: '',
  animationDurationUpdate: 500,
  series: {
    type: 'bar',
    id: 'sales',
    data: [
      {
        value: 56,
        groupId: '公有制'
      },
      {
        value: 55,
        groupId: '文化部门'
      },
      {
        value: 38,
        groupId: '事业制度'
      },
      {
        value: 17,
        groupId: '企业制度'
      },
      {
        value: 85,
        groupId: '非公有制'
      }
    ],
    universalTransition: {
      enabled: true,
      divideShape: 'clone'
    }
  }
};
const drilldownData = [
  {
    dataGroupId: '公有制',
    data: [
      ['从业人员', 5247],
      ['演出收入', 98134],
    ]
  },
  {
    dataGroupId: '文化部门',
    data: [
        ['从业人员', 4940],
        ['演出收入', 89147],
    ]
  },
  {
    dataGroupId: '事业制度',
    data: [
        ['从业人员', 3637],
        ['观众人次/百', 38890],
    ]
  },
  {
    dataGroupId: '企业制度',
    data: [
        ['从业人员', 1303],
        ['观众人次/百', 13091],
    ]
  },
  {
    dataGroupId: '非公有制',
    data: [
        ['从业人员', 2666],
        ['演出收入', 28482],
    ]
  }
];
myChartxz.on('click', function (event) {
  if (event.data) {
    var subData = drilldownData.find(function (data) {
      return data.dataGroupId === event.data.groupId;
    });
    if (!subData) {
      return;
    }
    myChartxz.setOption({
      xAxis: {
        data: subData.data.map(function (item) {
          return item[0];
        })
      },
      series: {
        type: 'bar',
        id: 'sales',
        dataGroupId: subData.dataGroupId,
        data: subData.data.map(function (item) {
          return item[1];
        }),
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      },
      graphic: [
        {
          type: 'text',
          left: 50,
          top: 20,
          style: {
            text: '返回',
          },
          onclick: function () {
            myChartxz.setOption(option);
          }
        }
      ]
    });
  }
});
myChartxz.setOption(option);