const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


const alertbox = document.querySelector('.alert-box');
const profileBox = document.querySelector('.profile-box');
const avatarCircle = document.querySelector('.avatar-circle');




registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});





avatarCircle.addEventListener('click', () => profileBox.classList.toggle('show'));

setTimeout(() => alertbox.classList.add('show'),50);

setTimeout(() => {
    alertbox.classList.remove('show');
    setTimeout(() => alertbox.remove(),1000);
},6000);

/**contact.html */

function sendMail(){

    let parms = {
         Name : document.getElementById("name").value,
         Subject: document.getElementById("subject").value,
         Email: document.getElementById("email").value,
          Student , Startup: document.getElementById("option").value,
          Query: document.getElementById("message").value,

    }

    emailjs.Send("service_j1b46b4","template_9o3ekqt",parms).then(alert("Email Sent !!"));
}


