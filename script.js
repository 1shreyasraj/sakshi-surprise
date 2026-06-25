let entered = "";

const correctPass = "2002";

function showPage(id){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document.getElementById(id)
.classList.add("active");

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

if(entered===correctPass){

setTimeout(()=>{
showPage("page3");
},500);

}
else if(entered.length===4){

setTimeout(()=>{
alert("Wrong Passcode 🥺");
clearPass();
},500);

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

},40);

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

setInterval(
createHeart,
100
);