function navbuttons(){for(var e=0;e<navButtons.length;e++)navButtons[e].index=e,navButtons[e].onmouseover=function(){for(var e=1;e<navButtons.length;e++)navButtons[e].className="";navButtons[this.index].setAttribute("class","head_box_nav_border")}}function navimg(){var e=!0;navBtn.onclick=function(){e?(nav.style.display="block",e=!1):(nav.style.display="none",e=!0)}}function changeimg(){for(var e=0;e<bodyLink.length;e++){bodyLink[e].index=e;var o=body.getElementsByClassName("bordercolor");bodyLink[e].onmouseover=function(){o[this.index].style.borderColor="yellow",0==this.index?home_img1.src="img/home/home_pic_one_h.png":1==this.index?home_img2.src="img/home/home_pic_two_h.png":2==this.index&&(home_img3.src="img/home/homes_pic_three_h.jpg")},bodyLink[e].onmouseout=function(){o[this.index].style.borderColor="rgb(176,176,176)",0==this.index?home_img1.src="img/home/home_pic_one.png":1==this.index?home_img2.src="img/home/home_pic_two.jpg":2==this.index&&(home_img3.src="img/home/homes_pic_three.jpg")}}}function changeOther(){for(var e=0;e<otherLink.length;e++)otherLink[e].index=e,otherLink[e].onmouseover=function(){switch(this.index){case 0:mail_h.src="img/home/mail_h.jpg";break;case 1:facebook_h.src="img/home/facebook_h.jpg";break;case 2:youtube_h.src="img/home/youtube_h.jpg";break;case 3:linkedln_h.src="img/home/linkedln_h.jpg";break;case 4:twitter_h.src="img/home/twitter_h.jpg"}},otherLink[e].onmouseout=function(){switch(this.index){case 0:mail_h.src="img/home/mail.jpg";break;case 1:facebook_h.src="img/home/facebook.jpg";break;case 2:youtube_h.src="img/home/youtube.jpg";break;case 3:linkedln_h.src="img/home/linkedln.jpg";break;case 4:twitter_h.src="img/home/twitter.jpg"}}}var head=document.getElementById("head"),body=document.getElementById("body"),foot=document.getElementById("foot"),navButtons=head.getElementsByTagName("li"),bodyLink=body.getElementsByClassName("body_box"),otherLink=foot.getElementsByTagName("img"),nav=head.getElementsByClassName("head_box_nav")[0],navBtn=document.getElementById("head_box_navButton");changeOther(),navimg(),changeimg(),navbuttons();