// 获取红圈柱子
let d1 = document.querySelector('.img-eight');
let d2 = document.querySelector('.img-ten');
let d3 = document.querySelector('.img-fifteen');
let d4 = document.querySelector('.img-nineteen')
// 获取鸽子
let gz = document.querySelector(".gz");
let gz1 = document.querySelector(".gz1");
// 获取一段柱子
let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')
let d = document.querySelector('.d')
// 获取电话 WiFi柱子
let w1 = document.querySelector('.w1')
let w2 = document.querySelector('.w2')
let w3 = document.querySelector('.w3')
// 获取箭头
let bg = document.querySelector('.bg-six')
// 摩天轮动画
let mtl = document.querySelector(".img-twenty-six img")
// 获取红旗 阁楼柱子
let t = document.querySelector(".img-twenty-one")
let t1 = document.querySelector(".img-twenty-three")
let t2 = document.querySelector(".img-twenty-five")
let t3 = document.querySelector(".img-twenty-six")
// 获取光圈
let gq = document.querySelector('.gq')
let gq1 = document.querySelector('.gq1')
let gq2 = document.querySelector('.gq2')
let gq3 = document.querySelector('.gq3')
// 获取音频
let au1 = document.querySelector('.au1')
let au2 = document.querySelector('.au2')
let au3 = document.querySelector('.au3')
let au4 = document.querySelector('.au4')
// 获取文字内容
let con = document.querySelector('.cont-one')
let con1 = document.querySelector('.cont-two')
let tu = document.querySelector('.tu')
// 获取背景图
let back = document.querySelector('.bg')
let bg1 = document.querySelector('.bg-one')
let bg2 = document.querySelector('.bg-two')
let img = document.querySelector('.img')
let drop = document.querySelector('.drop')
// 获取第三部分内容
let foored = document.querySelector('.foored')
let fl = true
let gez
let mt




// 封装摩天轮旋转动画
function mtl1() {
    let i = 1;
    mt = setInterval(() => {
        if (i > 3) i = 1;
        mtl.setAttribute('src', `../images/z18${i}.png`)
        i++
    }, 100)
}
// 封装鸽子走路函数
function ge(x) {
    let fz = 1;
    gez = setInterval(() => {
        if (fz > 5) fz = 1
        gz.setAttribute('src', `../images/gz${x}${fz}.png`)
        fz++
    }, 100)
}
// 封装鸽子转弯
function zw(a, b) {
    let zw = setTimeout(() => {
        clearInterval(gez)
        ge(a)
    }, b)
}
// 上滑显示内容
function nr(a, b, c, d) {
    let nr = setTimeout(() => {
        a.setAttribute('class', 'cont1')
        b.setAttribute('class', 'con1')
        c.style.display = "block"
        a.innerHTML = "1997年12月01日<br>你成为江西移动用户"
        b.innerHTML = "点击光圈 小鸽子会走动"
    }, d)
}
// 显示和隐藏
function xs(a, b) {
    let xs = setTimeout(() => {
        a.style.display = "block";
    }, b)
}
function yc(a, b) {
    let xs = setTimeout(() => {
        a.style.display = "none";
    }, b)
}
// 封装关闭音频
function yin(a,b) {
    let yin=setTimeout(()=>{
        a.pause()
    },b)
}
// 第一段点击显示内容
function nr1(b, c, d, e) {
    let nr1 = setTimeout(() => {
        clearInterval(gez)
        fl = true
        au4.pause()
        xs(w1, 100)
        gz.setAttribute('src', `../images/gz${1}${1}.png`)
        b.setAttribute('class', 'cont2')
        c.setAttribute('class', 'con2')
        d.setAttribute('src', '../images/top2.png')
        d.style.display = "block"
        b.innerHTML = "2017年<br>累计通话时长达5600分钟"
        c.innerHTML = "生命不息，交流不止，点赞善于沟通的你"
        w1.style.display="block"
        xs(a, 2000)
        au2.play()
        yin(au2,5000)
        xs(gq1, 6000)
    }, e);
}
// 上滑
setTimeout(()=>{
    bg.style.display='block'
    document.ontouchmove = function () {
        // au2.play()
        bg.style.display = "none";
        t.style.display = "block"
        t1.style.display = "block"
        t2.style.display = "block"
        t3.style.display = "block"
        au1.pause()
        xs(d, 3000)

        nr(con, con1, gq, 8000)
    }
},3000)
// 调用摩天轮函数
mtl1();
// 第一段鸽子
gq.onclick = function () {
    if (fl) {
        fl = false;
        au4.play();
        gq.style.display = "none";
        gz1.setAttribute("class", "gz1 move1")
        ge(0)
        zw(1, 1650)
        zw(0, 3250)
        zw(1, 5650)
        nr1(con, con1, tu, 7850)
    }
}
gq1.onclick = function () {
    if (fl) {
        fl = false
        au4.play()
        gq1.style.display = "none";
        gz1.setAttribute("class", "gz1 move2")
        ge(0)
        zw(1, 600)
        setTimeout(() => {
            clearInterval(gez)
            w2.style.display = 'block'
            au2.play()
            au4.pause()
            gz.setAttribute('src', `../images/gz${1}${1}.png`)
            fl = true
            tu.setAttribute('src', '../images/top3.png')
            tu.style.display = "block"
            con.innerHTML = "2017年<br>流量使用了5000M"
            con1.innerHTML = "相当于看了999本书，有流量的日子真美好！"
            
        }, 4400);
        setTimeout(() => {
            b.style.display = "block"
            function gzy(params) {
                
            }
            // 鸽子瞬移
            d1.onclick = function () {
                gz1.setAttribute('class', 'gz1 yi')
                gz.setAttribute('src', `../images/gz${1}${1}.png`)
                con.setAttribute('class', 'cont2')
                con1.setAttribute('class', 'con2')
                tu.setAttribute('src', '../images/top2.png')
                tu.style.display = "block"
                con.innerHTML = "2017年<br>累计通话时长达5600分钟"
                con1.innerHTML = "生命不息，交流不止，点赞善于沟通的你"
            }
            
            d2.onclick = function () {
                gz1.setAttribute('class', 'gz1 yi1')
                gz.setAttribute('src', `../images/gz${1}${1}.png`)
                tu.setAttribute('src', '../images/top3.png')
                tu.style.display = "block"
                con.innerHTML = "2017年<br>流量使用了5000M"
                con1.innerHTML = "相当于看了999本书，有流量的日子真美好！"
            }
            yin(au2,3000)
            xs(gq2, 4600)
        }, 7000)


    }
}
gq2.onclick = function () {
    if (fl) {
        fl = false
        au4.play()
        gq2.style.display = "none";
        gz1.setAttribute("class", "gz1 move3")
        ge(2)
        zw(3,1600)
        zw(2,2700)
        setTimeout(() => {
            clearInterval(gez)
            w3.style.display = 'block'
            au4.pause()
            gz.setAttribute('src', `../images/gz${2}${1}.png`)
            
            tu.style.display = "none"
            con1.style.top = "2.7rem"
            con.setAttribute('class', 'cont1')
            con1.setAttribute('class', 'con2')
            con.innerHTML = "2017年<br>全年话费999元，<br>其中获得优惠200元"
            con1.innerHTML = "2017年江西移动为全省200位移粉赠<br>送的优惠相当于双11一小时交易额。"
            xs(c,2000)
            au2.play()
            yin(au2,5000)
            xs(d4,2000)  
            xs(gq3,6000)
            
            d3.onclick = function () {
                gz1.setAttribute('class', 'gz1 yi2')
                gz.setAttribute('src', `../images/gz${2}${1}.png`)
                tu.style.display = "none"
                con1.style.top = "2.7rem"
                con.setAttribute('class', 'cont1')
                con1.setAttribute('class', 'con2')
                con.innerHTML = "2017年<br>全年话费999元，<br>其中获得优惠200元"
                con1.innerHTML = "2017年江西移动为全省200位移粉赠<br>送的优惠相当于双11一小时交易额。"
            }
            fl = true
        }, 5000);
    }
}
gq3.onclick = function () {
    if (fl) {
        fl = false
        au4.play()
        gq3.style.display = "none";
        gz1.setAttribute("class", "gz1 move4")
        ge(3)
        zw(0,1900)
        setTimeout(() => {
            clearInterval(gez)
            au4.pause()
            au3.play()
            // c.style.display = "block"
            fl = true;
            gz1.setAttribute('class', 'gz1')
            gz1.style.animation = "rise1 3s forwards"
            back.style.animation = 'back 5s forwards';
            d4.style.animation = "rise 3s forwards";  
        }, 3400);
        setTimeout(() => {
            gz.setAttribute('src', `../images/gz${3}${1}.png`)
            bg1.style.display = "none"
            bg2.style.display = "none"
            img.style.animation = 'drop 3s forwards'
            drop.style.animation = 'drop1 3s forwards'
        }, 4400)
        yin(au3,9400)
        xs(foored,8400)
    }

}


