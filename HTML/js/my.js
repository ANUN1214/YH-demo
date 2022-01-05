function to() {
    var searchValue = document.getElementById("text").value;
    // alert(searchValue);
    window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd=" + searchValue;
}
var input =document.getElementById("text");
input.addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.keyCode === 13){//keyCode可能会在更新中被弃用
        document.getElementById("mybtn").click()
    }
}
)
var text = document.getElementById('text');
var search = document.getElementsByClassName('search')[0];
var oul = document.querySelector(".search ul");

// 每次键盘抬起
text.onkeyup = function () {
    // 获取输入框里面的内容
    var val = this.value;
    //如果输入框不为空，就显示ul，否则消失
    myul.style.display =this.value !="" ? "block" : "none";
    // 如果输入框中不为空，就让联想列表出现，否则消失
    search.style.display = this.value != "" ? "block" : "none";
    // 每次松开键盘，都要通过script标签向百度接口获取数据
    // 所以每次松开键盘都要生成一个script标签，通过src属性来跨域请求
    var sc = document.createElement("script");
    sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=lyl";
    document.body.appendChild(sc);
}
// data参数就是链接返回的json数据，data是一个对象,data.s就是我们找的联想词
function lyl(data) {
    // console.log(data);
    oul.innerHTML = "";//清空
    // 数组遍历forEach,里面有回调函数
    data.s.forEach(function (el) {
        // console.log(el);
        // 生成li
        var lis = document.createElement("li");
        // li链接到的地址<a href='https://www.baidu.com/s?wd=el
        lis.innerHTML = "<a href='https://www.baidu.com/s?wd=" + el + "'>" + el + "</a>";
        oul.appendChild(lis);
    })

}
