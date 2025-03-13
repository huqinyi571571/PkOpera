// 祝词
var words=[
    '传承',
    '宣传',
    '创新',
    '希望',
    '文化',
    '取其精华',
    '中国',
    '与时俱进',
    '学习',
    '符合',
    '技术',
    '受众面',
    '更好',
    '内容',
    '发展',
    '弘扬',
    '相结合',
    '新兴',
    '感兴趣',
    '艺术',
    '提高',
    '群体',
    '加大',
    '媒体',
    '课程',
    '政府',
    '重视',
    '时代',
    '国粹',
    '形式',
    '戏曲',
    '元素',
    '剧场',
    '进校园',
    '任重道远',
    '当代',
    '社会',
    '传承者',
    '年轻人',
    '喜闻乐见',
    '因地制宜',
    '青少年',
    '平台',
    '承担',
    '潮流',
    '吸引',
    '优秀',
    '日常生活',
    '充分利用',
    '融入',
    '文创',
    '培养',
    '推广'];

// 生成指定范围随机数（保留小数点后两位）
function randomNum(min,max){
    var num = (Math.random() * (max - min +1 )+min).toFixed(2);
    return num;
}

//初始化函数
function init(){
    var container = document.querySelector(".jycyt");
    var f = document.createDocumentFragment();//创建文档片段对象

    words.forEach(w =>{
        var word_box=document.createElement('div');
        var word = document.createElement('div');

        word.innerText=w;
        word.classList.add('word');

        // 随机生成色相值（0为红色、120为绿色、240为蓝色、360为红色）
        var hue = randomNum(0,240);
        word.style.color='hsl('+hue+',100%,65%)';        

        word_box.classList.add("word-box");
        // 生成随机数值，并赋值给自定义属性
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');

        word_box.appendChild(word);
        f.appendChild(word_box);
    })
    container.appendChild(f);
}

// 绑定加载事件
window.addEventListener('load',init)