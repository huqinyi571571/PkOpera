var  myChartxz = echarts.init(document.getElementById('sjsl1'));
var option = {
  xAxis: {
    type: 'category',
    data: ['观看场所','政府支持力度','演员功底','社会氛围','内容创新','文化内涵','性价比','表演形式'],
   axisLabel: {
                  interval: 0,
                  // 垂直显示
                  rotate: 25
                }
    
  },
  tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [0.155,0.154,0.141,0.140,0.137,0.133,0.130,0.004],
      
      type: 'bar',
      color:"#C48189"
    }
  ]
};
  myChartxz.setOption(option);
