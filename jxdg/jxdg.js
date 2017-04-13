/**
 * Created by Administrator on 2017/4/13.
 */
$(function () {
    let jx=document.querySelector('.jx')
    let jxnav=document.querySelector('.jx>ul')
    window.onscroll=function () {
        let obj=document.body.scrollTop==0? document.documentElement:document.body;
        if(jx.offsetTop<=obj.scrollTop){
            jxnav.classList.add('active');
        }
        else{
            jxnav.classList.remove('active');
        }
    }
})