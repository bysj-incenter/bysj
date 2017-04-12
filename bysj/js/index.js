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
})