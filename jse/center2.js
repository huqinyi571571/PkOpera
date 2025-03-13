// 初始化echart实例对象
var myChart = echarts.init(document.getElementById('center2'), 'dark');

//
//
//


// 指定图表的配置项和数据
var option = {
    title: {
        text: '中国各地区艺术表演团体机构数量',
        textStyle: {
            color: 'gold',
            fontStyle: 'normal',

        },
        left: 'center',
        top: '0px',
        bottom:'0px'
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{
                start: 0,
                end: 300
            },
            {
                start: 300,
                end: 600
            },
            {
                start: 600,
                end: 900
            },
            {
                start: 900,
                end: 1200
            },
            {
                start: 1200,
                end: 5000
            }
        ],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    series: [{
        name: '中国各地区艺术表演团体机构数量',
        type: 'map',
        mapType: 'china',
        roam: true, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data: [{name: '北京',value: 393 },{name: '天津',value:113 },
		{name: '上海',value: 315 },{name: '重庆',value: 1265 },
		{name: '河北',value: 770 },{name: '河南',value: 2391 },
		{name: '云南',value: 270 },{name: '辽宁',value: 186 },
		{name: '黑龙江',value: 82 },{name: '湖南',value: 631},
		{name: '安徽',value: 2334 },{name: '山东',value: 1566 },
		{name: '新疆',value: 122 },{name: '江苏',value: 620 },
		{name: '浙江',value: 1236 },{name: '江西',value: 380 },
		{name: '湖北',value: 441 },{name: '广西',value: 78 },
		{name: '甘肃',value: 347 },{name: '山西',value: 827 },
		{name: '内蒙古',value:204 },{name: '陕西',value: 591},
		{name: '吉林',value: 104 },{name: '福建',value: 558 },
		{name: '贵州',value: 200 },{name: '广东',value: 475 },
		{name: '青海',value: 122 },{name: '西藏',value: 87 },
		{name: '四川',value: 725 },{name: '宁夏',value: 30 },
		{name: '海南',value: 102 },{name: '台湾',value: 100 }] /*{'name': '上海','value': 318}, {'name': '云南','value': 162}*/
    }]
};

// // 获取中国各省市特区
// var provinces = data.areaTree[0].children

// // 遍历每一个省自治区、直辖市
// for (var province of provinces) {
//     // 将每个省的累计确诊病例数添加到配置项的data中
//     option.series[0].data.push({
//         'name': province.name,
//         'value': province.total.confirm
//     })
// }

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
