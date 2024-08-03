function validatename(){
const form = document.getElementById('validname');
const name = document.getElementById('name').value;
const namepattern = /^[A-Za-z -]+$/;
		if(name.match(namepattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(name ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}


function formvalid(){
const form = document.getElementById('form');
const a = document.getElementById('name').value;
const b = document.getElementById('email').value;
const c = document.getElementById('number').value;
const d = document.getElementById('select').value;
const e = document.getElementById('date').value;
const f = document.getElementById('time').value;

        if(a ==""||b==""||c==""||d==""||e==""||f==""){
            alert("All Fields are Required");
        }}




function validate(){
const form = document.getElementById('validemail');
const email = document.getElementById('email').value;
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if(email.match(pattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(email == ""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validatetel(){
const form = document.getElementById('validtel');
const number = document.getElementById('number').value;
const length= document.getElementById("number").maxLength = "10";
const telpattern = /[0-9]{10}/;
        if(number.match(telpattern)) {
            form.classList.add('valid')
            form.classList.remove('invalid')
        }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(number == ""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);








