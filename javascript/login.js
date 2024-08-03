
function validFirstname(){
const form = document.getElementById('validFirstname');
const firstname = document.getElementById('firstname').value;
const firstnamepattern = /^[A-Za-z -]+$/;
		if(firstname.match(firstnamepattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(firstname ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validLastname(){
const form = document.getElementById('validLastname');
const lastname = document.getElementById('lastname').value;
const lastnamepattern = /^[A-Za-z -]+$/;
		if(lastname.match(lastnamepattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(lastname ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validemail(){
const form = document.getElementById('validemail');
const email = document.getElementById('email').value;
const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if(email.match(emailpattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(email ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validtel(){
const form = document.getElementById('validtel');
const tel = document.getElementById('tel').value;
const telpattern = /[0-9]{10}/;
		if(tel.match(telpattern)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(tel ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validpassword(){
const form = document.getElementById('validconfirm');
const password = document.getElementById('password').value;
const confirm = document.getElementById('confirm').value;
		if(password.match(confirm)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        if(password !== confirm) {
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(password==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function validemail2(){
const form = document.getElementById('validemail2');
const email2 = document.getElementById('email2').value;
const emailpattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if(email2.match(emailpattern2)) {
			form.classList.add('valid')
            form.classList.remove('invalid')
	    }
        else{
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
        if(email2 ==""){
            form.classList.remove('invalid')
            form.classList.remove('valid')
        }}

function notfilled(){
const form = document.getElementById('form1');
const a = document.getElementById('firstname').value;
const b = document.getElementById('lastname').value;
const c = document.getElementById('email').value;
const d = document.getElementById('tel').value;
const e = document.getElementById('list').value;
const f = document.getElementById('select').value;
const g = document.getElementById('password').value;
const h = document.getElementById('confirm').value;

        if(a ==""||b==""||c==""||d==""||e==""||f==""||g==""||h==""){
            alert("All Fields are Required");
        }
        if(g!== h) {
            alert("Password doesn't Match. Both Passwords must be same.")
        }
    }

function unvalid(){
const form = document.getElementById('form2');
const l = document.getElementById('email2').value;
const m = document.getElementById('password2').value;

        if(l==""||m==""){
            alert("All Fields are Required");
        }}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('register');

signUpButton.addEventListener('click', () => {
	container.classList.add("motion");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("motion");
});





