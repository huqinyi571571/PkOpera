var  myChartxz = echarts.init(document.getElementById('rzcd'));
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
        { name: '对京剧的了解程度', max: 5 },
        { name: '认为京剧应该得到传承', max: 5 },
        { name: '对目前京剧发展的满意程度', max: 5 },
        { name: ' 对京剧的喜爱程度', max: 5 },
        { name: '对京剧传承的关心程度', max: 5 }
      ]
    },
    series: [
      {
        name: '程度递进等级',
        type: 'radar',
        data: [
          {
            value: [3.55,4.28,3.58,3.59,3.58],
            name: '等级'
          },
          
  
        ]
      }
    ]
  };
  myChartxz.setOption(option);
