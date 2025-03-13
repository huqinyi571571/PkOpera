// 初始化echart实例对象
//
var right1Chart = echarts.init(document.getElementById('jjdzz'));


var data = {
    "name": "京剧发展",
    "children": [
        {
            "name": "非物质文化遗产",
            "children": [
                {
                    "name": "第一批国家级非物质文化遗产",
                },
                {
                    "name": "联合国教科文组织非物质文化遗产",
                },
            ]
        },
        {
            "name": "《关于支持戏曲传承发展若干政策的通知》",
            "children": [
                {"name": "加强戏曲保护与传承",children: [
            { name: '实施地方戏曲振兴工程'},
            { name: '传承保护京剧、昆曲'}]},
                {"name": "支持戏曲演出,加大政府购买力度"},
                {"name": "支持戏曲艺术表演团体发展"},
                {"name": "加大戏曲普及和宣传",children: [
            { name: '加强学校戏曲通识教育'},
            { name: '扩大戏曲社会影响力'}]}
            ]
        },
        {
            "name": "《国家重点京剧院团保护和扶持规划》",
            "children": [
                {"name": "京剧人才的培训和奖励"},
                 {"name": "京剧艺术进校园演出"}, {"name": "对国家重要指定性演出实行政府补贴"},
            ]
        },
        {
            "name": "《关于支持戏曲传承发展的实施意见》",
            "children": [
                {"name": "推动国家戏曲政策落地"},
                {"name": "推动戏曲艺术创新发展"},
            ]
        },
        {
            "name": "《“十四五”文化发展规划》",
            "children": [
                {"name": "政策扶持为戏曲注入生机活力"},
                {"name": "加强京剧剧院建设"}
            ]
        }
    ]
};

var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series:[
        
        {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],
            zoom:1.1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            top: '10%',
            left: '8%',
            bottom: '22%',
            right: '20%',

            symbolSize: 7,

            edgeShape: 'polyline',//控制是否为折线
            edgeForkPosition: '63%',
            initialTreeDepth: 3,

            lineStyle: {
                width: 2
            },

            label: {
                backgroundColor: '#fff',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: ' '
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);
