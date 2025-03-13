// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById('left1'), 'dark');

// 指定图表的配置项和数据
// ----------左1的配置项-------------------
var option = {
    title: {
        text: "艺术表演团体观众数量趋势",
        textStyle: {
            color: 'white',
        },
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171C6'
            }
        },
    },
    //图例
    legend: {
        data: ['全国艺术表演团体观众（万人次）', "艺术表演团体农村观众人次（万人次）"],
        left: "right",
        top: 23,
    },
    //图形位置
    grid: {
        left: '4%',
        right: '6%',
        bottom: '4%',
        top: 50,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'] //['03.20', '03.21', '03.22']
    }],
    yAxis: [{
        type: 'value',
        //y轴字体设置
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function(value) {
                if (value >= 1000) {
                    value = value / 1000 + 'k';
                }
                return value;
            }
        },
        //y轴线设置显示
        axisLine: {
            show: true
        },
        //与x轴平行的线样式
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid',
            }
        }
    }],
    series: [{
        name: "全国艺术表演团体观众（万人次）",
        type: 'line',
        smooth: true,
        data: [87778.5,73636.9,82441.71,89521.77,90558.35,95399.14,117833.02,124484.58,117269.2,122724.46,88871.29] //[260, 406, 529]
    }, {
        name: "艺术表演团体农村观众人次（万人次）",
        type: 'line',
        smooth: true,
        data: [56263.7,43797.7,52090.17,52886.84,55787.41,58403.03,61999.67,82939.05,77864.69,76780.6,32535.29] //[25, 25, 25]
    }]
};


// var chinaDayList = data.chinaDayList

// // 遍历每一天的数据
// for (var day of chinaDayList) {
//     // 将每天的累计确诊病例数添加到配置项的data中
//     option.xAxis[0].data.push(day.date)
//     option.series[0].data.push(day.confirm)
//     option.series[1].data.push(day.heal)
//     option.series[2].data.push(day.dead)
// }

// 使用刚指定的配置项和数据显示图表。
left1Chart.setOption(option);