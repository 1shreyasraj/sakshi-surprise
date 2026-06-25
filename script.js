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

if(id==="page2"){
setupKeypadDrag();
}
}

function addNum(num, event){

if(entered.length>=4){
return;
}

entered += num;

document.getElementById(
"d"+entered.length
).innerHTML="●";

// Heart burst effect from clicked button
if(event && event.target){
createHeartBurstFromButton(event.target);
}

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

function createHeartBurstFromButton(button){
const emojis=["❤️","💖","💕","💗","💘","💝"];
const rect=button.getBoundingClientRect();
const centerX=rect.left+rect.width/2;
const centerY=rect.top+rect.height/2;

for(let i=0;i<8;i++){
const heart=document.createElement("div");
heart.classList.add("heart-burst");
heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
heart.style.position="fixed";
heart.style.left=centerX+"px";
heart.style.top=centerY+"px";
heart.style.fontSize=(25+Math.random()*30)+"px";
const angle=(Math.PI*2*i)/8;
const distance=200;
const tx=Math.cos(angle)*distance;
const ty=Math.sin(angle)*distance;
heart.style.setProperty("--tx",tx+"px");
heart.style.setProperty("--ty",ty+"px");
document.body.appendChild(heart);
setTimeout(()=>{heart.remove();},1500);
}
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

let keypadDragState={
isDragging:false,
offsetX:0,
offsetY:0,
startX:0,
startY:0
};

function setupKeypadDrag(){
const keypad=document.getElementById("keypad");
if(!keypad) return;

keypad.addEventListener("touchstart",(e)=>{
keypadDragState.isDragging=true;
keypadDragState.startX=e.touches[0].clientX;
keypadDragState.startY=e.touches[0].clientY;
const rect=keypad.getBoundingClientRect();
keypadDragState.offsetX=rect.left-e.touches[0].clientX;
keypadDragState.offsetY=rect.top-e.touches[0].clientY;
keypad.style.cursor="grabbing";
});

document.addEventListener("touchmove",(e)=>{
if(!keypadDragState.isDragging) return;
const newX=e.touches[0].clientX+keypadDragState.offsetX;
const newY=e.touches[0].clientY+keypadDragState.offsetY;
keypad.style.position="fixed";
keypad.style.left=newX+"px";
keypad.style.top=newY+"px";
keypad.style.transform="none";
});

document.addEventListener("touchend",()=>{
keypadDragState.isDragging=false;
keypad.style.cursor="grab";
});

keypad.addEventListener("mousedown",(e)=>{
keypadDragState.isDragging=true;
keypadDragState.startX=e.clientX;
keypadDragState.startY=e.clientY;
const rect=keypad.getBoundingClientRect();
keypadDragState.offsetX=rect.left-e.clientX;
keypadDragState.offsetY=rect.top-e.clientY;
keypad.style.cursor="grabbing";
});

document.addEventListener("mousemove",(e)=>{
if(!keypadDragState.isDragging) return;
const newX=e.clientX+keypadDragState.offsetX;
const newY=e.clientY+keypadDragState.offsetY;
keypad.style.position="fixed";
keypad.style.left=newX+"px";
keypad.style.top=newY+"px";
keypad.style.transform="none";
});

document.addEventListener("mouseup",()=>{
keypadDragState.isDragging=false;
keypad.style.cursor="grab";
});
}

setInterval(
createHeart,
100
);
