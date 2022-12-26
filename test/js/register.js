document.getElementById("formSignUp").onsubmit = function () {
// alert();
    //Name has from 6 to 30 letter characters, including space
    let pass1 = document.getElementById("password1").value.trim();
    // let r = /^\w{7,}$/;
    if (pass1.length < 7) {
        alert("password is not strong !");
        document.getElementById("password1").focus;
        return false;
    }


    //password
    // let pass1 = document.getElementById("password1").value.trim();
    let pass2 = document.getElementById("password2").value.trim();
    if (pass1 != pass2) {
        alert("Password and Retype Password do not match !");
        document.getElementById("password1").focus;
        return false;
    }

    //Email has format xxxx@xxxx.xxx
    let email = document.getElementById("email").value;
    let e = /^([0-9]|\w){4,}@\w{4,}.\w{2,3}$/;
    if (e.test(email) == false) {
        alert("nhap lai email !");
        document.getElementById("email").focus;
        return false;
    }

    //Phone has format xxxxxxxx[xxx] , x: digit.
    let tel = document.getElementById("phone").value;
    let p = /^\d{10}$/;
    if (p.test(tel) == false) {
        alert("nhap lai SDT !");
        document.getElementById("phone").focus;
        return false;
    }

    alert('Thank You For Your Register Our Product!');
}