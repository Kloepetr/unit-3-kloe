//Parts of the story
let beginning = document.querySelector(".story-opening")
//let purpose = document.querySelector(".title")


//heading


//special button "HOME"
let home1 = document.querySelector(".start_again1")
let home2 = document.querySelector(".start_again2")
let home3 = document.querySelector(".start_again3")
let home4 = document.querySelector(".start_again4")
let home5 = document.querySelector(".start_again5")

//Avatar 

//button "Avatar" 
let yesToParty = document.querySelector(".yestoparty")

//button "Avatar" leads to new screen
let outfit = document.querySelector(".outfit")

//button "Fight"
let casual = document.querySelector(".casual")

//button "Fight" leads to new screen
let youre_ambushed = document.querySelector(".avatar2-fight")

//button "Spider"
let free_spider = document.querySelector(".spider")

//button "Spider" leads to ending
let spider_ends = document.querySelector(".save_spider")

//button "Kiri"
let free_kiri = document.querySelector(".kiri")

//button "Kiri" leads to ending
let kiri_ends = document.querySelector(".save_kiri")




//button "Escape"
let noToParty = document.querySelector(".noToParty")

//button "Escape" leads to new screen
let Formal = document.querySelector(".formal")

//button "continue being bullied"
let no = document.querySelector(".bully")

//button "continue being bullied" leads to ending
let bully_ends = document.querySelector(".dont_stand")

//button "stand"
let yes = document.querySelector(".standUp")

//button "stand" leads to ending
let stand_ends = document.querySelector(".stand")



//CHOOSE AVATAR
yesToParty.onclick = function() {
  outfit.style.display = "block";
  //  purpose.style.display="none";
  beginning.style.display = "none";
};

//CHOOSE TO FIGHT
outfit.onclick = function() {
  method_of_fighting.style.display = "none";

  youre_ambushed.style.display = "block";
};

//CHOOSE TO SAVE SPIDER
free_spider.onclick = function() {
  youre_ambushed.style.display = "none";
  spider_ends.style.display = "block";
};

//CHOOSE TO SAVE KIRI
free_kiri.onclick = function() {
  youre_ambushed.style.display = "none";
  kiri_ends.style.display = "block";
};

//HOME button

home1.onclick = function() {
  spider_ends.style.display = "none";

  //  purpose.style.display="block";
  beginning.style.display = "block";
};

home2.onclick = function() {
  kiri_ends.style.display = "none";

  //  purpose.style.display="block";
  beginning.style.display = "block";
};

home3.onclick = function() {
  bully_ends.style.display = "none";

  //  purpose.style.display="block";
  beginning.style.display = "block";
};

home4.onclick = function() {
  stand_ends.style.display = "none";

  //  purpose.style.display="block";
  beginning.style.display = "block";
};

home5.onclick = function() {
  stand_ends.style.display = "none";

  //  purpose.style.display="block";
  beginning.style.display = "block";
};


//CHOOSE TO ESCAPE
escape_humans.onclick = function() {
  method_of_fighting.style.display = "none";

  meet_waterTribe.style.display = "block";
};

//CHOOSE TO NOT STAND UP
no.onclick = function() {
  meet_waterTribe.style.display = "none";

  bully_ends.style.display = "block";
};

//CHOOSE TO STAND UP
yes.onclick = function() {
  meet_waterTribe.style.display = "none";

  stand_ends.style.display = "block";
};



//HOME ALONE

//button "HomeA"
let homeA = document.querySelector(".option-two");

//button "HomeA" leads to new page
let screen1 = document.querySelector(".homeAlone");

//button "Reconcile" 
let happy = document.querySelector(".reconcile");

//button "Reconcile" leads to new screen
let happy_2 = document.querySelector(".homeAlone2-happy")

//button "Yes to Alarm"
//let setAlarm = document.querySelector(".good")

//button "Yes to Alarm" leads to new screen
//let setAlarmNow = document.querySelector(".homeAlone2-yalarm")

//button "Angry"
let mad = document.querySelector(".angry");

//CHOOSE HOME ALONE
homeA.onclick = function() {
  screen1.style.display = "block";
  // purpose.style.display="none";
  beginning.style.display = "none";
};

//CHOOSE RECONCILE
happy.onclick = function() {
  screen1.style.display = "none";
  happy_2.style.display = "block";
};

//CHOOSE TO SET ALARM
//setAlarm.onclick=function(){
  //happy_2.style.display="none";
  //setAlarmNow.style.display="block";
//}

