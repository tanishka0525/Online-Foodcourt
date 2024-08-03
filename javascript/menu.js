// dish1 prices
var d1_btn1 = document.getElementById('d1_btn1');
var     del = document.getElementById('d1_del');
var    price = document.getElementById('d1_price');
function d1_del1_c() {
    del.innerHTML =  150;
}
function d1_price1_c() {
    price.innerHTML =  120;
}
function d1_del2_c() {
    del.innerHTML =  125;
}
function d1_price2_c() {
    price.innerHTML =  100;
}
function d1_del3_c() {
    del.innerHTML =  100;
}
function d1_price3_c() {
    price.innerHTML =  80
}
function d1_del4_c() {
    del.innerHTML =  200;
}
function d1_price4_c() {
    price.innerHTML =  160;
}


//dish1 color changes
function d1_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d1_btn1_restorebackground() {
  d1_btn1.style.backgroundColor = '';
  d1_btn1.style.color = '';
  return false;
}
function d1_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d1_btn1.style.backgroundColor = '#f6f6f6';
  d1_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d1_btn2_restorebackground() {
  d1_btn2.style.backgroundColor = '';
  d1_btn2.style.color = '';
  return false;
}
function d1_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d1_btn1.style.backgroundColor = '#f6f6f6';
  d1_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d1_btn3_restorebackground() {
  d1_btn3.style.backgroundColor = '';
  d1_btn3.style.color = '';
  return false;
}
function d1_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d1_btn1.style.backgroundColor = '#f6f6f6';
  d1_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d1_btn4_restorebackground() {
  d1_btn4.style.backgroundColor = '';
  d1_btn4.style.color = '';
  return false;
}
d1_btn1.addEventListener('click', d1_btn1_background, false);
d1_btn2.addEventListener('click', d1_btn1_restorebackground, false);
d1_btn3.addEventListener('click', d1_btn1_restorebackground, false);
d1_btn4.addEventListener('click', d1_btn1_restorebackground, false);

d1_btn2.addEventListener('click', d1_btn2_background, false);
d1_btn1.addEventListener('click', d1_btn2_restorebackground, false);
d1_btn3.addEventListener('click', d1_btn2_restorebackground, false);
d1_btn4.addEventListener('click', d1_btn2_restorebackground, false);

d1_btn3.addEventListener('click', d1_btn3_background, false);
d1_btn1.addEventListener('click', d1_btn3_restorebackground, false);
d1_btn2.addEventListener('click', d1_btn3_restorebackground, false);
d1_btn4.addEventListener('click', d1_btn3_restorebackground, false);

d1_btn4.addEventListener('click', d1_btn4_background, false);
d1_btn1.addEventListener('click', d1_btn4_restorebackground, false);
d1_btn2.addEventListener('click', d1_btn4_restorebackground, false);
d1_btn3.addEventListener('click', d1_btn4_restorebackground, false);


//dish2 prices
var d2_btn1 = document.getElementById('d2_btn1');
var del2 = document.getElementById('d2_del');
var price2 = document.getElementById('d2_price');
function d2_del1_c() {
    del2.innerHTML = 120;
}
function d2_price1_c() {
    price2.innerHTML = 100;
}
function d2_del2_c() {
    del2.innerHTML = 200;
}
function d2_price2_c() {
    price2.innerHTML = 180;
}
function d2_del3_c() {
    del2.innerHTML = 300;
}
function d2_price3_c() {
    price2.innerHTML = 250;
}
function d2_del4_c() {
    del2.innerHTML = 100;
}
function d2_price4_c() {
    price2.innerHTML = 80;
}


//dish2 color changes
function d2_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d2_btn1_restorebackground() {
  d2_btn1.style.backgroundColor = '';
  d2_btn1.style.color = '';
  return false;
}
function d2_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d2_btn1.style.backgroundColor = '#f6f6f6';
  d2_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d2_btn2_restorebackground() {
  d2_btn2.style.backgroundColor = '';
  d2_btn2.style.color = '';
  return false;
}
function d2_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d2_btn1.style.backgroundColor = '#f6f6f6';
  d2_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d2_btn3_restorebackground() {
  d2_btn3.style.backgroundColor = '';
  d2_btn3.style.color = '';
  return false;
}
function d2_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d2_btn1.style.backgroundColor = '#f6f6f6';
  d2_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d2_btn4_restorebackground() {
  d2_btn4.style.backgroundColor = '';
  d2_btn4.style.color = '';
  return false;
}
d2_btn1.addEventListener('click', d2_btn1_background, false);
d2_btn2.addEventListener('click', d2_btn1_restorebackground, false);
d2_btn3.addEventListener('click', d2_btn1_restorebackground, false);
d2_btn4.addEventListener('click', d2_btn1_restorebackground, false);

d2_btn2.addEventListener('click', d2_btn2_background, false);
d2_btn1.addEventListener('click', d2_btn2_restorebackground, false);
d2_btn3.addEventListener('click', d2_btn2_restorebackground, false);
d2_btn4.addEventListener('click', d2_btn2_restorebackground, false);

d2_btn3.addEventListener('click', d2_btn3_background, false);
d2_btn1.addEventListener('click', d2_btn3_restorebackground, false);
d2_btn2.addEventListener('click', d2_btn3_restorebackground, false);
d2_btn4.addEventListener('click', d2_btn3_restorebackground, false);

d2_btn4.addEventListener('click', d2_btn4_background, false);
d2_btn1.addEventListener('click', d2_btn4_restorebackground, false);
d2_btn2.addEventListener('click', d2_btn4_restorebackground, false);
d2_btn3.addEventListener('click', d2_btn4_restorebackground, false);


//dish3 prices
var d3_btn1 = document.getElementById('d3_btn1');
var del3 = document.getElementById('d3_del');
var price3 = document.getElementById('d3_price');
function d3_del1_c() {
    del3.innerHTML = 450;
}
function d3_price1_c() {
    price3.innerHTML = 400;
}
function d3_del2_c() {
    del3.innerHTML = 300;
}
function d3_price2_c() {
    price3.innerHTML = 260;
}
function d3_del3_c() {
    del3.innerHTML = 800;
}
function d3_price3_c() {
    price3.innerHTML = 750;
}
function d3_del4_c() {
    del3.innerHTML = 50;
}
function d3_price4_c() {
    price3.innerHTML = 40;
}


//dish3 color changes
function d3_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d3_btn1_restorebackground() {
  d3_btn1.style.backgroundColor = '';
  d3_btn1.style.color = '';
  return false;
}
function d3_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d3_btn1.style.backgroundColor = '#f6f6f6';
  d3_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d3_btn2_restorebackground() {
  d3_btn2.style.backgroundColor = '';
  d3_btn2.style.color = '';
  return false;
}
function d3_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d3_btn1.style.backgroundColor = '#f6f6f6';
  d3_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d3_btn3_restorebackground() {
  d3_btn3.style.backgroundColor = '';
  d3_btn3.style.color = '';
  return false;
}
function d3_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d3_btn1.style.backgroundColor = '#f6f6f6';
  d3_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d3_btn4_restorebackground() {
  d3_btn4.style.backgroundColor = '';
  d3_btn4.style.color = '';
  return false;
}
d3_btn1.addEventListener('click', d3_btn1_background, false);
d3_btn2.addEventListener('click', d3_btn1_restorebackground, false);
d3_btn3.addEventListener('click', d3_btn1_restorebackground, false);
d3_btn4.addEventListener('click', d3_btn1_restorebackground, false);

d3_btn2.addEventListener('click', d3_btn2_background, false);
d3_btn1.addEventListener('click', d3_btn2_restorebackground, false);
d3_btn3.addEventListener('click', d3_btn2_restorebackground, false);
d3_btn4.addEventListener('click', d3_btn2_restorebackground, false);

d3_btn3.addEventListener('click', d3_btn3_background, false);
d3_btn1.addEventListener('click', d3_btn3_restorebackground, false);
d3_btn2.addEventListener('click', d3_btn3_restorebackground, false);
d3_btn4.addEventListener('click', d3_btn3_restorebackground, false);

d3_btn4.addEventListener('click', d3_btn4_background, false);
d3_btn1.addEventListener('click', d3_btn4_restorebackground, false);
d3_btn2.addEventListener('click', d3_btn4_restorebackground, false);
d3_btn3.addEventListener('click', d3_btn4_restorebackground, false);


//dish4 prices
var d4_btn1 = document.getElementById('d4_btn1');
var del4 = document.getElementById('d4_del');
var price4 = document.getElementById('d4_price');
function d4_del1_c() {
    del4.innerHTML = 120;
}
function d4_price1_c() {
    price4.innerHTML = 100;
}
function d4_del2_c() {
    del4.innerHTML = 160;
}
function d4_price2_c() {
    price4.innerHTML = 140;
}
function d4_del3_c() {
    del4.innerHTML = 100;
}
function d4_price3_c() {
    price4.innerHTML = 80;
}
function d4_del4_c() {
    del4.innerHTML = 120;
}
function d4_price4_c() {
    price4.innerHTML = 100;
}


//dish4 color changes
function d4_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d4_btn1_restorebackground() {
  d4_btn1.style.backgroundColor = '';
  d4_btn1.style.color = '';
  return false;
}
function d4_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d4_btn1.style.backgroundColor = '#f6f6f6';
  d4_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d4_btn2_restorebackground() {
  d4_btn2.style.backgroundColor = '';
  d4_btn2.style.color = '';
  return false;
}
function d4_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d4_btn1.style.backgroundColor = '#f6f6f6';
  d4_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d4_btn3_restorebackground() {
  d4_btn3.style.backgroundColor = '';
  d4_btn3.style.color = '';
  return false;
}
function d4_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d4_btn1.style.backgroundColor = '#f6f6f6';
  d4_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d4_btn4_restorebackground() {
  d4_btn4.style.backgroundColor = '';
  d4_btn4.style.color = '';
  return false;
}
d4_btn1.addEventListener('click', d4_btn1_background, false);
d4_btn2.addEventListener('click', d4_btn1_restorebackground, false);
d4_btn3.addEventListener('click', d4_btn1_restorebackground, false);
d4_btn4.addEventListener('click', d4_btn1_restorebackground, false);

d4_btn2.addEventListener('click', d4_btn2_background, false);
d4_btn1.addEventListener('click', d4_btn2_restorebackground, false);
d4_btn3.addEventListener('click', d4_btn2_restorebackground, false);
d4_btn4.addEventListener('click', d4_btn2_restorebackground, false);

d4_btn3.addEventListener('click', d4_btn3_background, false);
d4_btn1.addEventListener('click', d4_btn3_restorebackground, false);
d4_btn2.addEventListener('click', d4_btn3_restorebackground, false);
d4_btn4.addEventListener('click', d4_btn3_restorebackground, false);

d4_btn4.addEventListener('click', d4_btn4_background, false);
d4_btn1.addEventListener('click', d4_btn4_restorebackground, false);
d4_btn2.addEventListener('click', d4_btn4_restorebackground, false);
d4_btn3.addEventListener('click', d4_btn4_restorebackground, false);


//dish5 prices
var d5_btn1 = document.getElementById('d5_btn1');
var del5 = document.getElementById('d5_del');
var price5 = document.getElementById('d5_price');
function d5_del1_c() {
    del5.innerHTML = 220;
}
function d5_price1_c() {
    price5.innerHTML = 150;
}
function d5_del2_c() {
    del5.innerHTML = 160;
}
function d5_price2_c() {
    price5.innerHTML = 120;
}
function d5_del3_c() {
    del5.innerHTML = 120;
}
function d5_price3_c() {
    price5.innerHTML = 100;
}


//dish5 color changes
function btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function btn1_restorebackground() {
  d5_btn1.style.backgroundColor = '';
  d5_btn1.style.color = '';
  return false;
}
function btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d5_btn1.style.backgroundColor = '#f6f6f6';
  d5_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function btn2_restorebackground() {
  d5_btn2.style.backgroundColor = '';
  d5_btn2.style.color = '';
  return false;
}
function btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d5_btn1.style.backgroundColor = '#f6f6f6';
  d5_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function btn3_restorebackground() {
  d5_btn3.style.backgroundColor = '';
  d5_btn3.style.color = '';
  return false;
}
d5_btn1.addEventListener('click', btn1_background, false);
d5_btn2.addEventListener('click', btn1_restorebackground, false);
d5_btn3.addEventListener('click', btn1_restorebackground, false);

d5_btn2.addEventListener('click', btn2_background, false);
d5_btn1.addEventListener('click', btn2_restorebackground, false);
d5_btn3.addEventListener('click', btn2_restorebackground, false);

d5_btn3.addEventListener('click', btn3_background, false);
d5_btn1.addEventListener('click', btn3_restorebackground, false);
d5_btn2.addEventListener('click', btn3_restorebackground, false);


// dish6 prices
var d6_btn1 = document.getElementById('d6_btn1');
var     del6 = document.getElementById('d6_del');
var    price6 = document.getElementById('d6_price');
function d6_del1_c() {
    del6.innerHTML = 150;
}
function d6_price1_c() {
    price6.innerHTML = 130;
}
function d6_del2_c() {
    del6.innerHTML = 125;
}
function d6_price2_c() {
    price6.innerHTML = 100;
}
function d6_del3_c() {
    del6.innerHTML = 100;
}
function d6_price3_c() {
    price6.innerHTML = 80;
}
function d6_del4_c() {
    del6.innerHTML = 200;
}
function d6_price4_c() {
    price6.innerHTML = 160;
}

//dish6 color changes
function d6_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d6_btn1_restorebackground() {
  d6_btn1.style.backgroundColor = '';
  d6_btn1.style.color = '';
  return false;
}
function d6_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d6_btn1.style.backgroundColor = '#f6f6f6';
  d6_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d6_btn2_restorebackground() {
  d6_btn2.style.backgroundColor = '';
  d6_btn2.style.color = '';
  return false;
}
function d6_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d6_btn1.style.backgroundColor = '#f6f6f6';
  d6_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d6_btn3_restorebackground() {
  d6_btn3.style.backgroundColor = '';
  d6_btn3.style.color = '';
  return false;
}
function d6_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d6_btn1.style.backgroundColor = '#f6f6f6';
  d6_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d6_btn4_restorebackground() {
  d6_btn4.style.backgroundColor = '';
  d6_btn4.style.color = '';
  return false;
}
d6_btn1.addEventListener('click', d6_btn1_background, false);
d6_btn2.addEventListener('click', d6_btn1_restorebackground, false);
d6_btn3.addEventListener('click', d6_btn1_restorebackground, false);
d6_btn4.addEventListener('click', d6_btn1_restorebackground, false);

d6_btn2.addEventListener('click', d6_btn2_background, false);
d6_btn1.addEventListener('click', d6_btn2_restorebackground, false);
d6_btn3.addEventListener('click', d6_btn2_restorebackground, false);
d6_btn4.addEventListener('click', d6_btn2_restorebackground, false);

d6_btn3.addEventListener('click', d6_btn3_background, false);
d6_btn1.addEventListener('click', d6_btn3_restorebackground, false);
d6_btn2.addEventListener('click', d6_btn3_restorebackground, false);
d6_btn4.addEventListener('click', d6_btn3_restorebackground, false);

d6_btn4.addEventListener('click', d6_btn4_background, false);
d6_btn1.addEventListener('click', d6_btn4_restorebackground, false);
d6_btn2.addEventListener('click', d6_btn4_restorebackground, false);
d6_btn3.addEventListener('click', d6_btn4_restorebackground, false);


//dish7 prices
var d7_btn1 = document.getElementById('d7_btn1');
var     del7 = document.getElementById('d7_del');
var    price7 = document.getElementById('d7_price');
function d7_del1_c() {
    del7.innerHTML = 150;
}
function d7_price1_c() {
    price7.innerHTML = 130;
}
function d7_del2_c() {
    del7.innerHTML = 125;
}
function d7_price2_c() {
    price7.innerHTML = 100;
}
function d7_del3_c() {
    del7.innerHTML = 100;
}
function d7_price3_c() {
    price7.innerHTML = 80;
}
function d7_del4_c() {
    del7.innerHTML = 200;
}
function d7_price4_c() {
    price7.innerHTML = 160;
}

//dish7 color changes
function d7_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d7_btn1_restorebackground() {
  d7_btn1.style.backgroundColor = '';
  d7_btn1.style.color = '';
  return false;
}
function d7_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d7_btn1.style.backgroundColor = '#f6f6f6';
  d7_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d7_btn2_restorebackground() {
  d7_btn2.style.backgroundColor = '';
  d7_btn2.style.color = '';
  return false;
}
function d7_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d7_btn1.style.backgroundColor = '#f6f6f6';
  d7_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d7_btn3_restorebackground() {
  d7_btn3.style.backgroundColor = '';
  d7_btn3.style.color = '';
  return false;
}
function d7_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d7_btn1.style.backgroundColor = '#f6f6f6';
  d7_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d7_btn4_restorebackground() {
  d7_btn4.style.backgroundColor = '';
  d7_btn4.style.color = '';
  return false;
}
d7_btn1.addEventListener('click', d7_btn1_background, false);
d7_btn2.addEventListener('click', d7_btn1_restorebackground, false);
d7_btn3.addEventListener('click', d7_btn1_restorebackground, false);
d7_btn4.addEventListener('click', d7_btn1_restorebackground, false);

d7_btn2.addEventListener('click', d7_btn2_background, false);
d7_btn1.addEventListener('click', d7_btn2_restorebackground, false);
d7_btn3.addEventListener('click', d7_btn2_restorebackground, false);
d7_btn4.addEventListener('click', d7_btn2_restorebackground, false);

d7_btn3.addEventListener('click', d7_btn3_background, false);
d7_btn1.addEventListener('click', d7_btn3_restorebackground, false);
d7_btn2.addEventListener('click', d7_btn3_restorebackground, false);
d7_btn4.addEventListener('click', d7_btn3_restorebackground, false);

d7_btn4.addEventListener('click', d7_btn4_background, false);
d7_btn1.addEventListener('click', d7_btn4_restorebackground, false);
d7_btn2.addEventListener('click', d7_btn4_restorebackground, false);
d7_btn3.addEventListener('click', d7_btn4_restorebackground, false);


//dish8 prices
var d8_btn1 = document.getElementById('d8_btn1');
var     del8 = document.getElementById('d8_del');
var    price8 = document.getElementById('d8_price');
function d8_del1_c() {
    del8.innerHTML = 300;
}
function d8_price1_c() {
    price8.innerHTML = 250;
}
function d8_del2_c() {
    del8.innerHTML = 550;
}
function d8_price2_c() {
    price8.innerHTML = 460;
}
function d8_del3_c() {
    del8.innerHTML = 800;
}
function d8_price3_c() {
    price8.innerHTML = 780;
}
function d8_del4_c() {
    del8.innerHTML = 1100;
}
function d8_price4_c() {
    price8.innerHTML = 1000;
}
function d8_del5_c() {
    del8.innerHTML = 1300;
}
function d8_price5_c() {
    price8.innerHTML = 1150;
}

//dish8 color changes
function d8_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d8_btn1_restorebackground() {
  d8_btn1.style.backgroundColor = '';
  d8_btn1.style.color = '';
  return false;
}
function d8_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d8_btn1.style.backgroundColor = '#f6f6f6';
  d8_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d8_btn2_restorebackground() {
  d8_btn2.style.backgroundColor = '';
  d8_btn2.style.color = '';
  return false;
}
function d8_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d8_btn1.style.backgroundColor = '#f6f6f6';
  d8_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d8_btn3_restorebackground() {
  d8_btn3.style.backgroundColor = '';
  d8_btn3.style.color = '';
  return false;
}
function d8_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d8_btn1.style.backgroundColor = '#f6f6f6';
  d8_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d8_btn4_restorebackground() {
  d8_btn4.style.backgroundColor = '';
  d8_btn4.style.color = '';
  return false;
}
function d8_btn5_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d8_btn1.style.backgroundColor = '#f6f6f6';
  d8_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d8_btn5_restorebackground() {
  d8_btn5.style.backgroundColor = '';
  d8_btn5.style.color = '';
  return false;
}
d8_btn1.addEventListener('click', d8_btn1_background, false);
d8_btn2.addEventListener('click', d8_btn1_restorebackground, false);
d8_btn3.addEventListener('click', d8_btn1_restorebackground, false);
d8_btn4.addEventListener('click', d8_btn1_restorebackground, false);
d8_btn5.addEventListener('click', d8_btn1_restorebackground, false);

d8_btn2.addEventListener('click', d8_btn2_background, false);
d8_btn1.addEventListener('click', d8_btn2_restorebackground, false);
d8_btn3.addEventListener('click', d8_btn2_restorebackground, false);
d8_btn4.addEventListener('click', d8_btn2_restorebackground, false);
d8_btn5.addEventListener('click', d8_btn2_restorebackground, false);

d8_btn3.addEventListener('click', d8_btn3_background, false);
d8_btn1.addEventListener('click', d8_btn3_restorebackground, false);
d8_btn2.addEventListener('click', d8_btn3_restorebackground, false);
d8_btn4.addEventListener('click', d8_btn3_restorebackground, false);
d8_btn5.addEventListener('click', d8_btn3_restorebackground, false);

d8_btn4.addEventListener('click', d8_btn4_background, false);
d8_btn1.addEventListener('click', d8_btn4_restorebackground, false);
d8_btn2.addEventListener('click', d8_btn4_restorebackground, false);
d8_btn3.addEventListener('click', d8_btn4_restorebackground, false);
d8_btn5.addEventListener('click', d8_btn4_restorebackground, false);

d8_btn5.addEventListener('click', d8_btn5_background, false);
d8_btn1.addEventListener('click', d8_btn5_restorebackground, false);
d8_btn2.addEventListener('click', d8_btn5_restorebackground, false);
d8_btn3.addEventListener('click', d8_btn5_restorebackground, false);
d8_btn4.addEventListener('click', d8_btn5_restorebackground, false);



//dish7 prices
var d9_btn1 = document.getElementById('d9_btn1');
var     del9 = document.getElementById('d9_del');
var    price9 = document.getElementById('d9_price');
function d9_del1_c() {
    del9.innerHTML = 150;
}
function d9_price1_c() {
    price9.innerHTML = 130;
}
function d9_del2_c() {
    del9.innerHTML = 125;
}
function d9_price2_c() {
    price9.innerHTML = 100;
}
function d9_del3_c() {
    del9.innerHTML = 100;
}
function d9_price3_c() {
    price9.innerHTML = 80;
}
function d9_del4_c() {
    del9.innerHTML = 200;
}
function d9_price4_c() {
    price9.innerHTML = 160;
}

//dish9 color changes
function d9_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d9_btn1_restorebackground() {
  d9_btn1.style.backgroundColor = '';
  d9_btn1.style.color = '';
  return false;
}
function d9_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d9_btn1.style.backgroundColor = '#f6f6f6';
  d9_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d9_btn2_restorebackground() {
  d9_btn2.style.backgroundColor = '';
  d9_btn2.style.color = '';
  return false;
}
function d9_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d9_btn1.style.backgroundColor = '#f6f6f6';
  d9_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d9_btn3_restorebackground() {
  d9_btn3.style.backgroundColor = '';
  d9_btn3.style.color = '';
  return false;
}
function d9_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d9_btn1.style.backgroundColor = '#f6f6f6';
  d9_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d9_btn4_restorebackground() {
  d9_btn4.style.backgroundColor = '';
  d9_btn4.style.color = '';
  return false;
}
d9_btn1.addEventListener('click', d9_btn1_background, false);
d9_btn2.addEventListener('click', d9_btn1_restorebackground, false);
d9_btn3.addEventListener('click', d9_btn1_restorebackground, false);
d9_btn4.addEventListener('click', d9_btn1_restorebackground, false);

d9_btn2.addEventListener('click', d9_btn2_background, false);
d9_btn1.addEventListener('click', d9_btn2_restorebackground, false);
d9_btn3.addEventListener('click', d9_btn2_restorebackground, false);
d9_btn4.addEventListener('click', d9_btn2_restorebackground, false);

d9_btn3.addEventListener('click', d9_btn3_background, false);
d9_btn1.addEventListener('click', d9_btn3_restorebackground, false);
d9_btn2.addEventListener('click', d9_btn3_restorebackground, false);
d9_btn4.addEventListener('click', d9_btn3_restorebackground, false);

d9_btn4.addEventListener('click', d9_btn4_background, false);
d9_btn1.addEventListener('click', d9_btn4_restorebackground, false);
d9_btn2.addEventListener('click', d9_btn4_restorebackground, false);
d9_btn3.addEventListener('click', d9_btn4_restorebackground, false);


//dish7 prices
var d10_btn1 = document.getElementById('d10_btn1');
var     del10 = document.getElementById('d10_del');
var    price10 = document.getElementById('d10_price');
function d10_del1_c() {
    del10.innerHTML = 150;
}
function d10_price1_c() {
    price10.innerHTML = 130;
}
function d10_del2_c() {
    del10.innerHTML = 125;
}
function d10_price2_c() {
    price10.innerHTML = 100;
}
function d10_del3_c() {
    del10.innerHTML = 100;
}
function d10_price3_c() {
    price10.innerHTML = 80;
}
function d10_del4_c() {
    del7.innerHTML = 200;
}
function d10_price4_c() {
    price10.innerHTML = 160;
}

//dish10 color changes
function d10_btn1_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  return false;
}
function d10_btn1_restorebackground() {
  d10_btn1.style.backgroundColor = '';
  d10_btn1.style.color = '';
  return false;
}
function d10_btn2_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d10_btn1.style.backgroundColor = '#f6f6f6';
  d10_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d10_btn2_restorebackground() {
  d10_btn2.style.backgroundColor = '';
  d10_btn2.style.color = '';
  return false;
}
function d10_btn3_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d10_btn1.style.backgroundColor = '#f6f6f6';
  d10_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d10_btn3_restorebackground() {
  d10_btn3.style.backgroundColor = '';
  d10_btn3.style.color = '';
  return false;
}
function d10_btn4_background() {
  this.style.backgroundColor = '#e02f46';
  this.style.color = '#fff';
  d10_btn1.style.backgroundColor = '#f6f6f6';
  d10_btn1.style.color = 'rgb(0 0 0 / 75%)';
  return false;
}
function d10_btn4_restorebackground() {
  d10_btn4.style.backgroundColor = '';
  d10_btn4.style.color = '';
  return false;
}
d10_btn1.addEventListener('click', d10_btn1_background, false);
d10_btn2.addEventListener('click', d10_btn1_restorebackground, false);
d10_btn3.addEventListener('click', d10_btn1_restorebackground, false);
d10_btn4.addEventListener('click', d10_btn1_restorebackground, false);

d10_btn2.addEventListener('click', d10_btn2_background, false);
d10_btn1.addEventListener('click', d10_btn2_restorebackground, false);
d10_btn3.addEventListener('click', d10_btn2_restorebackground, false);
d10_btn4.addEventListener('click', d10_btn2_restorebackground, false);

d10_btn3.addEventListener('click', d10_btn3_background, false);
d10_btn1.addEventListener('click', d10_btn3_restorebackground, false);
d10_btn2.addEventListener('click', d10_btn3_restorebackground, false);
d10_btn4.addEventListener('click', d10_btn3_restorebackground, false);

d10_btn4.addEventListener('click', d10_btn4_background, false);
d10_btn1.addEventListener('click', d10_btn4_restorebackground, false);
d10_btn2.addEventListener('click', d10_btn4_restorebackground, false);
d10_btn3.addEventListener('click', d10_btn4_restorebackground, false);


