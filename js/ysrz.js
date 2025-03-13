var  myChartxz = echarts.init(document.getElementById('ysrz'));
var option = {
    backgroundColor: '#FDEEF4',
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
    
    color:['#4863A0'],
    radar: {
        radius: '70%',
      splitArea:{		
         areaStyle:{
             color:['#F0FFFF','#FFF8DC']
         }
      },
      
      splitLine:{
         lineStyle:{
             color:['rgba(0,200,0,0.1)'],
             width:2
         }
      },
      // shape: 'circle',
      indicator: [
        { name: ' 内容创新', max: 5 },
        { name: '性价比', max: 5 },
        { name: '社会氛围', max: 5 },
        { name: ' 政府支持力度', max: 5 },
        { name: '观看场所', max: 5 },
              { name: '演员功底', max: 5 },
        { name: ' 文化内涵', max: 5 },
        { name: '表演形式', max: 5 }
      ]
    },
    series: [
      {
        name: '程度递进等级',
        type: 'radar',
        data: [
          {
            value: [4.13,4.08,4.09,4.06,3.95,4.27,4.27,4.32],
            name: '等级'
          },
          
  
        ]
      }
    ]
  };
  myChartxz.setOption(option);
