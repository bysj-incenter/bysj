/**
 * Created by Administrator on 2017/4/13.
 */
$(function () {
    let zy=document.querySelector('.zy')
    let zynav=document.querySelector('.zy>ul')
    window.onscroll=function () {
        let obj=document.body.scrollTop==0? document.documentElement:document.body;
        if(zy.offsetTop<=obj.scrollTop){
            zynav.classList.add('active');
        }
        else{
            zynav.classList.remove('active');
        }
    }

})