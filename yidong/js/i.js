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
let bg = document.querySelector('.bg-six img')
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
setTimeout(() => {
    
    bg.style.display = "block";
    
    document.ontouchmove = function () {
        
        bg.style.display = "none";
        t.style.display = "block"
        t1.style.display = "block"
        t2.style.display = "block"
        t3.style.display = "block"
        au1.pause()
        setTimeout(() => {
            au2.play()
            d.style.display = "block"
            // au2.pause()
            setTimeout(() => {
                au2.pause()
                con.setAttribute('class','cont1')
                con1.setAttribute('class','con1')
                gq.style.display = "block"
                
                con.innerHTML="1997年12月01日<br>你成为江西移动用户"
                con1.innerHTML="点击光圈 小鸽子会走动"
            }, 5000)
        }, 3000)

    }
}, 3000)
// 点击鸽子移动
// gq.onclick = function () {
//     if (fl) {
//         fl = false;
//         au4.play()
//         gq.style.display = "none";
//         gz1.setAttribute("class", "gz1 move1")
//         ge(0)
//         setTimeout(() => {
//             clearInterval(gez)
//             ge(1)
//             setTimeout(() => {
//                 clearInterval(gez)
//                 ge(0)
//                 setTimeout(() => {
//                     clearInterval(gez)
//                     ge(1)
//                     setTimeout(() => {
//                         clearInterval(gez)
//                         au4.pause()
//                         w1.style.display = 'block'
//                         gz.setAttribute('src', `../images/gz${1}${1}.png`)
//                         fl = true
//                         con.setAttribute('class','cont2')
//                         con1.setAttribute('class','con2')
//                         tu.setAttribute('src','../images/top2.png')
//                         tu.style.display="block"
//                         con.innerHTML="2017年<br>累计通话时长达5600分钟"
//                         con1.innerHTML="生命不息，交流不止，点赞善于沟通的你"
//                         setTimeout(() => {
//                             a.style.display = "block";
//                             setTimeout(() => {

//                                 gq1.style.display = "block"

//                             }, 4000)
//                         }, 2000)
//                     }, 2200);
//                 }, 2400);
//             }, 1600);
//         }, 1650);

//     }
// }
gq2.onclick = function () {
    if (fl) {
        fl = false
        au4.play()
        gq2.style.display = "none";
        gz1.setAttribute("class", "gz1 move3")
        ge(2)

        setTimeout(() => {
            clearInterval(gez)
            ge(3)
            setTimeout(() => {
                clearInterval(gez)
                ge(2)
                setTimeout(() => {
                    clearInterval(gez)
                    w3.style.display = 'block'
                    au4.pause()
                    gz.setAttribute('src', `../images/gz${2}${1}.png`)
                    fl = true
                    // tu.setAttribute('src','../images/top3.png')
                    
                    // con1.style.left="2.6rem"
                    // con.innerHTML="2017年<br>立马送您3个月1G流量劵"
                    // con1.innerHTML="领取流量劵"
                    
                    tu.style.display="none"
                    con1.style.top="2.7rem"
                    con.setAttribute('class','cont1')
                    con1.setAttribute('class','con2')
                    con.innerHTML="2017年<br>全年话费999元，<br>其中获得优惠200元"
                    con1.innerHTML="2017年江西移动为全省200位移粉赠<br>送的优惠相当于双11一小时交易额。"
                    setTimeout(() => {
                        c.style.display = "block"
                        d4.style.display='block'
                        setTimeout(() => {

                            gq3.style.display = "block"
                        }, 4000)
                    }, 2000)
                }, 2300);
            }, 1100);
        }, 1600);

    }

}
gq3.onclick = function () {
    if (fl) {
        fl = false
        au4.play()
        gq3.style.display = "none";
        gz1.setAttribute("class", "gz1 move4")
        ge(3)

        setTimeout(() => {
            clearInterval(gez)
            ge(0)
            setTimeout(() => {
                clearInterval(gez)
                au4.pause()
                au3.play()
                // c.style.display = "block"
                
                fl = true;
                gz1.setAttribute('class','gz1')
                gz1.style.animation="rise1 3s forwards"
                back.style.animation= 'back 5s forwards';
                
                d4.style.animation="rise 3s forwards";
                
                setTimeout(()=>{
                    gz.setAttribute('src', `../images/gz${3}${1}.png`)
                    bg1.style.display="none"
                    bg2.style.display="none"
                    img.style.animation='drop 3s forwards'
                    drop.style.animation='drop1 3s forwards'
                },1000)
                setTimeout(()=>{
                    au3.pause()
                    foored.style.display='block'
                },5000)
            }, 1500);

        }, 1900);

    }

}

// let i = 1;
// setInterval(() => {
//     if (i > 3) i = 1;
//     mtl.setAttribute('src', '../images/z18' + i + '.png')
//     i++
// }, 100);