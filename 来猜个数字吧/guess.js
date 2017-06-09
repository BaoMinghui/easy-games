var target;
var decade = document.getElementsByClassName('decade')[0];
var unit = document.getElementsByClassName('unit')[0];

var up_d = document.getElementsByClassName('up_d')[0];
var down_d = document.getElementsByClassName('down_d')[0];
var up_u = document.getElementsByClassName('up_u')[0];
var down_u = document.getElementsByClassName('down_u')[0];
var start_btn = document.getElementById('start');

function decade_up() {
 let a = parseInt(decade.innerHTML);
 if (a === 9) {
   return;
 }else {
   a++;
 }
 decade.innerHTML = a;
}

function decade_down() {
  let a = parseInt(decade.innerHTML);
  if (a === 0) {
    return;
  }else {
    a--;
  }
  decade.innerHTML = a;
}

function unit_up() {
  let a = parseInt(unit.innerHTML);
  if (a === 9) {
    return;
  }else {
    a++;
  }
  unit.innerHTML = a;
}

function unit_down() {
  let a = parseInt(unit.innerHTML);
  if (a === 0) {
    return;
  }else {
    a--;
  }
  unit.innerHTML = a;
}

function check() {
  let value = parseInt(decade.innerHTML) * 10 + parseInt(unit.innerHTML) ;
  let feedback = document.getElementsByClassName("fb")[0];
  if (value > target) {
    feedback.innerHTML = "比想象中的要小啊";
  } else if (value < target){
    feedback.innerHTML = "比想象中的要大啊";
  } else if (value === target) {
    feedback.innerHTML = "恭喜你，猜中了";
    let timer = setTimeout(function(){
      decade.innerHTML = 0;
      unit.innerHTML = 0;
      start_btn.innerHTML = "开始";
      start_btn.className = "";
      start_btn.addEventListener("click",start);
    })
  }
}

function start() {
  target=Math.floor(Math.random()*100);
  alert(target);
  start_btn.innerHTML = "验证";
  start_btn.className = "check";
  up_d.addEventListener("click",decade_up);
  down_d.addEventListener("click",decade_down);
  up_u.addEventListener("click",unit_up);
  down_u.addEventListener("click",unit_down);
  let check_btn = document.getElementsByClassName("check")[0];
  check_btn.addEventListener("click",check);
  start_btn.removeEventListener("click",start);
}

start_btn.addEventListener("click",start);
//btn_up_d.addEventListener('click',decade_up);
