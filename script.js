fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text')
        hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
        hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)

setInterval(function () {
    let time = new Date().getHours().toString().padStart(2, "0") + ":" + new Date().getMinutes().toString().padStart(2, "0")
    let elementtime = document.getElementById('time')
    elementtime.innerHTML = new Date().getHours().toString().padStart(2, "0") + ":" + new Date().getMinutes().toString().padStart(2, "0");
}, 1)

let m = new Date().getMonth()
var date = new Date().getFullYear() + '年' + parseInt(m + 1) + '月' + new Date().getDate() + '日';
document.getElementById("times").innerHTML = date;

let week = ['星期日','星期二','星期三','星期四','星期五','星期六','星期一']
let weekday = week[new Date().getDay()];
document.getElementById("xq").innerHTML = weekday;

function game(name){
    if (name == 2022) {
        
    } else {
        
    }
}