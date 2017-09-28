m=0;
postop=400;
alldivstop=0;
getme=122;
x=0;
gel=0;
n=0;
z=0
var h=["Press On Read More To Open",
"Links Can Be Direct Or As Read More Buttons Inside The News Reader",
"This Item Is An External Link",
"Custome Link Text, Hover When Chosen To Check.",
"8 Different Arrow Layouts",
"Supports RSS Feeds!",
"Set Height Or Set Number Of News",
"Multiple Animations Included",
"Image With Overrided Options",
"Title Of The News",
"Easy Styling Using Css."]
var p=["2 Different Styles to continue reading this. The Full page Style and In-Widget Style. This is the full page view. Check examples for the In-widget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutp [...]",

"Links can be 2 types 'readmore' links and 'direct' links. The readmore type will add a Continue reading button at the end of the article however the direct type will open the article in a new tab (can be self). To define a readmore link, add data-link-type to the list item. Otherwise the link will be direct. Lorem ipsum dolor [...]",


"When this is pressed, the user will be redirected to a link predefined. You can set the target.",

"You can add custom link text to any specific item. You can also choose to show the title or not, and where. Add to any news item the following code and viola!: data-link-text='CUSTOM LINK TEXT!' d [...]",

"The plugin includes 8 different Arrow layouts including: left right sides top-left top-right bottom-left bottom-right top/bottom Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tatio [...]",

"The plugin supports external/internal RSS Feeds. You can set the number of items to load. You must use a proxy to load external rss feeds, i included one. It is a basic one. Prefferable to use a more advanced and secure one. Google links to many.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis [...]",

"The plugin is smart. You can either set the height of the plugin and it will calcualte the number of news to initially display on screen. If you prefer to choose them yourself, you can! Simply set the numberOfNews option to any number and the plugin will calculate the new height!",

"You can customize all animations and control all their aspects. You can choose how the widget appears, how the article shows, how it closes and how the items react to your hovers. You can also set teh animations duration, delay and easing. I've included 10 animations: left right sides top-left top-right bottom-left bottom-right [...]",

"A Sexy Girl.",

"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate [...]",

"You can dramatically change everything using css. You can edit the sizes, colors, animtions and the whole feel. You can also add custom style to the News Readers. All documented.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wis [...]",]

var button_up=document.querySelector(".up")
var button_down=document.querySelector(".down")
button_up.setAttribute("onclick","up()")
button_down.setAttribute("onclick","down()")
var visible= document.querySelector(".visible")
for(i=0;i<=11;i++)
{
var alldivs=document.querySelector(".alldivs")
var linediv= document.createElement("div")
linediv.setAttribute("class","linediv")
alldivs.appendChild(linediv)


var boxdiv=document.createElement("div")
boxdiv.setAttribute("class","boxdiv")
linediv.appendChild(boxdiv)
linediv.style.top=postop+"px"
postop=postop+62
boxdiv.innerHTML=x
x++


// var yazidiv=document.createElement("div")
// yazidiv.setAttribute("class","yazidiv")
// linediv.appendChild(yazidiv)
var yazilar=document.createElement("p")
linediv.appendChild(yazilar)

}
alldivstop2=0;

function up(){
	

	 document.querySelectorAll(".linediv")[m].style.top=getme+"px"
	 getme=getme+62


alldivstop=alldivstop+62;


 document.querySelector(".alldivs").style.bottom=alldivstop+"px"
 m++

 document.querySelector(".hlar h1").innerHTML=h[z]

  document.querySelector(".hlar p").innerHTML=p[z]
  document.querySelector(".hlar p ").style.top="0px"
  document.querySelector(".hlar p").style.display="block;"
   document.querySelector(".hlar p").style.transition="all 2s ease"

 z++


}


// function down(){
	
	
	
// document.querySelectorAll(".linediv")[n].style.top="350px"
// n--	
// // gel=gel-20;

// alldivstop2=alldivstop2-62;
	
//  document.querySelector(".alldivs").style.top=alldivstop2+"px"
// }