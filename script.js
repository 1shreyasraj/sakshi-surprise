let entered = "";

const correctPass = "2002";

function showPage(id){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document.getElementById(id)
.classList.add("active");

if(id==="page4"){
setupGallerySwipe();
createStickersHearts();
}

if(id==="page5"){
startLetter();
}
}

function addNum(num){

if(entered.length>=4){
return;
}

entered += num;

document.getElementById(
"d"+entered.length
).innerHTML="●";

// Heart burst effect for all numbers
createHeartBurst();

if(entered===correctPass){

setTimeout(()=>{
showPage("page3");
},1000);

}
else if(entered.length===4){

setTimeout(()=>{
showWrongPassword();
clearPass();
},1000);

}
}

function clearPass(){

entered="";

for(let i=1;i<=4;i++){

document.getElementById(
"d"+i
).innerHTML="○";

}
}

const letterText =

`Dear Sakshi ❤️,

Happy Birthday.

Thank you for every memory,
every smile,
every laugh,
and every beautiful moment we shared together.

You brought happiness into my life in ways you may never fully realize.

Some conversations become memories.
Some memories become a part of us forever.

No matter where life takes us,
you will always have a special place in my heart.

Today, I simply want to wish you happiness,
success,
good health,
and countless reasons to smile.

May every dream you have come true.

And no matter what happens,
I will always be grateful for the time we spent together.

I Miss You ❤️

With warmth and affection,

— Shreyas ❤️`;

let started=false;

function startLetter(){

if(started) return;

started=true;

let i=0;

let box=
document.getElementById(
"typewriter"
);

let timer=setInterval(()=>{

box.innerHTML +=
letterText.charAt(i);

i++;

if(i>=letterText.length){
clearInterval(timer);
}

},80);

}

function createHeartBurst(){
const emojis=["❤️","💖","💕","💗","💘","💝"];
for(let i=0;i<8;i++){
const heart=document.createElement("div");
heart.classList.add("heart-burst");
heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
heart.style.left=(40+Math.random()*20)+"%";
heart.style.top="60%";
heart.style.fontSize=(25+Math.random()*30)+"px";
heart.style.setProperty("--tx",(Math.random()-0.5)*200+"px");
heart.style.setProperty("--ty",-200-Math.random()*100+"px");
document.getElementById("page2").appendChild(heart);
setTimeout(()=>{heart.remove();},1500);
}
}

function showWrongPassword(){
const sadEmojis=["😢","😭","😞","😔"];
const page2=document.getElementById("page2");

// Create big crying emoji in center
const cryingEmoji=document.createElement("div");
cryingEmoji.classList.add("crying-emoji");
cryingEmoji.innerHTML="😭";
page2.appendChild(cryingEmoji);

// Create sad emoji bursts
for(let i=0;i<6;i++){
const sadEmoji=document.createElement("div");
sadEmoji.classList.add("sad-burst");
sadEmoji.innerHTML=sadEmojis[Math.floor(Math.random()*sadEmojis.length)];
sadEmoji.style.left=(40+Math.random()*20)+"%";
sadEmoji.style.top="60%";
sadEmoji.style.fontSize=(20+Math.random()*25)+"px";
sadEmoji.style.setProperty("--tx",(Math.random()-0.5)*150+"px");
sadEmoji.style.setProperty("--ty",-150-Math.random()*80+"px");
page2.appendChild(sadEmoji);
setTimeout(()=>{sadEmoji.remove();},2000);
}

setTimeout(()=>{cryingEmoji.remove();},2000);
}

function createHeart(){

const heart=
document.createElement("div");

heart.classList.add("heart");

const emojis=[
"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"🌸",
"✨"
];

heart.innerHTML=
emojis[
Math.floor(
Math.random()*
emojis.length
)
];

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(20+Math.random()*25)+"px";

heart.style.animationDuration=
(4+Math.random()*4)+"s";

document.body.appendChild(
heart
);

setTimeout(()=>{
heart.remove();
},8000);

}

let lastSwipeTime=0;
let touchStartX=0;

function setupGallerySwipe(){
const gallery=document.getElementById("gallery");
if(!gallery) return;

gallery.addEventListener("touchstart",e=>{
touchStartX=e.touches[0].clientX;
});

gallery.addEventListener("touchend",e=>{
const touchEndX=e.changedTouches[0].clientX;
if(Math.abs(touchEndX-touchStartX)>50){
const now=Date.now();
if(now-lastSwipeTime>300){
lastSwipeTime=now;
createSwipeHearts();
}
}
});

gallery.addEventListener("scroll",e=>{
const now=Date.now();
if(now-lastSwipeTime>500){
lastSwipeTime=now;
createSwipeHearts();
}
});
}

function createSwipeHearts(){
const emojis=["❤️","💖","💕","💗","💘","💝"];
for(let i=0;i<6;i++){
const heart=document.createElement("div");
heart.classList.add("heart-burst");
heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
heart.style.position="fixed";
heart.style.left=(30+Math.random()*40)+"%";
heart.style.top="60%";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.setProperty("--tx",(Math.random()-0.5)*250+"px");
heart.style.setProperty("--ty",-250-Math.random()*100+"px");
heart.style.zIndex="999";
document.body.appendChild(heart);
setTimeout(()=>{heart.remove();},1500);
}
}

function createStickersHearts(){
const page4=document.getElementById("page4");
if(!page4) return;
const emojis=["❤️","💖","💕"];
for(let i=0;i<4;i++){
setTimeout(()=>{
const heart=document.createElement("div");
heart.classList.add("bouncing-heart-from-sticker");
heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
heart.style.fontSize=(25+Math.random()*20)+"px";
page4.appendChild(heart);
setTimeout(()=>{heart.remove();},2000);
},i*300);
}
}

setInterval(
createHeart,
100
);
