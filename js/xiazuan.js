var  myChartxz = echarts.init(document.getElementById('qgfl'), 'light');
var  option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: [    "喜悦",
    "积极",
    "愤怒",
    "伤感",
    "焦虑",
    "厌恶"],
    top:-5,
  },
  series: [
    {
      name: '情感分类',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value:6814, name: '正面情绪' },
        { value: 1997, name: '负面情绪' },
      ]
    },
    {
      name: '情感分类',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 22
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
{name:"喜悦",value:5134},
{name:"积极",value:1680},
{ name:"愤怒",value:31},
{ name:"伤感",value:439
},
{name:"焦虑",value:173},
{name:"厌恶",value:1354},

      ]
    }
  ]
};
myChartxz.setOption(option);