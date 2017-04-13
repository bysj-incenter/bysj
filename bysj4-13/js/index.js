/**
 * Created by Administrator on 2017/4/12.
 */
$(document).ready(function () {
    let t;
    $('.second-floor > div > .right').each(function (index) {
            $(this).hover(function () {
                t=setTimeout(function () {
                    $('.more').eq(index).animate({
                        width:75
                    },200)
                },300)
            },function () {
                clearTimeout(t)
                $('.more').eq(index).animate({
                    width:0
                },200)
            })
    })


    $('.dl').click(function () {
        $('html,body').addClass('active')
        $('#box').show()
    })
    $('.shou').click(function(){
        $('html,body').removeClass('active')
        $('#box').hide()
    })

    // banner轮播
    let lis=$('.img-box > li');
    let cir=$('.cll-circle > li');
    let n=lis.length-1;
    let flag=true;
    let dd=0;
    function move(fx='right') {
        if(fx=='right'){
            n++;
            if(n>=lis.length){
                n=0
            }
        }
        if(fx=='left'){
            n--;
            if(n<0){
                n=lis.length-1
            }
        }
        lis.removeClass('cll-first').eq(n).addClass('cll-first');
        cir.removeClass('cll-active').eq(n).addClass('cll-active');
    }
    let tt=setInterval(move,4000)
    $('.banner').hover(function () {
        clearInterval(tt)
    },function () {
        tt=setInterval(move,4000)
    })
    cir.hover(function () {
        dd=setTimeout(()=>{
            $(this).addClass('cll-active').siblings().removeClass('cll-active')
            lis.removeClass('cll-first').eq($(this).index()).addClass('cll-first')
            n=$(this).index()
        },200)
    },function () {
        clearTimeout(dd)
    })
    for(let i=0;i<lis.length;i++){
        lis[i].addEventListener('transitionend',function () {
            flag=true;
        })
    }
    $('.cll-right','.banner').add($('.cll-left','.banner')).click(function () {
        str='right';
        if($(this).attr('class')==='cll-left'){
            str='left'
        }
        if(flag){
            flag=false;
            move(str)
        }
    })
    //登录
    $( ".put" ).validate({
        rules: {
            text: {
                required: true,
            },
            pass: {
                required: true,
            },
            yzm: {
                required: true,
            },
        },
        messages: {
            text: {
                required: "请输入用户名",
            },
            pass: {
                required: "密码不能为空",
            },
            yzm: {
                required: "请输入验证码",
            },
        },
        success: function (){
            $('.fh').click(function () {
                $('html,body').removeClass('active')
                $('#box').hide()
                $('.dl').html('成功')
            })
        }
    })
})